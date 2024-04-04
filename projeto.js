/*Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/



let heroi = "Doss"
let pontosDeXp = "456835834683458"

if (pontosDeXp <= 999) {
console.log("O jogador: " + heroi + " Está no nível Ferro, jogue mais partidas para subir de rank!")
}
else if(pontosDeXp >= 1001 && pontosDeXp <=2000){
console.log("O jogador: " + heroi + " Está no nível Bronze, jogue mais partidas para subir de rank!")
}
else if(pontosDeXp >= 2001 && pontosDeXp <=5000){
console.log("O jogador: " + heroi + " Está no nível Ouro, jogue mais partidas para subir de rank!")
}
else if(pontosDeXp >= 5001 && pontosDeXp <=8000){
console.log("O jogador: " + heroi + " Está no nível Diamante, jogue mais partidas para subir de rank!")
}
else if(pontosDeXp >= 8001 && pontosDeXp <=9000){
console.log("O jogador: " + heroi + " Está no nível Ascendente, jogue mais partidas para subir de rank!")
}  
else if(pontosDeXp >= 9001 && pontosDeXp <=10000 ){
console.log("O jogador: " + heroi + " Está no nível Imortal, jogue mais partidas para subir de rank!")
}
else if(pontosDeXp >= 10001 && pontosDeXp <=14999){
console.log("Parábens, você está Radiante, jogue mais partidas para aumentar sua colocação na tabela")
}
else if(pontosDeXp =1500){
console.log("Parábens, você é o TOP 1 do servidor")
}


//acredito que se eu tivesse feito da mesma forma com o switch case daria um resultado parecido  
   


