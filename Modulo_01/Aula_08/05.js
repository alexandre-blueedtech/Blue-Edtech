let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
    console.log(a);
    console.log(b);
    a = a + b;
    b = a + b;
}