const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.tree = null
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addData(this.tree, data);
    function addData(node, data){
      if(node == null){
        return new Node(data)
      }
      if(node.data == data){
        return node
      }
      if(data < node.data){
        node.left = addData(node.left, data)
      }
      if(data > node.data) {
        node.right = addData(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasData(this.tree, data)
    function hasData(node, data){
      if(node == null){
        return false
      }
      if (node.data == data){
        return true
      }
      if(data < node.data){
        return hasData(node.left, data)
      }
      if(data > node.data){
        return hasData(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this.tree, data)
    function findNode(node, data){
      if(node == null){
        return null
      }
      if (node.data == data){
        return node
      }
      if(data < node.data){
        return findNode(node.left, data)
      }
      if(data > node.data){
        return findNode(node.right, data)
      }
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data)
    function removeNode(node, data){
      if(node == null){
        return null
      }
      if(data < node.data){
        node.left = removeNode(node.left, data)
        return node
      }
      else if(data > node.data){
        node.right = removeNode(node.right, data)
        return node
      }
      else {
        if(node.left == null && node.right == null){
          return null
        }
        if(node.left == null){
          node = node.right
          return node
        }
        if(node.right == null){
          node = node.left
          return node
        }
        let minRight = node.right
        while(minRight.left != null){
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeNode(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if(this.tree == null){
      return null
    }
    let node = this.tree
    while(node.left !== null){
      node = node.left
    }
    return node.data
  }

  max() {
    if(this.tree == null){
      return null
    }
    let node = this.tree
    while(node.right !== null){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};