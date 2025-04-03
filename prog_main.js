let des = document.getElementById('des').getContext('2d')

let foguete = new Jog(10,275,100,50,'./img/foguete.png')

let bge = new Obj(0,0,800,600,'./img/espaco.jpg')

document.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowUp"){
        foguete.dir = -10
    }else if(e.key === "ArrowUp"){
        foguete.dir = +10
    }
})

document.addEventListener('keyup',(e)=>{
    if(e.key === "ArrowUp"){
        foguete.dir = 0
    }else if(e.key === "ArrowDown"){
        foguete.dir = 0
    }
})

function atualizar(){
foguete.mov()

}

function desenha(){
    bge.des_img()
    foguete.des_img()

}

function main(){
    des.clearRect(0,0,800,600)
    atualizar()
    desenha()
    requestAnimationFrame(main)    
}


main()