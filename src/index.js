import Trie from './Trie/Trie';

let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their","abc","answe"];

let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);
  //Construct Trie
for (let i=0; i<keys.length; i++){
    t.insert(keys[i]);
}

console.log(t.search("abc"));
console.log(t.search("answer"));
console.log(t.search("answe"));
t.delete("abc");
// t.delete("answe");
t.delete("answer");
console.log(t.search("abc"));
console.log(t.search("answer"));
console.log(t.search("answe"));