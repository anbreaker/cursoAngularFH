/*
    ===== Código de TypeScript =====
*/
class NormalPerson {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends NormalPerson {
  constructor(public alterEgo: string, public age: number, public realName: string) {
    super(realName, 'New York, USA');
  }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);
