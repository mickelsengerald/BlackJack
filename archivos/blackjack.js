const carta0 = new Image()
carta0.src = "./Pica/asP.png"
const carta1 = new Image()
carta1.src = "./Pica/2P.png"
const carta2 = new Image()
carta2.src = "./Pica/3P.png"
const carta3 = new Image()
carta3.src = "./Pica/4P.png"
const carta4 = new Image()
carta4.src = "./Pica/5P.png"
const carta5 = new Image()
carta5.src = "./Pica/6P.png"
const carta6 = new Image()
carta6.src = "./Pica/7P.png"
const carta7 = new Image()
carta7.src = "./Pica/8P.png"
const carta8 = new Image()
carta8.src = "./Pica/9P.png"
const carta9 = new Image()
carta9.src = "./Pica/10P.png"
const carta10 = new Image()
carta10.src = "./Pica/jotaP.png"
const carta11 = new Image()
carta11.src = "./Pica/reinaP.png"
const carta12 = new Image()
carta12.src = "./Pica/reyP.png"
const carta13 = new Image()
carta13.src = "./Corazon/asC.png"
const carta14 = new Image()
carta14.src = "./Corazon/2C.png"
const carta15 = new Image()
carta15.src = "./Corazon/3C.png"
const carta16 = new Image()
carta16.src = "./Corazon/4C.png"
const carta17 = new Image()
carta17.src = "./Corazon/5C.png"
const carta18 = new Image()
carta18.src = "./Corazon/6C.png"
const carta19 = new Image()
carta19.src = "./Corazon/7C.png"
const carta20 = new Image()
carta20.src = "./Corazon/8C.png"
const carta21 = new Image()
carta21.src = "./Corazon/9C.png"
const carta22 = new Image()
carta22.src = "./Corazon/10C.png"
const carta23 = new Image()
carta23.src = "./Corazon/jotaC.png"
const carta24 = new Image()
carta24.src = "./Corazon/reinaC.png"
const carta25 = new Image()
carta25.src = "./Corazon/reyC.png"
const carta26 = new Image()
carta26.src = "./Trebol/asT.png"
const carta27 = new Image()
carta27.src = "./Trebol/2T.png"
const carta28 = new Image()
carta28.src = "./Trebol/3T.png"
const carta29 = new Image()
carta29.src = "./Trebol/4T.png"
const carta30 = new Image()
carta30.src = "./Trebol/5T.png"
const carta31 = new Image()
carta31.src = "./Trebol/6T.png"
const carta32 = new Image()
carta32.src = "./Trebol/7T.png"
const carta33 = new Image()
carta33.src = "./Trebol/8T.png"
const carta34 = new Image()
carta34.src = "./Trebol/9T.png"
const carta35 = new Image()
carta35.src = "./Trebol/10T.png"
const carta36 = new Image()
carta36.src = "./Trebol/jotaT.png"
const carta37 = new Image()
carta37.src = "./Trebol/reinaT.png"
const carta38 = new Image()
carta38.src = "./Trebol/reyT.png"
const carta39 = new Image()
carta39.src = "./Diamante/asD.png"
const carta40 = new Image()
carta40.src = "./Diamante/2D.png"
const carta41 = new Image()
carta41.src = "./Diamante/3D.png"
const carta42 = new Image()
carta42.src = "./Diamante/4D.png"
const carta43 = new Image()
carta43.src = "./Diamante/5D.png"
const carta44 = new Image()
carta44.src = "./Diamante/6D.png"
const carta45 = new Image()
carta45.src = "./Diamante/7D.png"
const carta46 = new Image()
carta46.src = "./Diamante/8D.png"
const carta47 = new Image()
carta47.src = "./Diamante/9D.png"
const carta48 = new Image()
carta48.src = "./Diamante/10D.png"
const carta49 = new Image()
carta49.src = "./Diamante/jotaD.png"
const carta50 = new Image()
carta50.src = "./Diamante/reinaD.png"
const carta51 = new Image()
carta51.src = "./Diamante/reyD.png"

