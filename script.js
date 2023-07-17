function toggleMode() {
  /*tag html = dentro do documento.acesso a tag html*/
  const html = document.documentElement

  /*na tag html.na lista de classe. contem a classe light? */
  //if (html.classList.contains("light")) {

  /*Verdadero remove a classe light na tag html*/
  //html.classList.remove("light")
  //}

  /*Falso adiciona a classe light na tag html*/
  //else {
  //html.classList.add("light")
  //}

  /*A função toggle do javascript faz o mesmo trabalho do if else acima  */
  html.classList.toggle("light")

  //Mudar a imagem

  //Pegar a tag img com seletor do css
  //const img = document.querySelector("#profile img")

  //Teste se a tag html tem a classe light
  //if(html.classList.contains("light")) {

  //Seta o atributo scr de img com a noma imagem
  //img.setAttribute("scr", "./assets/avatar-light.png")
  //} else {

  //Seta o atributo scr de img com a noma imagem
  //img.setAttribute("scr", "./assets/avatar.png")
  //}
}