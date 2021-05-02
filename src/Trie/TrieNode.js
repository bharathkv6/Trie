class TrieNode {
    constructor(char){
        this.char = char;
        this.isEndWord = false;
        this.children = new Array(26).fill(null);
    }

    markAsLeaf = () => {
        this.isEndWord = true;
    }

    unmarkAsLeaf = () => {
        this.isEndWord = false;
    }
}

export default TrieNode;