function marcado(elemento) {
  // Elimina la clase 'modelo-seleccionado' de todos los elementos
  var elementos = document.querySelectorAll(".nav-header-text");
  elementos.forEach(function (el) {
    el.classList.remove("modelo-seleccionado");
  });

  // Agrega la clase 'modelo-seleccionado' al elemento clicado
  elemento.classList.add("modelo-seleccionado");
}

document.addEventListener("DOMContentLoaded", function () {
  var modelos = document.getElementById("modelos");
  var submenu = document.getElementById("submenu-modelos");
  var header = document.getElementById("header");
  var beyond = document.getElementById("beyond");
  var logo = document.getElementById("logo");

  modelos.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !beyond.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  beyond.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  logo.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});


document.addEventListener("DOMContentLoaded", handleSupersportHover);
function handleSupersportHover() {
  var supersportElement = document.getElementById("supersport");
  var submenuSupersport = document.querySelector(".submenu-supersport");

  supersportElement.addEventListener("mouseover", function () {
    submenuSupersport.style.opacity = "1";
    submenuSupersport.style.visibility = "visible";
  });

  supersportElement.addEventListener("mouseout", function () {
    submenuSupersport.style.opacity = "0";
    submenuSupersport.style.visibility = "hidden";
  });

  submenuSupersport.addEventListener("mouseover", function () {
    submenuSupersport.style.opacity = "1";
    submenuSupersport.style.visibility = "visible";
  });

  submenuSupersport.addEventListener("mouseout", function () {
    submenuSupersport.style.opacity = "0";
    submenuSupersport.style.visibility = "hidden";
  });
}


document.addEventListener("DOMContentLoaded", handleStreetHover);
function handleStreetHover() {
  var streetElement = document.getElementById("street");
  var submenuStreet = document.querySelector(".submenu-street");

  streetElement.addEventListener("mouseover", function () {
    submenuStreet.style.opacity = "1";
    submenuStreet.style.visibility = "visible";
  });

  streetElement.addEventListener("mouseout", function () {
    submenuStreet.style.opacity = "0";
    submenuStreet.style.visibility = "hidden";
  });

  submenuStreet.addEventListener("mouseover", function () {
    submenuStreet.style.opacity = "1";
    submenuStreet.style.visibility = "visible";
  });

  submenuStreet.addEventListener("mouseout", function () {
    submenuStreet.style.opacity = "0";
    submenuStreet.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleTouringHover);
function handleTouringHover() {
  var touringElement = document.getElementById("touring");
  var submenuTouring = document.querySelector(".submenu-touring");

  touringElement.addEventListener("mouseover", function () {
    submenuTouring.style.opacity = "1";
    submenuTouring.style.visibility = "visible";
  });

  touringElement.addEventListener("mouseout", function () {
    submenuTouring.style.opacity = "0";
    submenuTouring.style.visibility = "hidden";
  });

  submenuTouring.addEventListener("mouseover", function () {
    submenuTouring.style.opacity = "1";
    submenuTouring.style.visibility = "visible";
  });

  submenuTouring.addEventListener("mouseout", function () {
    submenuTouring.style.opacity = "0";
    submenuTouring.style.visibility = "hidden";
  });
}


document.addEventListener("DOMContentLoaded", handleAdventureHover);
function handleAdventureHover() {
  var adventureElement = document.getElementById("adventure");
  var submenuAdventure = document.querySelector(".submenu-adventure");

  adventureElement.addEventListener("mouseover", function () {
    submenuAdventure.style.opacity = "1";
    submenuAdventure.style.visibility = "visible";
  });

  adventureElement.addEventListener("mouseout", function () {
    submenuAdventure.style.opacity = "0";
    submenuAdventure.style.visibility = "hidden";
  });

  submenuAdventure.addEventListener("mouseover", function () {
    submenuAdventure.style.opacity = "1";
    submenuAdventure.style.visibility = "visible";
  });

  submenuAdventure.addEventListener("mouseout", function () {
    submenuAdventure.style.opacity = "0";
    submenuAdventure.style.visibility = "hidden";
  });
}


document.addEventListener("DOMContentLoaded", handleCustomHover);
function handleCustomHover() {
  var customElement = document.getElementById("custom");
  var submenuCustom = document.querySelector(".submenu-custom");

  customElement.addEventListener("mouseover", function () {
    submenuCustom.style.opacity = "1";
    submenuCustom.style.visibility = "visible";
  });

  customElement.addEventListener("mouseout", function () {
    submenuCustom.style.opacity = "0";
    submenuCustom.style.visibility = "hidden";
  });

  submenuCustom.addEventListener("mouseover", function () {
    submenuCustom.style.opacity = "1";
    submenuCustom.style.visibility = "visible";
  });

  submenuCustom.addEventListener("mouseout", function () {
    submenuCustom.style.opacity = "0";
    submenuCustom.style.visibility = "hidden";
  });
}

document.addEventListener("DOMContentLoaded", handleScooterHover);
function handleScooterHover() {
  var scooterElement = document.getElementById("scooter");
  var submenuScooter = document.querySelector(".submenu-scooter");

  scooterElement.addEventListener("mouseover", function () {
    submenuScooter.style.opacity = "1";
    submenuScooter.style.visibility = "visible";
  });

  scooterElement.addEventListener("mouseout", function () {
    submenuScooter.style.opacity = "0";
    submenuScooter.style.visibility = "hidden";
  });

  submenuScooter.addEventListener("mouseover", function () {
    submenuScooter.style.opacity = "1";
    submenuScooter.style.visibility = "visible";
  });

  submenuScooter.addEventListener("mouseout", function () {
    submenuScooter.style.opacity = "0";
    submenuScooter.style.visibility = "hidden";
  });
}


document.addEventListener("DOMContentLoaded", function () {
  var clientservice = document.getElementById("clientservice");
  var submenu = document.getElementById("submenu-servicios");
  var header = document.getElementById("header");
  var beyond = document.getElementById("beyond");
  var motorsport = document.getElementById("motorsport");

  clientservice.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !beyond.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  beyond.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  motorsport.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});





document.addEventListener("DOMContentLoaded", function () {
  var clientservice = document.getElementById("clientservice");
  var submenu = document.getElementById("submenu-hrc");
  var header = document.getElementById("header");
  var beyond = document.getElementById("beyond");
  var motorsport = document.getElementById("motorsport");

  motorsport.addEventListener("mouseover", function () {
    submenu.classList.add("show");
  });

  submenu.addEventListener("mouseleave", function (event) {
    if (
      !submenu.contains(event.relatedTarget) &&
      !beyond.contains(event.relatedTarget)
    ) {
      submenu.classList.remove("show");
    }
  });

  beyond.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });

  clientservice.addEventListener("mouseover", function () {
    submenu.classList.remove("show");
  });
});

