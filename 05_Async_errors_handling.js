// Base async functional:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  const fetchedText = await fetchText();
  console.log(`This is a feature of ${fetchedText}`); // This is a feature of ES8
};

showText();


// Error handling with 'try/catch':
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  try {
    const fetchedText = await fetchText();
    console.log(`This is a feature of ${fetchedText}`);
  } catch (e) {
    console.log(e);
  }
};

showText();


// Argument 'e' (error object) in 'catch' is not nessesary anymore
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  try {
    const fetchedText = await fetchText();
    console.log(`This is a feature of ${fetchedText}`);
  } catch {
    console.log('Something going wrong...');
  }
};

showText();


// Error handling with 'catch' in 'await' function:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
    const fetchedText = await fetchText().catch(e => console.log(e));
    console.log(`This is a feature of ${fetchedText}`);
};

showText();


// Error handling with 'catch' for full async function:
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
    const fetchedText = await fetchText();
    console.log(`This is a feature of ${fetchedText}`);
};

showText()
  .then(console.log('Everything is OK!'))
  .catch(e => console.log(e));


// Using 'finally' as a 3rd step of 'try/catch':
const fetchText = () => new Promise(resolve => { setTimeout(() => resolve('ES8'), 2000); });

const showText = async () => {
  try {
    showSpiner = true;
    const fetchedText = await fetchText();
    console.log(`This is a feature of ${fetchedText}`);
  } catch {
    console.log('Something going wrong...');
  } finally {
    showSpiner = false;
  }
}

showText();
