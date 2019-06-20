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

//####################### async await #######################

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK") }, 2000);
})

// minhaPromise()
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err=>{

//     })

// async function executaPromise(){
//     //const response = await minhaPromise();
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }
// executaPromise();



//####################### axios #######################
// import axios from "axios";

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`)
//             console.log(response);
//         } catch (erro) {
//             console.warn('erro na api');

//         }
//     }

// }

// Api.getUserInfo("ismaelsousa");
import api from "./api";

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");
        this.inputEl = document.querySelector('input[name=repository]')

        this.registerHandlers();


    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0){
            return;
        }

        const response = await api.get(`/repos/${repoInput}`)

        const {name , description, html_url, owner: {avatar_url}} = response.data;
        
        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        })

        this.inputEl.value = "";

        this.render();
       
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repor => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repor.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repor.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild((document.createTextNode(repor.description)));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repor.html_url)
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild((document.createTextNode('acessar')));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();