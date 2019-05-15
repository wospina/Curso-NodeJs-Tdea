console.log('Fundamentos Nodejs')

function promedio (n1,n2,n3){
    let result = (n1 + n2 + n3)/3;
    console.log('Resultado Promedio 1: ' +  result);
}

// funcion con asincronismo
let promedio2 = (n1,n2,n3,callback) => {
    setTimeout(() => {      
    let result = (n1 + n2 + n3)/3;
   callback(result);
}, 2000);
}

let promedio3 = (n1,n2,n3) => console.log('Resultado Promedio 3: ' + (n1 + n2 + n3)/3);

promedio(2,4,6);
// imprime el valor cuando result tenga valor por medio del callback
promedio2(6,6,6, function(result){
    console.log('Resultado Promedio 2: ' + result);
});
promedio3(5,4,6);