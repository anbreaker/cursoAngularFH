/*
    ===== Código de TypeScript =====
*/

function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(num: number, otherNum?: number, base: number = 2): number {
  return num * base;
}

interface CharacterLOR {
  name: string;
  pv: number;
  showHp: () => void;
}

function cure(character: CharacterLOR, cureX: number): void {
  character.pv += cureX;
}

const newCharacter: CharacterLOR = {
  name: 'Strider',
  pv: 50,
  showHp() {
    console.log('Life points:', this.pv);
  },
};

cure(newCharacter, 20);

newCharacter.showHp();
