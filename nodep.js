//shoethand method syntax
const utility = {
  circle(x) {
    return Math.PI * x ** 2;
  },
  square(x) {
    return x * x;
  },

  rectangle(x, y) {
    return x * y;
  },
};

let circ = utility.circle(2);
let square = utility.square(2);
let rect = utility.rectangle(2, 3);
// console.log(`${circ} ${square} ${rect}`);

//caplculated property names
const namespace = 'ultra-';

const heroUltimates = {
  [namespace + 'dgun']: 'disintegration gun',
  [namespace + 'invincibile']: 'suffer not unclean to live',
};

// console.table(heroUltimates);

//getters setters in objects

const weaponsAndEqipment = {
  //get method act like firring weapon
  get bolter() {
    console.log(`target hits multiple times with bolter`);
  },

  //set method acts like weapon reload
  set bolter(ammunitionType) {
    console.log(`Bolter reloaded with ${ammunitionType} ammo. Redy to purge!`);
  },
};

// weaponsAndEqipment.bolter='vengence';
// weaponsAndEqipment.bolter;

//maps and sets

const configurations = new Map();
configurations.set('ammo', '20');
configurations.set('krack', '1');
configurations.set('frag', '2');

// console.table(configurations);
// console.log(configurations.size)

const hasCrackGenades = configurations.get('krack') > 0;
const hasFragGrenades = configurations.get('frag') > 0;
const hasAmmo = configurations.get('ammo') > 0;
// console.log(hasCrackGenades);

const isBattleReady = hasCrackGenades || hasFragGrenades || hasAmmo;

// console.log(isBattleReady);

// console.table(configurations);
// console.log(configurations.delete('ammo'));
// console.table(configurations);
let ammoOverall = 0;
for (const [key, value] of configurations) {
  // console.log(key + ' ' + value);
  ammoOverall += parseInt(value);
}
// console.log(ammoOverall);

//functions as object keys

const tester = new Map();
tester.set(function addition() {
  return 3 + 3;
}, '6');

tester.set(function multiplication() {
  return 2 * 2;
}, '4');
// console.table(tester);

// tester.set('ode','1');

// console.table(tester)
// console.log(tester.get('6'))

for (const [testAssertion, resolvedTest] of tester) {
  // console.log('test basic math ');
  const isTestPased = `${testAssertion().toString() === resolvedTest}`;
  // console.log(
  //   testAssertion.name + ' ' + (isTestPased ? 'passed' : 'not passed'),
  // );
}

// usage of weakMap

let weapons = {};

const mapW = new WeakMap();
mapW.set(weapons, { armor: 'mk X gravis' });

// console.log(mapW.has(weapons));
// console.log(mapW.get(weapons));

weapons = undefined;

// console.log(mapW.get(weapons));


//

