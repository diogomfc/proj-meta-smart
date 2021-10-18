function carregar(){

  var url=window.location.href;
  var parametrosDaUrl = url.split("?")[1];

  if (!parametrosDaUrl){
   window.location = "?stop=yes";
   alert("Olá, Diogo Silva")
  }

  console.log("Pagina Recarregou..");
}

carregar();
