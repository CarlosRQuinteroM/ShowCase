function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var item = ev.target.className.split(' ').splice(1)
    total += dataBase[item]
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var tipo = data.toLowerCase()
    ev.target.appendChild(document.getElementById(data));
    const priceTag = document.getElementById('sumaDePrecios');
    priceTag.innerHTML = '€' + total;
   
}

var total = 0


let dataBase = {
    leche : 2 ,
    pasta: 1,
    queso: 3,
    soda: 0.50,
    sodaLima: 0.50,
    mermelada: 3,
    agua:1,
    chips: 1.5,
    chocolate: 2,
    pan: 1,
    zumoNaranja:1.50,
    snack:2,
    tomato:1.50,
    lechuga:1,
    berenjena:1,
    platano:1.50
}

