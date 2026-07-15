let segundos = 10;

const contador = document.getElementById("contador");

const botao = document.getElementById("btnWhatsapp");

const barra = document.getElementById("barraProgresso");

const intevalo = setInterval(() => {
  segundos--;

  barra.style.width = (segundos / 10) * 100 + "%";

  contador.innerHTML = `Você será redirecionado para o WhatsApp em ${segundos} segundos...`;

  if (segundos === 0) {
    clearInterval(intevalo);
    window.location.href = botao.href;
  }
}, 1000);
