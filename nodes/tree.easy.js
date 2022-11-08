class TreeNode {
  constructor(root){
      this.root = root;
      this.leftNode = null;
      this.rightNode = null;
  }

  addToTree(value){
      if(value < this.root){
          this.leftNode = new TreeNode(value);
      } 
      if(value > this.root){
          this.rightNode = new TreeNode(value);
      }
  }


}


function searchTree(value, node){
  if(node.root == value || node.root == null){
    return node.root;
  } else {
    if(value > node.root){
      return searchTree(value, node.rightNode);
    } else {
      return searchTree(value, node.leftNode);
    }
  }
}

const rootTree = new TreeNode(10);

// console.log(rootTree);

rootTree.addToTree(5);
rootTree.addToTree(20);

// console.log(rootTree);

console.log(searchTree(5, rootTree));
