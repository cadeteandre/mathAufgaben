// ============================
//         Level-1_1
// ============================
console.log('%c ---------- Level-1_1 ----------', 'background: black; color: gold;');

const PI: number = Number(Math.PI.toFixed(2));

console.log(PI);
console.log(Math.PI);

// ============================
//         Level-1_2
// ============================
console.log('%c ---------- Level-1_2 ----------', 'background: black; color: gold;');

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];
const roundNumber = (num: number) => Math.round(num);
randomNumbers.forEach((elt) => console.log(roundNumber(elt)));

// ============================
//         Level-1_3
// ============================
console.log('%c ---------- Level-1_3 ----------', 'background: black; color: gold;');

const randomNum: number = Math.random();
console.log(randomNum);
const randomNum1_10: number = Math.round(Math.random() * 10);
console.log(randomNum1_10);
const randomNum1_100: number = Math.round(Math.random() * 100);
console.log(randomNum1_100);

// ============================
//         Level-1_4
// ============================
console.log('%c ---------- Level-1_4 ----------', 'background: black; color: gold;');

console.log(Math.min(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));
console.log(Math.max(393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488));

// ============================
//         Level-2_2
// ============================
console.log('%c ---------- Level-2_2 ----------', 'background: black; color: gold;');

const answer: string | null = prompt('Schätzen Sie die Nummer zwischen 1 und 10');
const guessTheNumber = (answer: string | null) => {
    const answerAsNum: number = Number(answer);
    const randomNumber: number = Math.round(Math.random() * 10);
    answerAsNum === randomNumber ? console.log(`Du hast gewonnen. Die Nummer lautet genau ${randomNumber}`) : console.log(`Du hast verloren. Die Nummer lautet ${randomNumber}`);
}
guessTheNumber(answer);