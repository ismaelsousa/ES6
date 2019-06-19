// class List{
//     constructor(){
//         this.data = [];
//     }

//     add(data){
//         this.data.push(data);
//         console.log(data);
//     }
// }

// class TodoList extends List{
//   constructor(){
//       super();
//       this.usuario = 'ismael';
//   }
// }

// const minhalista = new TodoList();

// document.getElementById("novotodo").onclick = function(){
//     minhalista.add("novo");
// }

//REST = pega o resto das propriedades
// const usuario ={
//     nome: "ismael",
//     idade: 23,
//     empresa: "sem"
// }

// const {nome, ...resto} = usuario;

// // console.log(nome)
// // console.log(resto)

// const arr = [1,2,3];

// const [a, ...c] = arr;
// console.log(a)
// console.log(c)

// function soma(...params){
//     return params.reduce((total, next) => total + next )
// }

//SPREAD

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1, ...arr2]

// console.log(arr3);

// const usuario ={
//     nome: "ismael",
//     idade: 23,
//     empresa: "sem"
// }

// const usuario2 = {...usuario, nome: "ze"}
// console.log(usuario2);

//####################### TEMPLATE LITERALS ############3

// const nome = "ismael"
// const idade = 21;

// console.log("meu nome é"+nome+ 'idade'+idade);
// console.log(`meu nome é ${nome} e tenho ${idade} ano`);

//####################### OBJECT SHORT SYNTAX ############3

//não precisa sobreescrever

// const nome = "ismael"
// const idade = 21;

// const usuario ={
//     nome,
//     idade,
//     empresa: "sem"
// }

//####################### WEBPACK import e export #######################
// import soma2,{ sub as s} from '../funcoes';

// console.log(s(1,2));


alert('teste');