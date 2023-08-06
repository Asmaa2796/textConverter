let speech = new SpeechSynthesisUtterance();

const listen = document.querySelector('.listen');
const textToConvert = document.querySelector('.textToConvert');
const voicesOptions = document.querySelector('.voicesOptions');

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voices,i) => (voicesOptions.options[i] = new Option(voices.name,i)));
};

voicesOptions.addEventListener('change',() => {
  speech.voice = voices[voicesOptions.value];
});

listen.addEventListener('click',() => {
  speech.text = textToConvert.value;
  window.speechSynthesis.speak(speech);
});