function toggleBars() {
  const barras = document.querySelector(".barras");
  barras.classList.toggle("active");
}

function toggleBars() {
  const barras = document.querySelector(".barras");
  const submenuGeneral = document.getElementById("submenu-general");

  barras.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var barras = document.querySelector(".barras");
  var submenuGeneral = document.querySelector(".submenu-general");
  var header = document.querySelector("#header");

  barras.addEventListener("click", function () {
    submenuGeneral.classList.toggle("show");
    header.classList.toggle("submenu-active");
  });
});

function changeBackground(model, button) {
  if (button.classList.contains("clicked")) {
    return;
  }

  const configuradorMain = document.querySelector(".configurador-main");
  const hexagonEmpty = document.querySelector(".hexagon-empty");

  document.querySelectorAll(".buttons-configurador button").forEach((btn) => {
    btn.classList.remove("clicked");
  });

  button.classList.add("clicked");

  hexagonEmpty.classList.add("show");

  const h2Letters = document.querySelectorAll(".text-configurador h2 div");
  h2Letters.forEach((letter) => {
    letter.classList.remove("show");
  });

  switch (model) {
    case "CBR1000RR":
      configuradorMain.style.backgroundImage =
        "url(assets/images/configuradorCBR1000RR.jpg)";
      updateH1Content("CBR1000RR");
      break;
    case "Africa Twin":
      configuradorMain.style.backgroundImage =
        "url(assets/images/configuradorafricatwin.jpg)";
      updateH1Content("Africa Twin");
      break;
    case "Gold Wing":
      configuradorMain.style.backgroundImage =
        "url(assets/images/configuradorgoldwing.jpg)";
      updateH1Content("Gold Wing");
      break;
    default:
      break;
  }

  setTimeout(() => {
    h2Letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("show");
      }, index * 100);
    });
  }, 100);
}

function updateH1Content(content) {
  const h1Elements = document.querySelectorAll(".text-configurador h1");
  h1Elements.forEach((h1) => {
    h1.classList.remove("show");
  });

  setTimeout(() => {
    h1Elements.forEach((h1) => {
      h1.textContent = `CREAR TU ${content}`;
      h1.classList.add("show");
    });
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  const hexagonEmpty = document.querySelector(".hexagon-empty");
  setTimeout(() => {
    hexagonEmpty.classList.add("show");
  }, 100);
});


document.getElementById("all-models-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
  // Obtén la posición del elemento con ID "all-models"
  const allModelsElement = document.getElementById("all-models");
  
  // Realiza el desplazamiento suave hacia la posición del elemento
  allModelsElement.scrollIntoView({ behavior: "smooth" });
});


