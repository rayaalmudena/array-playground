// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter((e)=> e.startsWith("e"))); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal

console.log(words.filter((e)=>/^[aeiou]/i.test(e))); // TODO [ 'elite', 'exuberant', 'away']
