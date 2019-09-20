// Base async function:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  const fetchedText = await fetchText();
  console.log(`This is a feature of ${fetchedText}`);
};

showText(); // This is a feature of ES8


// Work sync with async functionality:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = () => {
  const fetchedText = fetchText();
  console.log(`This is feature a of ${fetchedText}`);
};

showText(); // This is a feature of [object Promise]


// Async function always return Promise
// We can handle result:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  const fetchedText = await fetchText();
  return `This is feature a of ${fetchedText}`;
};

showText().then(data => console.log(data)); // This is a feature of ES8


// if async function return simple value,
// this value still be in Promise
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  const fetchedText = await fetchText();
  return 10;
};

console.log(showText()); // Promise
showText().then(data => console.log(data)); // 10


// Execute of 2 and more async functions:
const fetchDescrText = () => new Promise(resolve => { setTimeout(() => resolve('This is a feature of'), 2000); });
const fetchEsText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  const fetchedDescrText = await fetchDescrText();
  const fetchedEsText = await fetchEsText();
  return `${fetchedDescrText} ${fetchedEsText}`;
};

// Receive result after ~4000ms
showText().then(data => console.log(data)); // This is a feature of ES8


// Parallel execute of async functions:
const showText = async () => {
  const [fetchedDescrText, fetchedEsText] = await Promise.all([fetchDescrText(), fetchEsText()]);
  return `${fetchedDescrText} ${fetchedEsText}`;
};

// Receive result after ~2000ms
showText().then(data => console.log(data)); // This is a feature of ES8
