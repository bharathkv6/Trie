import TrieNode from './TrieNode';

class Trie {
    constructor() {
        this.root = new TrieNode('');
    }

    getIndex = (t) => {
        return t.charCodeAt(0) - "a".charCodeAt(0);
    }

    insert = (key) => {
        if (!key) return;
        let currentNode = this.root || null;
        key = key.toLowerCase();
        for (let level = 0; level < key.length; level++) {
            const index = this.getIndex(key[level]);
            if (currentNode.children[index] === null) {
                currentNode.children[index] = new TrieNode(key[level]);
            }
            currentNode = currentNode.children[index];
        }
        currentNode.markAsLeaf();
    }

    search = (key) => {
        if (!key) return;
        let currentNode = this.root || null;
        key = key.toLowerCase();
        for (let level = 0; level < key.length; level++) {
            const index = this.getIndex(key[level]);
            if (currentNode.children[index] === null) return false;
            currentNode = currentNode.children[index];
        }
        if (currentNode && currentNode.isEndWord) return true;
        return false;
    }

    delete = (key) => {
        const hasNoChildren = (node) => {
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i] !== null) return false;
            }
            return true;
        }
        const deleteHelper = (currentNode, key, length, level) => {
            let deletedSelf = false;
            if (currentNode === null) return deletedSelf;
            if (length === level) {
                if (hasNoChildren(currentNode)) {
                    currentNode = null;
                    deletedSelf = true;
                } else {
                    currentNode.unmarkAsLeaf();
                    deletedSelf = false;
                }
            } else {
                const childNode = currentNode.children[this.getIndex(key[level])];
                const childDeleted = deleteHelper(childNode, key, length, level + 1);
                if (childDeleted) {
                    currentNode.children[this.getIndex(key[level])] = null;
                    if (currentNode.isEndWord) deletedSelf = false;
                    else if (hasNoChildren(currentNode) === false) deletedSelf = false;
                    else {
                        currentNode = null;
                        deletedSelf = true;
                    }
                } else {
                    deletedSelf = false;
                }
            }
            return deletedSelf;
        }
        if (this.root === null || !key) return;
        deleteHelper(this.root, key, key.length, 0);
    }
}

export default Trie;