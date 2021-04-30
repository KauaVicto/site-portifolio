let menuProjetos = document.getElementById('menu-projetos')

let mainHome = document.getElementById('home')
let mainProjetos = document.getElementById('projetos')


let tagHome = document.getElementById('tag-home')
let tagProjetos = document.getElementById('tag-projetos')

function PageProjetos(){
    mainHome.style.display = 'none'
    mainProjetos.style.display = 'block'
    document.body.style.height = '2050px'
}

function PageHome(){
    mainHome.style.display = 'block'
    mainProjetos.style.display = 'none'
    document.body.style.height = '1350px'
    
}



function MostrarHome(){
    tagHome.style.display = 'block'
}
function TirarHome(){
    tagHome.style.display = 'none'
}

function MostrarProjetos(){
    tagProjetos.style.display = 'block'
}
function TirarProjetos(){
    tagProjetos.style.display = 'none'
}

