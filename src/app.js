//-----------------------------------según enunciado usar bucles anidados----------------------------------------
function buclesAnidados() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominios = [".com", ".net", ".us"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let y = 0; y < dominios.length; y++) {
          console.log(pronoun[i] + adj[j] + noun[x] + dominios[y]);
        }
      }
    }
  }
}
buclesAnidados();
