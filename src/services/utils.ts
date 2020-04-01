/* -------------------------------------------------------------------------- */
/*                              UTILITY FUNCTIONS                             */
/* -------------------------------------------------------------------------- */

export const speakWord = async (word, langCode) => {
  const voice = window.speechSynthesis.getVoices().find(l => l.lang === langCode)
  if (!voice) return

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.voice = voice;
  utterance.rate = 0.75

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
}

export const customSort = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export const getGreeting = () => {
  const hours = new Date().getHours()
  let greeting = "Good Morning";
  if (hours > 6 && hours < 20) greeting = "Hello"
  else if (hours > 20) greeting = "Good Evening"
  return greeting
}