let menuProjetos = document.getElementById('menu-projetos')

let mainHome = document.getElementById('home')
let mainProjetos = document.getElementById('projetos')

function PageProjetos(){
    mainHome.style.display = 'none'
    mainProjetos.style.display = 'block'
    document.body.style.height = '1600px'
}

function PageHome(){
    mainHome.style.display = 'block'
    mainProjetos.style.display = 'none'
    document.body.style.height = '1300px'
}