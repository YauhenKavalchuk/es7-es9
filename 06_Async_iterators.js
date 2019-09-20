// Base Array (iterable instance):
const names = ['Jack', 'Max', 'Leo'];
// 'for-of' iteration:
for(let name of names) {
  console.log(name); // 'Jack', 'Max', 'Leo'
}


// Base async Array:
const names = [
  new Promise(resolve => resolve('Jack')),
  new Promise(resolve => resolve('Max')),
  new Promise(resolve => resolve('Leo')),
];

// Async function for iteration with 'for-of':
const showNames = async () => {
  for (name of names) {
    console.log(name);
  }
};
showNames(); // Promise, Promise, Promise

// Async function for iteration with 'for-await-of':
const showNames = async () => {
  for await (name of names) {
    console.log(name);
  }
};
showNames(); // 'Jack', 'Max', 'Leo'


// Async generator function:
async function* readLines(path) {
  let file = await fileOpen(path);

  try {
    while (!file.EOF) {
      yield await file.readLine();
    }
  } finally {
    await file.close();
  }
};


// Async iteration of async generator function results:
for await (const line of readLines(filePath)) {
  console.log(line);
};
