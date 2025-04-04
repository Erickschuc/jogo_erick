let des = document.getElementById('des').getContext('2d')

let foguete = new Jog(10,275,100,50,'./img/foguete.png')

let bge = new Bg(0,0,800,600,'./img/espaco.jpg', 5)
let bge2 = new Bg(800,0,800,600,'./img/espaco.jpg', 5)
let bge3 = new Bg(1600,0,800,600,'./img/espaco.jpg', 5)

let enemy01 = new Inimigo(900,150,60,60,'./img/meteoro1.png', 5)
let enemy02 = new Inimigo(1200,350,100,100,'./img/planeta1.png', 5)
let enemy03 = new Inimigo(1500,350,100,100,'./img/jupiter1.png', 5)
let enemy04 = new Inimigo(1700,350,150,150,'./img/planetavm1.png', 5)

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

let jogar = true

document.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowUp"){
        foguete.dir = -10
    }else if(e.key === "ArrowDown"){
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

function game_over(){
    if(foguete.vida <=0){
        jogar = false
    
        //motor.pause()
        // música com o jogo parado
    }
}

function pontos(){
    if(foguete.point(enemy01)){
        foguete.pts +=5
    }else if(foguete.point(enemy02)){
        foguete.pts += 5
    }else if(foguete.point(enemy03)){
        foguete.pts += 5
    }else if(foguete.point(enemy04)){
        foguete.pts += 5
    }

    }

function colisao(){
    if(foguete.colid(enemy01)){
        foguete.vida -= 1
        enemy01.recomeca()
    }else if(foguete.colid(enemy02)){
        foguete.vida -= 1
        enemy02.recomeca()
    }else if(foguete.colid(enemy03)){
        foguete.vida -= 1
        enemy03.recomeca()
    }else if(foguete.colid(enemy04)){
        foguete.vida -= 1
        enemy04.recomeca()
    } 
}

function atualizar(){
    if(foguete.pts >= 100) {
        enemy01.speed = 10
        enemy02.speed = 10
        enemy03.speed = 10
        enemy04.speed = 10
        bge.speed = 10
        bge2.speed = 10
        bge3.speed = 10
    }

    bge.mov()
    bge2.mov()
    bge3.mov()
    if(jogar){
        foguete.mov()
        enemy01.mov()
        enemy02.mov()
        enemy03.mov()
        enemy04.mov()
        colisao()
        pontos()
        game_over()

    }

}

function desenha(){
    bge.des_img()
    bge2.des_img()
    bge3.des_img()
    t1.des_text('Pontos:',20,30,'yellow','26px Times')
    t2.des_text(foguete.pts,104,30,'yellow','26px Times')
    t3.des_text('Vida:',660,30,'yellow','26px Times')
    t4.des_text(foguete.vida,720,30,'yellow','26px Times')
    if(jogar){
        foguete.des_img()
        enemy01.des_img()
        enemy02.des_img()
        enemy03.des_img()
        enemy04.des_img()
        
    }else {

        t5.des_text('Game Over',260,340,'yellow','46px Times')
    }  
    }

function main(){
    des.clearRect(0,0,800,600)
    atualizar()
    desenha()
    requestAnimationFrame(main)    
}


main()