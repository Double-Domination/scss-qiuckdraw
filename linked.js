class LinkedList {
  constructor() {
    this.list = {};
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addElement(recivedElement) {
    //first element insertion
    if (this.size === 0) {
      this.head = recivedElement;
      this.tail = recivedElement;
      this.size += 1;
    }
    Object.defineProperty(this.list, ['item' + this.size - 1], {
      value: new ListNode(recivedElement),
      enumerable: true,
      writable: true,
      configurable: true,
    });
  }

  insertElement(recivedElemen, index) {}

  replaceElement(recivedElemen, index) {}

  removeTopElement() {}

  removeTailElement() {}

  clean() {
    this.list = {};
    this.head = null;
    this.head = null;
  }

  nextInList() {}

  prevousInList() {}
  showInfo() {}
}

class ListNode {
  constructor(recivedValue) {
    this.value = recivedValue;
    this.next = null;
    this.prevous = null;
    this.index = null;
  }
}

//================================================================

function linkedQueue() {
  //Structure of node
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;

  };

  let length = 0;
  let head = null;
  let tail = null;

  this.append = function (element) {};

  this.insert = function (position, element) {};

  this.removeAt = function (position) {};

  this.removeTailElement = function () {};

  this.getAtIndex = function (inIndex) { };

  this.isEmpty = function () { };

  this.size = function (arguments) { };

  this.toString = function (arguments) { };

  this.showInfo = function () {};
  
}

