const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const startDate = new Date(Date.UTC(2021, 9, 5, 0, 0, 0));
const botao = document.getElementById("revelarBtn");
const divbotao = document.getElementById("but");
const conteudo = document.getElementById("conteudo");

botao.onclick = function () {
  
  conteudo.style.display = "block";
  
  botao.style.display = "none";
  divbotao.style.display = "none";
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
  const nowUTC = new Date();

  let years = nowUTC.getUTCFullYear() - startDate.getUTCFullYear();
  let months = nowUTC.getUTCMonth() - startDate.getUTCMonth();
  let days = nowUTC.getUTCDate() - startDate.getUTCDate();
  let hours = nowUTC.getUTCHours() - startDate.getUTCHours();
  let minutes = nowUTC.getUTCMinutes() - startDate.getUTCMinutes();
  let seconds = nowUTC.getUTCSeconds() - startDate.getUTCSeconds();

  
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

  
  heart.style.left = Math.random() * 90 + "%";
  heart.style.fontSize = Math.random() * 20 + 20 + "px"; 
  heart.style.animationDuration = Math.random() * 6 + 3 + "s"; 

  document.body.appendChild(heart);

  
  setTimeout(() => {
    heart.remove();
  }, 5000);
}


setInterval(createHeart, 300);
