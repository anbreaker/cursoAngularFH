/*
    ===== Código de TypeScript =====
*/

interface Passenger {
  name: string;
  childrens?: string[];
}

const passenger1: Passenger = {
  name: 'Fernando',
};

const passenger2: Passenger = {
  name: 'Melissa',
  childrens: ['Natalia', 'Gabriel'],
};

function showChildrens(passenger: Passenger): void {
  const howManyChildren = passenger.childrens?.length || 0;

  console.log({ howManyChildren });
}

showChildrens(passenger1);
