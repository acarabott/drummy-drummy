const audio = new AudioContext();


const playNote = (note=60, time=0, mul=1.0, att=0.01, rel=0.1) => {
  const osc = audio.createOscillator();
  const env = audio.createGain();

  time = time === 0 ? audio.currentTime : time;

  osc.connect(env);
  env.connect(audio.destination);

  osc.frequency.value = 440 * Math.pow(2, (note - 69) * 0.08333333333333333333);
  env.gain.value = 0;
  env.gain.linearRampToValueAtTime(mul, time + att);
  env.gain.linearRampToValueAtTime(0, time + att + rel);

  osc.start(time);
  osc.stop(time + att + rel);

  osc.addEventListener('ended', () => {
    env.disconnect();
    osc.disconnect();
  });
};

const keydown = (event) => {
  const curTime = audio.currentTime;
  console.log(curTime);
  playNote(67);

  const thresh = 0.1;
  const ahead = Math.abs(curTime - Math.ceil(curTime));
  const behind = curTime - Math.floor(curTime);
  if (ahead < thresh || behind < thresh) {
    console.log('HIT!');
  } else {
    console.log('miss');
  }
};

document.body.addEventListener('keydown', keydown);

for (let i = 0; i < 100; i++) {
  playNote(60, Math.ceil(audio.currentTime) + i);
}