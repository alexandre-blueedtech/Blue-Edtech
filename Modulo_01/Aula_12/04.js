function dataExtenso(str){
    str = str.split('/');
    let mes;
    if(str[1] == 1) mes = 'janeiro';
    if(str[1] == 2) mes = 'fevereiro';
    if(str[1] == 3) mes = 'março';
    if(str[1] == 4) mes = 'abril';
    if(str[1] == 5) mes = 'maio';
    if(str[1] == 6) mes = 'junho';
    if(str[1] == 7) mes = 'julho';
    if(str[1] == 8) mes = 'agosto';
    if(str[1] == 9) mes = 'setembro';
    if(str[1] == 10) mes = 'outubro';
    if(str[1] == 11) mes = 'novembro';
    if(str[1] == 12) mes = 'dezembro';
    return `${str[0]} de ${mes} de ${str[2]}`;
}

console.log(dataExtenso('07/09/1995'));