import _ from 'lodash';
import axios from 'axios';
// import 
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let input = document.getElementById('input');
let mouth = {x: 0, y: 0, w: 20, h: 20};
let text = input.value;
let time = 0;
let setting = {
  audioConfig: {
    audioEncoding: "LINEAR16",
  },
  input: {
    text: "Фыр фыр фыр"
  },
  voice: {
    languageCode: "ru-ru",
  }
}

const keyHandler = _.debounce(() => {
  say(input.value);
}, 1000, false);

say(input.value);

input.addEventListener('keyup', keyHandler)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let image = new Image();

image.src = 'assets/img/lama.png';

image.addEventListener('load', () => {
  mouth = {x: canvas.width / 2 + (image.width / 2 * 0.12), y: canvas.height - image.height * 0.75, w: 20, h: 20};
  ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height - image.height, image.width, image.height);
});

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
const analyser = audioCtx.createAnalyser();

analyser.fftSize = 64;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
var dataArray2 = new Uint8Array(bufferLength);

analyser.getByteTimeDomainData(dataArray);

const audio = new Audio();
const source = audioCtx.createMediaElementSource(audio);

async function say(text) {
  try {
    setting.input.text = text;
    const { data: { audioContent } = {} } = await axios.post('https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyDqXWG_Pw4kKldwZCBQYsvNYaw7oeV7kG0', setting);

    audio.src = 'data:audio/wav;base64,' + audioContent;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    audio.play();
    return audioContent;
  } catch(e) {
    console.log('errorr', e);
  }
}

function speakAnimation(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  analyser.getByteFrequencyData(dataArray);
  analyser.getByteFrequencyData(dataArray2);
  // const h = dataArray[0];
  const h = Math.abs(dataArray.reduce((sum, val) => sum + val, 0));
  let h2 = Math.abs(dataArray2.reduce((sum, val) => sum + val, 0));
  h2 = h2 < 0 ? 0 : h2;

  ctx.beginPath();
  ctx.arc(mouth.x, mouth.y - 20, 20 + dataArray[5], 0, 2 * Math.PI);
  ctx.fillStyle = '#fee0d4';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#894554';
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = '#964762';

  // ctx.lineTo(canvas.width, canvas.height/2);

  ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height - image.height, image.width, image.height);
  // ctx.rect(mouth.x, mouth.y, 10, 10);
  roundRect(ctx, mouth.x, mouth.y, 12, 1 + dataArray[5] / 17, {tl: 0, tr: 0, br: 4, bl: 4}, 'black', 'transparent');
  window.requestAnimationFrame(speakAnimation);
}

speakAnimation();
