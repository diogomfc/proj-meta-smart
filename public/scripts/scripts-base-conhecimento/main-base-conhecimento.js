import Modal  from "./modal-add-links.js"
const modal = Modal()

const checkButtons = document.querySelector('.btn-adicionar')
const modalTitle = document.querySelector('.teste h2')

//console.log(modal.open())
//console.log(modalTitle)

checkButtons.forEach(button => {
  button.addEventListener('click',handleClick )
})

function handleClick(){
  modal.open()
}


