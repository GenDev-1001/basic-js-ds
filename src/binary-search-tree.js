const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.valueRoot = null;
    }
    root() {
        return this.valueRoot;
    }
    add(data) {
        if (!this.valueRoot) this.valueRoot = new Node(data);
        let currentRoot = this.valueRoot;
        while (currentRoot) {
            if (data === currentRoot.data) return 0;
            if (data < currentRoot.data) {
                currentRoot.left === null ? (currentRoot.left = new Node(data)) : (currentRoot = currentRoot.left);
            } else {
                currentRoot.right === null ? (currentRoot.right = new Node(data)) : (currentRoot = currentRoot.right);
            }
        }
    }
    has(data) {
        return !(!this.find(data));
    }
    find(data, rootNode = this.valueRoot) {
        if (!rootNode) return null
        if (rootNode.data === data) {
            return rootNode;
        } else {
            return rootNode.data > data ?
                this.find(data, rootNode.left) :
                this.find(data, rootNode.right);
        }
    }
    remove(data, node = this.valueRoot) {
        this.check(node);
        if (data === node.data) {
            if (!node.left && !node.right) return null;
            if (!node.left) return (node = node.right);
            if (!node.right) return (node = node.left)
            let maxLeft = node.left;
            while (maxLeft.right) {
                maxLeft = maxLeft.right;
            }
            node.data = maxLeft.data;
            node.left = this.remove(maxLeft.data, node.left);
            return node;
        } else if (data < node.data) {
            node.left = this.remove(data, node.left);
            return node;
        } else {
            node.right = this.remove(data, node.right);
            return node;
        }
    }
    check(node) {
        if (!node) return null;
    }
    min(node = this.valueRoot, minRoot = this.valueRoot.data) {
        this.check(node)
        if (node.data < minRoot) minRoot = node.data;
        return node.left ? this.min(node.left, minRoot) : minRoot;
    }
    max(node = this.valueRoot, maxRoot = this.valueRoot.data) {
        this.check(node)
        if (node.data > maxRoot) maxRoot = node.data;
        return node.right ? this.max(node.right, maxRoot) : maxRoot;
    }
}


module.exports = {
    BinarySearchTree
};