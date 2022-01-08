
export default function Modal(){

  const cancelButton = document.querySelector('.btn-group .cancel')
  cancelButton.addEventListener('click', close)


  function open(){
    console.log("Pagina Recarregou..");
    document.querySelector('.modal-wrapper').classList.add('active');
  }
  function close(){
    document.querySelector('.modal-wrapper').classList.remove('active');
  }
  return{
    open,
    close
  }
}

