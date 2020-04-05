/* eslint-disable no-useless-escape */
/* -------------------------------------------------------------------------- */
import { deserialize } from 'class-transformer';
/*                              UTILITY FUNCTIONS                             */
/* -------------------------------------------------------------------------- */

const getVoices = async () : Promise<SpeechSynthesisVoice[]>=> {
  return new Promise(
    function (resolve, reject) {
      let synth = window.speechSynthesis;
      let id;

      id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          resolve(synth.getVoices());
          clearInterval(id);
        }
      }, 10);
    }
  )
}


export const speakWord = async (word, langCode, speed = 0.8) => {
  const voices: SpeechSynthesisVoice[] = await getVoices()
  const voice = voices.find(l => l.lang === langCode)
  if (!voice) return


  const utterance = new SpeechSynthesisUtterance(word);
  utterance.voice = voice;
  utterance.rate = speed;

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

export function toClass<T>(constructor: any, json: object): T {
  return deserialize(constructor, JSON.stringify(json))
}

export function isPlayableResource(resource: string) {
  const regExps = [
    new RegExp(/^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/, 'i'), // sound cloud
    new RegExp(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/, 'i'), // youtube,
    new RegExp(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // facebook
    new RegExp(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // facebook
    new RegExp(/^(https?:\/\/)?(www\.)?streamable.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // streamable
    new RegExp(/^(https?:\/\/)?(www\.)?wistia.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // wistia
    new RegExp(/^(https?:\/\/)?(www\.)?Mixcloud.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // Mixcloud
    new RegExp(/^(https?:\/\/)?(www\.)?dailymotion.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // dailymotion
  ]

  for (const regExp of regExps)
    if (regExp.test(resource))
      return true

  return false
}

export function lightThumbnail(resource: string) {
  // eslint-disable no-useless-escape
  const regExps = [
    new RegExp(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // facebook
    new RegExp(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // facebook
    new RegExp(/^(https?:\/\/)?(www\.)?wistia.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // wistia
    new RegExp(/^(https?:\/\/)?(www\.)?Mixcloud.com\/[a-zA-Z0-9(\.\?)?]/, 'i'), // Mixcloud
  ]

  for (const regExp of regExps)
    if (regExp.test(resource))
      return 'https://blog.axelradclinic.com/wp-content/uploads/2015/06/video-thumbnail.jpg'

  return true
}