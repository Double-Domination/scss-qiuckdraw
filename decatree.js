class TreeNode {
  constructor(value) {
    this.leftChild = null;
    this.rigtChild = null;
    this.value = value;
  }
}
s
class BinaryTree {
  constructor() {
    this.tree = {};
  }

  addNode(recivedValue, attachToNode) {
    if (typeof attachToNode === 'undefined') {
      Object.defineProperty(this.tree, ['node_' + recivedValue], {
        value: new TreeNode(recivedValue),
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
  }

  showInfo() {
    console.table(this.tree);
  }
}

const bst = new BinaryTree();

bst.addNode(8);
bst.addNode(6);
bst.addNode(5);


bst.showInfo();


// for (const key in bst.tree) {
//     console.log(`${key}>>>  ${bst.tree[key].value} `);
// }
