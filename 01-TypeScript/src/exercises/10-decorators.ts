/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class MySuperClass {
  public miPropiedad: string = 'ABC123';

  print() {
    console.log('Hello World');
  }
}

console.log(MySuperClass);

const miClase = new MySuperClass();
