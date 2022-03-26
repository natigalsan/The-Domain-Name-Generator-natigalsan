let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominios = [".com", ".net", ".us"];
//-----------------------------------según enunciado usar bucles anidados----------------------------------------
window.onload = function() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let y = 0; y < dominios.length; y++) {
          console.log(pronoun[i] + adj[j] + noun[x] + dominios[y]);
        }
      }
    }
  }
};
