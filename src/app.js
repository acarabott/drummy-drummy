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

let timingWindow = 0.15;

const keydown = (event) => {
  const curTime = audio.currentTime;
  const aheadTime = Math.abs(curTime - Math.ceil(curTime));
  const behindTime = curTime - Math.floor(curTime);
  const withinWindowBefore = aheadTime < (timingWindow / 2);
  const withinWindowAfter = behindTime < (timingWindow / 2);

  if (withinWindowBefore || withinWindowAfter) {
    playChord([72, 76, 79]);
    console.log('HIT!');
  } else {
    playChord([71, 72, 73]);
    console.log('miss');
    console.log(aheadTime < behindTime ? 'early!' : 'late!');
  }
};

const bindKeyboardInput = () => {
  document.body.addEventListener('keydown', keydown);
};

const createMetro = (numBeats=100) => {
  for (let i = 0; i < numBeats; i++) {
    playNote(60, Math.ceil(audio.currentTime) + i);
  }
};

const createTimingInput = () => {
  const input = document.createElement('input');
  const name = 'window';

  input.name = name;
  input.type = 'number';
  input.min = 0;
  input.step = 0.01;
  input.value = timingWindow;

  input.addEventListener('change', (event) => {
    timingWindow = event.target.valueAsNumber;
    console.log("timingWindow:", timingWindow);
  });

  const label = document.createElement('label');
  label.htmlFor = name;
  label.textContent = 'Timing window';

  document.body.appendChild(label);
  document.body.appendChild(input);
};

bindKeyboardInput();
createMetro(100);
createTimingInput();
