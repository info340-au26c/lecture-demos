const adjectives = ['purple', 'blue', 'large', 'tiny', 'studious', 'curious', 'sleepy', 'friendly', 'adventurous', 'mysterious', 'brave', 'clever', 'mischievous'];
const nouns = ['cat', 'student', 'robot', 'fox', 'wizard', 'dragon', 'librarian', 'astronaut'];
const articles = ['Our', 'Your', 'What', 'The', 'A'];
const verbs = ['chased', 'discovered', 'painted', 'visited', 'befriended', 'challenged', 'helped', 'studied'];
const objects = ['a hidden garden', 'the old lighthouse', 'a basket of apples', 'the moonlit forest', 'an ancient book', 'a secret passage'];
const vowels = ['a', 'e', 'i', 'o', 'u']

const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

export function generateRandomSentence() {
  let article = pickRandom(articles);
  const adjective = pickRandom(adjectives);
  const noun = pickRandom(nouns);
  if (vowels.includes(adjective[0].toLowerCase()) && article === "A") {
    article = "An"
  } else if (!vowels.includes(adjective[0].toLowerCase()) && article === "An") {
    article = "A"
  }

  const subject = `${article} ${adjective} ${noun}`;
  const verb = pickRandom(verbs);
  const object = pickRandom(objects);

  const punc = article === "What" ? "?" : ".";

  return `${subject} ${verb} ${object}${punc}`;
}
