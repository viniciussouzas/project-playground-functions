// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = numbersArray => {
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let countReps = 0;

  for (let numbers of numbersArray) {
    let reps = 0;
    for (let verify of numbersArray) {
      numbers === verify ? reps += 1 : reps += 0;
    }
    reps > countReps ? countReps = reps : countReps += 0;
  }
    
  let areaCode = [];
  let sequence1 = [];
  let sequence2 = [];

  for (let numbers of numbersArray) {
    if (numbers < 0 || numbers > 9 || countReps >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (areaCode.length < 2) {
      areaCode.push(numbers);
    } else if (sequence1.length < 5) {
      sequence1.push(numbers);
    } else if (sequence2.length < 4) {
      sequence2.push(numbers);
    }
  }

  return `(${areaCode.join('')}) ${sequence1.join('')} - ${sequence2.join('')}`;

}

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
