function isPrime(number) {
  if (number < 2) return false;
  const raiz = Math.sqrt(number);
  for (let testFactor = 2; testFactor <= raiz; testFactor++) {
    if (number % testFactor === 0) return false;
  }
  return true;
}

for (let index = 0; index < 1000; index++)
  if (isPrime(index)) console.log(index);
