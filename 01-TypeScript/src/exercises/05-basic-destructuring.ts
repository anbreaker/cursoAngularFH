/*
    ===== Código de TypeScript =====
*/

interface Player {
  volume: number;
  second: number;
  song: string;
  details: Detalles;
}

interface Detalles {
  autor: string;
  year: number;
}

const reproductor: Player = {
  volume: 90,
  second: 36,
  song: 'Mess',
  details: {
    autor: 'Ed Sheeran',
    year: 2015,
  },
};

const { volume, second, song, details } = reproductor;
const { autor } = details;

console.log('The current volume of: ', volume);
console.log('The current second of: ', second);
console.log('The current details of: ', details);
console.log('The current autor of: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

// console.log('Character 1:', p1 );
// console.log('Character 2:', p2 );
console.log('Character 3:', p3);
