class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class TodoList extends List{
  
}

const minhalista = new TodoList();

document.getElementById("novotodo").onclick = function(){
    minhalista.add("novo");
}