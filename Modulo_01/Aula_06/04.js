let i = 0;
let j = 0;
let resultados = [];
while (i < 100) {
  resultados.push(Math.floor(Math.random() * 6) + 1);
  i++;
}
i = 0;
j = 0;
while (i < 100) {
  if (resultados[i] === 1) j++;
  i++;
}
console.log(1, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 2) j++;
  i++;
}
console.log(2, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 3) j++;
  i++;
}
console.log(3, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 3) j++;
  i++;
}
console.log(3, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 4) j++;
  i++;
}
console.log(4, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 5) j++;
  i++;
}
console.log(5, j);
j = 0;
i = 0;
while (i < 100) {
  if (resultados[i] === 6) j++;
  i++;
}
console.log(6, j);