const mazo = [
    {nombre: "As de Pica", foto: carta0 , valor: 1},
    {nombre: "2 de Pica", foto: carta1 , valor: 2},
    {nombre: "3 de Pica", foto: carta2 , valor: 3},
    {nombre: "4 de Pica", foto: carta3 , valor: 4},
    {nombre: "5 de Pica", foto: carta4 , valor: 5},
    {nombre: "6 de Pica", foto: carta5 , valor: 6},
    {nombre: "7 de Pica", foto: carta6 , valor: 7},
    {nombre: "8 de Pica", foto: carta7 , valor: 8},
    {nombre: "9 de Pica", foto: carta8 , valor: 9},
    {nombre: "10 de Pica", foto: carta9 , valor: 10},
    {nombre: "Jota de Pica", foto: carta10 , valor: 10},
    {nombre: "Reina de Pica", foto: carta11 , valor: 10},
    {nombre: "Rey de Pica", foto: carta12 , valor: 10},
    {nombre: "As de Corazon", foto: carta13 , valor: 1},
    {nombre: "2 de Corazon", foto: carta14 , valor: 2},
    {nombre: "3 de Corazon", foto: carta15 , valor: 3},
    {nombre: "4 de Corazon", foto: carta16 , valor: 4},
    {nombre: "5 de Corazon", foto: carta17 , valor: 5},
    {nombre: "6 de Corazon", foto: carta18 , valor: 6},
    {nombre: "7 de Corazon", foto: carta19 , valor: 7},
    {nombre: "8 de Corazon", foto: carta20 , valor: 8},
    {nombre: "9 de Corazon", foto: carta21 , valor: 9},
    {nombre: "10 de Corazon", foto: carta22 , valor: 10},
    {nombre: "Jota de Corazon", foto: carta23 , valor: 10},
    {nombre: "Reina de Corazon", foto: carta24 , valor: 10},
    {nombre: "Rey de Corazon", foto: carta25 , valor: 10},
    {nombre: "As de Trebol", foto: carta26 , valor: 1},
    {nombre: "2 de Trebol", foto: carta27 , valor: 2},
    {nombre: "3 de Trebol", foto: carta28 , valor: 3},
    {nombre: "4 de Trebol", foto: carta29 , valor: 4},
    {nombre: "5 de Trebol", foto: carta30 , valor: 5},
    {nombre: "6 de Trebol", foto: carta31 , valor: 6},
    {nombre: "7 de Trebol", foto: carta32 , valor: 7},
    {nombre: "8 de Trebol", foto: carta33 , valor: 8},
    {nombre: "9 de Trebol", foto: carta34 , valor: 9},
    {nombre: "10 de Trebol", foto: carta35 , valor: 10},
    {nombre: "Jota de Trebol", foto: carta36 , valor: 10},
    {nombre: "Reina de Trebol", foto: carta37 , valor: 10},
    {nombre: "Rey de Trebol", foto: carta38 , valor: 10},
    {nombre: "As de Diamante", foto: carta39 , valor: 1},
    {nombre: "2 de Diamante", foto: carta40 , valor: 2},
    {nombre: "3 de Diamante", foto: carta41 , valor: 3},
    {nombre: "4 de Diamante", foto: carta42 , valor: 4},
    {nombre: "5 de Diamante", foto: carta43 , valor: 5},
    {nombre: "6 de Diamante", foto: carta44 , valor: 6},
    {nombre: "7 de Diamante", foto: carta45 , valor: 7},
    {nombre: "8 de Diamante", foto: carta46 , valor: 8},
    {nombre: "9 de Diamante", foto: carta47 , valor: 9},
    {nombre: "10 de Diamante", foto: carta48 , valor: 10},
    {nombre: "Jota de Diamante", foto: carta49 , valor: 10},
    {nombre: "Reina de Diamante", foto: carta50 , valor: 10},
    {nombre: "Rey de Diamante", foto: carta51 , valor: 10}
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const mesa = new Image();
mesa.onload = function() {
  ctx.drawImage(mesa, 0, 0, canvas.width, canvas.height);
}
mesa.src = "./Imagenes/blackjack table.png";

const bocaAbajo = new Image();
bocaAbajo.src = "./Imagenes/boca abajo.png"

const derrota = new Image()
derrota.src = "./Imagenes/derrota.png"
const victoria = new Image()
victoria.src = "./Imagenes/victoria.png"
const empate = new Image()
empate.src = "./Imagenes/empate.png"

let cartasUsuario = []
let cartasNPC = []
let cartasEnMesa = []
let botonPide = document.getElementById("pide")
botonPide.disabled = true
let botonQueda = document.getElementById("queda")
botonQueda.disabled = true
let botonReinicia = document.getElementById("reinicia")
botonReinicia.disabled = true

function repartir(){
    let cartaUsuario1 = 0 
    let cartaUsuario2 = 0
    let cartaNPC1 = 0
    let cartaNPC2 = 0

    while (cartaUsuario1 == cartaUsuario2 || cartaUsuario1 == cartaNPC1 || cartaUsuario1 == cartaNPC2 || cartaUsuario2 == cartaNPC1 || cartaUsuario2 == cartaNPC2 || cartaNPC1 == cartaNPC2) {
        cartaUsuario1 = aleatorio(0,51)
        cartaUsuario2 = aleatorio(0,51)
        cartaNPC1 = aleatorio(0,51)
        cartaNPC2 = aleatorio(0,51)
    }

    cartasUsuario.push(mazo[cartaUsuario1], mazo[cartaUsuario2])
    cartasNPC.push(mazo[cartaNPC1], mazo[cartaNPC2])
    cartasEnMesa.push(mazo[cartaUsuario1], mazo[cartaUsuario2], mazo[cartaNPC1], mazo[cartaNPC2])
    
    colocarCartasUsuario()
    colocarCartasNPC()
    
    let boton = document.getElementById("repartir")
    boton.disabled = true
    botonQueda.disabled = false
    botonPide.disabled = false

    let sumaUsuarioAs1 = sumaUsuarioCon1()
    let sumaUsuarioAs11 = sumaUsuarioCon11()
    if(sumaUsuarioAs1>sumaUsuarioAs11 && sumaUsuarioAs1<=21){
        imprimirUsuario(sumaUsuarioAs1)
    } else if(sumaUsuarioAs11>sumaUsuarioAs1 && sumaUsuarioAs11<=21){
        imprimirUsuario(sumaUsuarioAs11)
    } else if (sumaUsuarioAs1<=sumaUsuarioAs11){
        imprimirUsuario(sumaUsuarioAs1)
    } else{
        imprimirUsuario(sumaUsuarioAs11)
    }
}

function imprimirUsuario(p){
    let imprime = document.getElementById("valorUsuario")
    imprime.innerHTML = `<b>${p}</b>`;
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function colocarCartasUsuario(){
    let posX = 1;
    let posY = 100;
    let cardWidth = 60;
    let cardHeight = 75;

    for (let i = 0; i < cartasUsuario.length; i++) {
        let carta = cartasUsuario[i]
        let imagen = carta.foto   
        ctx.drawImage(imagen, posX, posY, cardWidth, cardHeight);
        posX += cardWidth -26;
    }
}

function colocarCartasNPC(){
    let cardWidth = 60;
    let cardHeight = 75;
    let posX = 1;
    let posY = 1;
    ctx.drawImage(bocaAbajo, posX, posY, cardWidth, cardHeight);
    let carta = cartasNPC[1]
    let imagen = carta.foto
    posX = cardWidth -26;
    ctx.drawImage(imagen, posX, posY, cardWidth, cardHeight);
        
}

function sumaUsuarioCon1(){
    let sumaUsuarioAs1=0
    for (let i = 0; i < cartasUsuario.length ; i++) {
        sumaUsuarioAs1+=cartasUsuario[i].valor; 
    }
    
    return sumaUsuarioAs1
}

function sumaUsuarioCon11(){
    let sumaUsuarioAs11=0
    for (let i = 0; i < cartasUsuario.length ; i++) {
        if(cartasUsuario[i].valor==1){
            sumaUsuarioAs11+=cartasUsuario[i].valor + 10; 
        }
        else{
            sumaUsuarioAs11+=cartasUsuario[i].valor
        }
    }
    
    return sumaUsuarioAs11
}

function pedir(){
    let sumaUsuarioAs1 = sumaUsuarioCon1()
    let sumaUsuarioAs11 = sumaUsuarioCon11()
    if(sumaUsuarioAs1>sumaUsuarioAs11 && sumaUsuarioAs1<=21){
        imprimirUsuario(sumaUsuarioAs1)
    } else if(sumaUsuarioAs11>sumaUsuarioAs1 && sumaUsuarioAs11<=21){
        imprimirUsuario(sumaUsuarioAs11)
    } else if (sumaUsuarioAs1<=sumaUsuarioAs11){
        imprimirUsuario(sumaUsuarioAs1)
    } else{
        imprimirUsuario(sumaUsuarioAs11)
    }
    
    if(sumaUsuarioAs1==21 || sumaUsuarioAs11==21){
        botonPide.disabled = true
        quedarse()
    } else if(sumaUsuarioAs1>21 && sumaUsuarioAs11>21){
        botonPide.disabled = true
        quedarse()
    } else {
        otraCartaUsuario();
        sumaUsuarioAs1 = sumaUsuarioCon1()
        sumaUsuarioAs11 = sumaUsuarioCon11()
        if(sumaUsuarioAs1>sumaUsuarioAs11 && sumaUsuarioAs1<=21){
            imprimirUsuario(sumaUsuarioAs1)
        } else if(sumaUsuarioAs11>sumaUsuarioAs1 && sumaUsuarioAs11<=21){
            imprimirUsuario(sumaUsuarioAs11)
        } else if (sumaUsuarioAs1<=sumaUsuarioAs11){
            imprimirUsuario(sumaUsuarioAs1)
        } else{
            imprimirUsuario(sumaUsuarioAs11)
        }
    }
}

function otraCartaUsuario(){
    let i = aleatorio(0, 51)
    let unaMas=mazo[i]
    for(let j=0; j<cartasEnMesa.length; j++){
        if(cartasEnMesa[j].nombre == unaMas.nombre){
            i = aleatorio(0, 51)
            unaMas=mazo[i]   
            j=0
        }
    }
    cartasUsuario.push(unaMas)
    colocarCartasUsuario()
    let sumaUsuarioAs1 = sumaUsuarioCon1()
    let sumaUsuarioAs11 = sumaUsuarioCon11()
if(sumaUsuarioAs1==21 || sumaUsuarioAs11==21){
        botonPide.disabled = true
        quedarse()
    } else if(sumaUsuarioAs1>21 && sumaUsuarioAs11>21){
        botonPide.disabled = true
        quedarse()
    }
}

function quedarse(){
    botonPide.disabled=true;
    while (botonQueda.disabled == false) {
        let sumaNPCAs1 = sumaNPCCon1()
        let sumaNPCAs11 = sumaNPCCon11()
        let sumaUsuarioAs1 = sumaUsuarioCon1()
        let sumaUsuarioAs11 = sumaUsuarioCon11()

        if(sumaUsuarioAs1>21 && sumaUsuarioAs11>21){
            colocarCartasNPCDestapadas()
            ctx.drawImage(derrota, 127, 72, 55, 35);
            botonQueda.disabled =true;
            if (sumaNPCAs1>=sumaNPCAs11 && sumaNPCAs1<=21){
                imprimirNPC(sumaNPCAs1)
            } else {
                imprimirNPC(sumaNPCAs11)
            }
        }
        else if((sumaNPCAs1>sumaUsuarioAs1 && sumaNPCAs1>sumaUsuarioAs11 && sumaNPCAs1<=21) || (sumaNPCAs11>sumaUsuarioAs1 && sumaNPCAs11>sumaUsuarioAs11 && sumaNPCAs11<=21)){
            colocarCartasNPCDestapadas()
            ctx.drawImage(derrota, 127, 72, 55, 35);
            botonQueda.disabled =true;
            if (sumaNPCAs1>=sumaNPCAs11 && sumaNPCAs1<=21){
                imprimirNPC(sumaNPCAs1)
            } else {
                imprimirNPC(sumaNPCAs11)
            }
        }
        else if((sumaNPCAs1 == 21 || sumaNPCAs11 == 21) && (sumaUsuarioAs1== 21 || sumaUsuarioAs11==21)){
            colocarCartasNPCDestapadas()
            ctx.drawImage(empate, 127, 72, 55, 35);
            botonQueda.disabled =true;
            if (sumaNPCAs1>=sumaNPCAs11 && sumaNPCAs1<=21){
                imprimirNPC(sumaNPCAs1)
            } else {
                imprimirNPC(sumaNPCAs11)
            }
            
        } else if((sumaNPCAs1>21 && sumaNPCAs11>21) && (sumaUsuarioAs1<=21 || sumaUsuarioAs11<=21)){
            colocarCartasNPCDestapadas()
            ctx.drawImage(victoria, 127, 72, 55, 35);
            botonQueda.disabled =true;
            if (sumaNPCAs1>=sumaNPCAs11 && sumaNPCAs1<=21){
                imprimirNPC(sumaNPCAs1)
            } else {
                imprimirNPC(sumaNPCAs11)
            }
            
        } else {
            otraCartaNPC()
        }
    }
    botonReinicia.disabled = false

}

function imprimirNPC(p){
    let imprime = document.getElementById("valorNPC")
    imprime.innerHTML = `<b>${p}</b>`;
}


function colocarCartasNPCDestapadas(){
    let posX = 1;
    let posY = 1;
    let cardWidth = 60;
    let cardHeight = 75;

    for (let i = 0; i < cartasNPC.length; i++) {
        let carta = cartasNPC[i]
        let imagen = carta.foto   
        ctx.drawImage(imagen, posX, posY, cardWidth, cardHeight);
        posX += cardWidth -26;
    }
}

function otraCartaNPC(){
    let i = aleatorio(0, 51)
    let unaMas=mazo[i]
    for(let j=0; j<cartasEnMesa.length; j++){
        if(cartasEnMesa[j].nombre == unaMas.nombre){
            i = aleatorio(0, 51)
            unaMas=mazo[i]   
            j=0
        }
    }
    cartasNPC.push(unaMas)
    colocarCartasNPCDestapadas()
}

function sumaNPCCon1(){
    let sumaNPCAs1=0
    for (let i = 0; i < cartasNPC.length ; i++) {
        sumaNPCAs1+=cartasNPC[i].valor; 
    }
    return sumaNPCAs1
}

function sumaNPCCon11(){
    let sumaNPCAs11=0
    for (let i = 0; i < cartasNPC.length ; i++) {
        if(cartasNPC[i].valor==1){
            sumaNPCAs11+=cartasNPC[i].valor + 10; 
        }
        else{
            sumaNPCAs11+=cartasNPC[i].valor
        }
    }
    return sumaNPCAs11
}

function reiniciar(){
    location.reload()
}