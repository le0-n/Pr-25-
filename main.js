let conA = document.getElementById('conA')
let conB = document.getElementById('conB')
let conC = document.getElementById('conC')
let conD = document.getElementById('conD')

// Main Counter
function mainCountBtnMinus(){
    conA.innerHTML = +conA.innerHTML - 1
    conB.innerHTML = +conB.innerHTML - 1
    conC.innerHTML = +conC.innerHTML - 1
    conD.innerHTML = +conD.innerHTML - 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.body.style.background = bcg
}
function mainCountBtnPlus(){
    conA.innerHTML = +conA.innerHTML + 1
    conB.innerHTML = +conB.innerHTML + 1
    conC.innerHTML = +conC.innerHTML + 1
    conD.innerHTML = +conD.innerHTML + 1
    
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.body.style.background = bcg
}

// Counter A
function conABtnMinus(){
    conA.innerHTML = +conA.innerHTML - 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconA").style.background = bcg
}
function conABtnPlus(){
    conA.innerHTML = +conA.innerHTML + 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconA").style.background = bcg
}

// Counter B
function conBBtnMinus(){
    conB.innerHTML = +conB.innerHTML - 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconB").style.background = bcg
}
function conBBtnPlus(){
    conB.innerHTML = +conB.innerHTML + 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconB").style.background = bcg
}

// Counter C
function conCBtnMinus(){
    conC.innerHTML = +conC.innerHTML - 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconC").style.background = bcg
}
function conCBtnPlus(){
    conC.innerHTML = +conC.innerHTML + 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconC").style.background = bcg
}

// Counter D
function conDBtnMinus(){
    conD.innerHTML = +conD.innerHTML - 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconD").style.background = bcg
}
function conDBtnPlus(){
    conD.innerHTML = +conD.innerHTML + 1

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let bcg = `rgb(${red},${green},${blue})`
    document.getElementById("bcgconD").style.background = bcg
}