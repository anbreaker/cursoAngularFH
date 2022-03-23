/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  nombre: string;
  hp: number;
  habilidades: string[];
  natalTown?: string;
}

const character: Character = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

character.natalTown = 'Pueblo Paleta';

console.table(character);
