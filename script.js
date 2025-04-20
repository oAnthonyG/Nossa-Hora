const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const startDate = new Date(Date.UTC(2021, 10, 5, 0, 0, 0));
const botao = document.getElementById("but");
const conteudo = document.getElementById("conteudo");

botao.onclick = function() {
  // Revela o conteúdo
  conteudo.style.display = "block";
  // Esconde o botão
  botao.style.display = "none";
}


let idx = 0;

function carousel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carousel, 1800);


function updateTimer() {
  const now = new Date();
  const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Corrige para UTC

  let years = nowUTC.getUTCFullYear() - startDate.getUTCFullYear();
  let months = nowUTC.getUTCMonth() - startDate.getUTCMonth();
  let days = nowUTC.getUTCDate() - startDate.getUTCDate();
  let hours = nowUTC.getUTCHours() - startDate.getUTCHours();
  let minutes = nowUTC.getUTCMinutes() - startDate.getUTCMinutes();
  let seconds = nowUTC.getUTCSeconds() - startDate.getUTCSeconds();

  // Ajustes quando valores são negativos
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(nowUTC.getUTCFullYear(), nowUTC.getUTCMonth(), 0);
    days += prevMonth.getUTCDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById('timer').innerHTML =
    `${years} anos, ${months} meses, ${days} dias, ` +
    `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

updateTimer();
setInterval(updateTimer, 1000);



function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💜";

  // Posição horizontal aleatória
  heart.style.left = Math.random() * 90 + "%";
  heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Tamanhos variados
  heart.style.animationDuration = Math.random() * 6 + 3 + "s"; // Velocidade diferente

  document.body.appendChild(heart);

  // Remover o coração depois da animação
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Criar corações continuamente
setInterval(createHeart, 300);