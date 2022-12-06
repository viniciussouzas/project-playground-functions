// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (par1, par2) => (par1 && par2 === true) ? true : false

// Desafio 2 - Crie a função splitSentence
const splitSentence = string => string.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = arrayStrings => `${arrayStrings[arrayStrings.length -1]}, ${arrayStrings[0]}`;

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
  if ( form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}.`;
  } else if ( form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}.`;
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida.`
  }
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let cat1Distance = Math.abs (mouse - cat1);
  let cat2Distance = Math.abs (mouse - cat2);

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

  for (let index of arrayFizzBuzz) {
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

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
