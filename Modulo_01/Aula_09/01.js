function lista(a,b){
    let menor; 
    let maior;
    if(a < b){
        menor = a;
        maior = b;
    }else{
        menor = b;
        maior = a;
    }
    let arr = [];
    for (let index = 0; index < maior - menor + 1; index++) arr.push(menor + index);
    return arr;
}