function toggleMenu() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menu-toggle');
  nav.classList.toggle('open');
  toggle.classList.toggle('active');
}

function enviarEmail() {
  const email = document.getElementById('email').value;
  const assunto = 'Inscrição na campanha presidencial';
  const corpo = `Olá, o usuário com e-mail ${email} se inscreveu para receber atualizações.`;

  const link = `mailto:igormoncao86@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  window.location.href = link;

  alert("Obrigado por se inscrever! Entraremos em contato em breve.");
  return false; // Evita recarregar a página
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});


let currentSlide = 0;

  function moveSlide(direction) {
    const track = document.getElementById('gallery-track');
    const slides = track.querySelectorAll('img');
    const totalSlides = slides.length;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  // Fade-in se você ainda não tiver esse script
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  });


  document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});





document.addEventListener("DOMContentLoaded", function () {
  const btnDoar2 = document.getElementById("btnDoar2");
  const popup2 = document.getElementById("popupDoacao2");
  const mensagem2 = document.getElementById("mensagemAgradecimento2");
  const audio2 = document.getElementById("somConfirmacao2");

  btnDoar2.addEventListener("click", () => {
    popup2.style.display = "flex";
  });

  window.fecharPopup2 = function () {
    popup2.style.display = "none";
    mensagem2.style.display = "block";
    audio2.play();

    setTimeout(() => {
      mensagem2.style.display = "none";
    }, 5000);
  };

  window.copiarChavePix2 = function () {
    const chave = document.getElementById("chavePix2").innerText;
    navigator.clipboard.writeText(chave).then(() => {
      alert("Chave Pix copiada!");
    });
  };
});
