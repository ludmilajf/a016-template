const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

// for(i=0; i<filmes.length; i++){
//   let tituloFilme = filmes[i].titulo;
//   let anoFilme = filmes[i].ano;
//   let diretorFilme = filmes[i].diretor
//   let elencoFilme = ""
//    for(let j=0; j<filmes[i].elenco.length; j++){
//     elencoFilme += filmes[i].elenco[j]
//   }
//   let filme = `${tituloFilme}, de ${anoFilme}, dirigido por ${diretorFilme}.
//   Elenco: ${elencoFilme}`
//   console.log(filme);
// }


// for(let i in filmes){
//   console.log(`Filme ${Number(i)+1}: 
//   ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
//     for(let j of filmes){
//       j += filmes[i].elenco
//       console.log(`Elenco: ${j}`);
//     }  
// }

// for (let i=0; i < filmes.length; i++){
//   console.log(`Filme ${Number(i)+1}:`);
//   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`);
//   for(let j=0; j<filmes[i].length; i++){
//     console.log(filmes.elenco[i][j]);
//   }
// }








// Prática guiada:

// const megaSena = [
//   [1, 3, 5, 7],
//   [0, 2, 4, 6],
//   [4, 8, 12, 18],
//   [5, 10, 15, 20]
//]
// if(megaSena.length === 4){
//   //console.log(megaSena.length)
//   for(let i = 0; i<megaSena.length; i++){
//     //console.log(`sorteio ${i+1} - ${megaSena[i]}`)
//     let sorteio = `sorteio ${i}: `
//     for(let j = 0; j<megaSena[i].length; j++){
//       sorteio = sorteio + megaSena[i][j] + ", "
//       //console.log(megaSena[i][j]);
//     }
//     console.log(sorteio);
// }
// }else{
// console.log("é necessário alterar o número de itens dentro do array");
// }


//Prática guiada 2 e 3:

// if(megaSena.length === 4){
//   for(let i in megaSena){ //ALTERADO PARA FOR IN 
//     let sorteio = `sorteio ${Number(i)+1}: `
//     for(let j of megaSena[i]){ //ALTERADO PARA FOR OF
//       sorteio += j + ", " // NÃO PRECISA DO I
//     }
//     console.log(sorteio);
// }
// }else{
// console.log("é necessário alterar o número de itens dentro do array");
// }


