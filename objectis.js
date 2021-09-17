const object1 = {
  a: '1',
  b: '2',
  c: '3',
};

const object2 = object1;

object2.b = 'z';
object2.c = 'z';
object2.a = 'z';

const objShallowCopy1 = {
  shallow: '1',
  sh: '2',
  allow: '2',
  all: '3',
};

let objShallowCopy2 = {};

Object.assign(objShallowCopy2, objShallowCopy1);

objShallowCopy2.shallow = 'zsfd';
objShallowCopy2.HHH = 'zsfd';
objShallowCopy2.FFF = 'zsfd';

Object.defineProperty(object2, 'prop', {
  value: 'NEW',
  enumerable: true,
  writable: true,
  configurable: true,
});

const object3 = { ...object1 };

object3.SE = 'mod';

const object4 = Object.create(object1, {
  alfaLegion: {
    value: 'dominus',
    enumerable: true,
    writable: true,
  },
});

console.log(object1);
console.log(object2);
console.log(object3);
console.log(Object.getPrototypeOf(object4));

const object5 = Object.getPrototypeOf(object4);
object5.JX = 'MOD';
console.log(Object.getPrototypeOf(object4));

console.log(object5);
console.log(Object.is(object1, object3));

// module.exports = arifialobj;
