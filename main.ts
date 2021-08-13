let SEGUNDOS = 0
let MINUTOS = 0
let HORA = 0
basic.forever(function () {
    basic.pause(100)
    SEGUNDOS += 1
    if (SEGUNDOS == 59) {
        SEGUNDOS = 0
        MINUTOS += 59
    }
    if (MINUTOS == 59) {
        MINUTOS = 0
        HORA += 1
    }
    if (HORA == 12) {
    	
    }
})
