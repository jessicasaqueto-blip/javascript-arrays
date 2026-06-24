const notas = [7, 8, 6, 9, 4];

notas.pop();
notas.push(10);

const media = (notas[0] + notas[1]+ notas[2] + notas[3]) / notas.length;

console.log("Notas:", notas);
console.log("Média:", media);