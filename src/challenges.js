// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (par1, par2) => (par1 && par2 === true) ? true : false

// Desafio 2 - Crie a função splitSentence
const splitSentence = string => string.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = arrayStrings => `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = arrayNumbers => {
  let highestNumber = arrayNumbers[0];
  let repeat = 1;

  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
      repeat = 1;
    } else if (arrayNumbers[index] === highestNumber) {
      repeat += 1;
    }
  }
  return repeat
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}.`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}.`;
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida.`
  }
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
};

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = arrayFizzBuzz => {

  const keepFizzBuzz = [];

  for (index of arrayFizzBuzz) {
    if (index % 3 === 0 && index % 5 === 0) {
      keepFizzBuzz.push('fizzBuzz');
    } else if (index % 5 === 0) {
      keepFizzBuzz.push('buzz');
    } else if (index % 3 === 0) {
      keepFizzBuzz.push('fizz');
    } else {
      keepFizzBuzz.push('bug!');
    }
  }
  return keepFizzBuzz;
}

// yarrayFizzBuzzesafio 9 - Crie a função encode e a função decode
const encode = stringEncode => {

  let stringEncoded = '';

  for (let index = 0; index < stringEncode.length; index += 1) {

    if (stringEncode[index] === 'a') {
      stringEncoded += stringEncode[index].replace('a', '1');
    } else if (stringEncode[index] === 'e') {
      stringEncoded += stringEncode[index].replace('e', '2');
    } else if (stringEncode[index] === 'i') {
      stringEncoded += stringEncode[index].replace('i', '3');
    } else if (stringEncode[index] === 'o') {
      stringEncoded += stringEncode[index].replace('o', '4');
    } else if (stringEncode[index] === 'u') {
      stringEncoded += stringEncode[index].replace('u', '5');
    } else {
      stringEncoded += stringEncode[index];
    }
  }
  return stringEncoded;
}

const decode = stringDecode => {
  let stringDecoded = '';

  for (let index = 0; index < stringDecode.length; index += 1) {

    if (stringDecode[index] === '1') {
      stringDecoded += stringDecode[index].replace('1', 'a');
    } else if (stringDecode[index] === '2') {
      stringDecoded += stringDecode[index].replace('2', 'e');
    } else if (stringDecode[index] === '3') {
      stringDecoded += stringDecode[index].replace('3', 'i');
    } else if (stringDecode[index] === '4') {
      stringDecoded += stringDecode[index].replace('4', 'o');
    } else if (stringDecode[index] === '5') {
      stringDecoded += stringDecode[index].replace('5', 'u');
    } else {
      stringDecoded += stringDecode[index];
    }
  }
  return stringDecoded;
}

// Desafio 10 - Crie a função techList
const techList = (techName, personName) => {
  techName.sort();
  let arrayList = [];

  for (let index of techName) {
    let objectArray = {
      tech: index,
      name: personName,
    };
    arrayList.push(objectArray);
  }

  if (techName.length === 0) {
    return 'O array está vazio!';
  }

  return arrayList;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
