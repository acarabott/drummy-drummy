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

const playChord = (notes, time, mul, att, rel) => {
  notes.forEach(note => playNote(note, time, mul, att, rel));
};

const timingWindow = 0.1;

const keydown = (event) => {
  const curTime = audio.currentTime;
  const ahead = Math.abs(curTime - Math.ceil(curTime));
  const behind = curTime - Math.floor(curTime);

  if (ahead < timingWindow || behind < timingWindow) {
    playChord([72, 76, 79]);
    console.log('HIT!');
  } else {
    playChord([71, 72, 73]);
    console.log('miss');
  }
};

const bindInput = () => {
  document.body.addEventListener('keydown', keydown);
};

const createMetro = (numBeats=100) => {
  for (let i = 0; i < numBeats; i++) {
    playNote(60, Math.ceil(audio.currentTime) + i);
  }
};

bindInput();
createMetro(100);
