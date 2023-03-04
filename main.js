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
}
function mainCountBtnPlus(){
    conA.innerHTML = +conA.innerHTML + 1
    conB.innerHTML = +conB.innerHTML + 1
    conC.innerHTML = +conC.innerHTML + 1
    conD.innerHTML = +conD.innerHTML + 1
}

// Counter A
function conABtnMinus(){
    conA.innerHTML = +conA.innerHTML - 1
}
function conABtnPlus(){
    conA.innerHTML = +conA.innerHTML + 1
}

// Counter B
function conBBtnMinus(){
    conB.innerHTML = +conB.innerHTML - 1
}
function conBBtnPlus(){
    conB.innerHTML = +conB.innerHTML + 1
}

// Counter C
function conCBtnMinus(){
    conC.innerHTML = +conC.innerHTML - 1
}
function conCBtnPlus(){
    conC.innerHTML = +conC.innerHTML + 1
}

// Counter D
function conDBtnMinus(){
    conD.innerHTML = +conD.innerHTML - 1
}
function conDBtnPlus(){
    conD.innerHTML = +conD.innerHTML + 1
}