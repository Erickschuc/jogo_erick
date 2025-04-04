class Obj {
    constructor(x, y, w, h, a, speed) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.speed = speed
    }

    des_img() {
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
}

class Jog extends Obj {
    dir = 0
    pts = 0
    vida = 5

    mov() {
        this.y += this.dir
        if (this.y <= 0) {
            this.y = 0
        } else if (this.y >= 550) {
            this.y = 550
        }
    }
    colid(objeto) {
        if ((this.x < objeto.x + objeto.w) &&
            (this.x + this.w > objeto.x) &&
            (this.y < objeto.y + objeto.h) &&
            (this.y + this.h > objeto.y)) {
            return true
        } else {
            false
        }
    }
    point(objeto) {
        if (objeto.x <= -100) {
            return true
        } else {
            false
        }
    }
}

class Inimigo extends Obj {
    mov() {
        this.x -= this.speed
        if (this.x <= -110) {
            this.x = 910
            this.recomeca()
        }
    }
    recomeca() {
        this.x = 910
        this.y = Math.floor(Math.random() * ((500 - 100 + 1) + 100)) // quando o carro sair da tela
    }
}

class Bg extends Obj {
    mov() {
        this.x -= this.speed
        if (this.x <= -800) {
            this.x = 600
        }
    }
}

class Text {
    des_text(text, x, y, cor, font) {
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text, x, y)
    }
}