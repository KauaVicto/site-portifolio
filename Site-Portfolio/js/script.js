let menuProjetos = document.getElementById('menu-projetos')

let mainHome = document.getElementById('home')
let mainProjetos = document.getElementById('projetos')


let tag1 = document.getElementById('tag-home')
let tag2 = document.getElementById('tag-curiosidades')
let tag3 = document.getElementById('tag-games')
let tag4 = document.getElementById('tag-projetos')

function Page4(){
    mainHome.style.display = 'none'
    mainProjetos.style.display = 'block'
    document.body.style.height = '2050px'
}

function Page1(){
    mainHome.style.display = 'block'
    mainProjetos.style.display = 'none'
    document.body.style.height = '1350px'
    
}


//mostrar e tirar tag do home
function Mostrar1(){
    tag1.style.opacity = '1'
    tag1.style.top = '0px'
}
function Tirar1(){
    tag1.style.opacity = '0'
    tag1.style.top = '-20px'
}
//mostrar e tirar tag de curiosidades
function Mostrar2(){
    tag2.style.opacity = '1'
    tag2.style.top = '0px'
}
function Tirar2(){
    tag2.style.opacity = '0'
    tag2.style.top = '-20px'
}
//mostrar e tirar tag de games
function Mostrar3(){
    tag3.style.opacity = '1'
    tag3.style.top = '0px'
}
function Tirar3(){
    tag3.style.opacity = '0'
    tag3.style.top = '-20px'
}
//mostrar e tirar tag de projetos
function Mostrar4(){
    tag4.style.opacity = '1'
    tag4.style.top = '0px'
}
function Tirar4(){
    tag4.style.opacity = '0'
    tag4.style.top = '-20px'
}

