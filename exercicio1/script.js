//# Exercício 1

//Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **e** por 3.
    
//Faça isso:
    
//**a)** Utilizando ifs aninhados
const numero = Number(prompt("Digite um numero"))

    if (numero %2 === 0) {
     
       if (numero %3 === 0) {
        
        console.log("É divisível por 2 e 3");

       } else {
        
        console.log("Não é divisível por 3");
        
       }
          
    } else {
        
        console.log("Não é divisível por 2");
    
        if (numero %3 === 0) {
            
            console.log("É divisível por 3");
        }else{
            console.log("É divisível po 3");
        }
    }

//**b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E 
// if(numero %2 === 0 && numero %3 === 0){

//     console.log("É divisível por 2 e 3");
// }else{

//     console.log("Não é divisível por 2 e 3");
// }
    
// //     }
    
// //     if(expressao || expressao){
// //         // utilizamos o II para OU
// //     }
// // ```
// if(numero %2 === 0 || numero %3 === 0){

//     console.log("É divisível por 2 ou 3");
// }else{

//     console.log("Não é divisível por 2 ou 3");
// }