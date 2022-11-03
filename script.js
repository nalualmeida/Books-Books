var abrirModal = document.querySelector("#abrirModal")
var fade = document.querySelector("#fade")
var modal = document.querySelector("#modal")
var cadastrar = document.querySelector('#cadastrar')
var eventos = [abrirModal,fade]


let toogleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
    el.addEventListener("click", () => toogleModal())
})

cadastrar.addEventListener('click', () => {
    alert('Cadastro realizado com sucesso!')
    toogleModal()
})

//setTimeout(toogleModal, 5000) - faz o modal aparecer 5s depois que a página é aberta