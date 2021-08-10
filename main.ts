let MINUTOS = 0
let SEGUNDOS = 0
basic.forever(function () {
    basic.pause(100)
    SEGUNDOS += 1
    if (SEGUNDOS == 59) {
        SEGUNDOS = 0
        MINUTOS += 1
    }
})
