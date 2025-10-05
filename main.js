  /*Añadir efecto smooth al scroll */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  /*Codigo para manejar el estado del header */
  const nav = document.getElementById('header')
  const windowHeight =  window.innerHeight

  window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY > windowHeight)
    })

    /* codigo para controlar el scroll al inicio*/
  const redirectHome = document.querySelectorAll('.home')
  redirectHome.forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    })
  })

  /* funcion para cambiar el mapa de iframe*/
    function cambiarIframe(nuevaPagina) {
      const iframe = document.getElementById("miIframe");
      iframe.src = nuevaPagina;
    }
