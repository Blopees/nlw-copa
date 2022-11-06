function criarJogos(time1,hora,time2) {
  return `
              <li> 
                    <img src="./assets/icon-${time1}.svg" alt=" Bandeira do(a) ${time1}">
                    <strong>${hora}</strong>
                    <img src="./assets/icon-${time2}.svg" alt="Bandeira da ${time2}">
            </li>
  `
}

function criarCard(dataTeste, dia, jogo) {
  return `<div class="card">
                <h2>${dataTeste} <span>${dia}</span></h2>
               <!--<div class="card"></div>--> 
            <ul>

             ${jogo}
            </ul>
            </div>      
  
  `
}

document.querySelector("#cards").innerHTML =
  criarCard("21/11","segunda",
      criarJogos("brazil", "08:00", "camaroes") +
      criarJogos("hungria", "13:00", "argentina") +
      criarJogos("colombia", "20:00", "japao")
  ) +
  criarCard("24/11", "quinta", criarJogos("brazil", "16:00", "serbia")) +
  criarCard("28/11", "segunda", criarJogos("brazil", "13:00", "suica")) +
  criarCard("02/12", "sexta", criarJogos("brazil", "16:00", "camaroes"))



 

