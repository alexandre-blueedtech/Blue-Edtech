var compra = "R$100.98";
var pago = "R$150.00"
compra = Number(compra.split("R$")[1]);
pago = Number(pago.split("R$")[1]);
console.log(`R$${pago - compra}`);