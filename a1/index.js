const myMean = (array) => {
  return array.reduce((a, b) => a + b) / array.length;
};

const getPrimes = (array) => {
  let primes = [];
  array.forEach((a) => {
    for (let i = 2; i < a; i++) if (a % i == 0) return;
    primes.push(a);
  });
  return primes;
};

const partition = (array, belongToGroup1) => {
  let obj = {
    group1: [],
    group2: [],
  };
  array.forEach((value) => {
    if (belongToGroup1(value)) {
      obj.group1.push(value);
    } else {
      obj.group2.push(value);
    }
  });
  return obj;
};

const makeSentences = (array) => {
  let output = [];
  array.forEach((value) => {
    let { name, age, breed } = value;
    output.push(`${name} is ${age} years old, and is a ${breed}`);
  });
  return output;
};
