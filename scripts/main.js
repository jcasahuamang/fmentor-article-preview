
const btnDesktop = document.getElementById('buttonDesktop');
const btnMobile = document.getElementById('buttonMobile');
const socialDesktop = document.querySelector('.social-icons-desktop');
const socialMobile = document.querySelector('.social-icons-mobile');

btnDesktop.addEventListener("click", function () {
    socialDesktop.classList.toggle('social-active');
    socialMobile.classList.toggle('social-active');

  /*
    social.classList.add('active');
    social.classList.remove('active')

    if (social.style.display === "flex") {
      social.style.display = "none";
    } else {
      social.style.display = "flex";
    }
    */
  });

  btnMobile.addEventListener("click", function () {
    socialDesktop.classList.toggle('social-active');
    socialMobile.classList.toggle('social-active');

  });