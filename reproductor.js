const progreso = document.getElementById("progreso");
 const cancion = document.getElementById("cancion");
 const volumen = document.getElementById('volumen');
 const btnVolumen = document.getElementById('btn-volumen');
 const iconoVolumen = document.getElementById('icono-volumen');
 const controlVolumen = document.getElementById('control-volumen');
 const iconoControl = document.getElementById("iconoControl");
 const botonReproducirPausar = document.querySelector(".boton-reproducir-pausar");
 const botonAdelante = document.querySelector(".controles button.adelante");
 const botonAtras = document.querySelector(".controles button.atras");
 const volume = document.getElementById("volume");
 const tituloCancion = document.querySelector(".reproductor-musica h1");
 const nombreArtista = document.querySelector(".reproductor-musica p");
 
 const canciones = [
     {
         titulo: "Like a Stone",
         nombre: "Audioslave",
         fuente: "music/Audioslave - Like a Stone.mp3",
     },
 
     {
         titulo: "Nothing Else Matters",
         nombre: "Metallica",
         fuente: "music/Nothing Else Matters - Metallica.mp3",
     },
 
    {
        titulo: "Wicked Game",
        nombre: "Chris Isaak",
        fuente: "music/wicked game - chris isaak.mp3",
    },
   { 
        titulo: "Mujer Amante",
        nombre: "Rata Blanca",
        fuente: "music/Rata Blanca - Mujer Amante.mp3",
    },
 
    {
        titulo: "Creep",
        nombre: "Radiohead",
        fuente: "music/Radiohead - Creep.mp3",
    },
 
    {
        titulo: "Oye Mi Amor",
        nombre: "Mana",
        fuente: "music/Oye Mi Amor - Mana.mp3",
    },
 
    {
        titulo: "De Música Ligera",
        nombre: "Soda Stereo",
        fuente: "music/Soda Stereo - De Música Ligera.mp3",
    },
    {
        titulo: "Es Por Ti",
        nombre: "Juanes",
        fuente: "music/Juanes - Es Por Ti.mp3",
    },
    {
        titulo: "A Dios Le Pido",
        nombre: "Juanes",
        fuente: "music/Juanes - A Dios Le Pido.mp3",
    },
    {
        titulo: "La Flaca",
        nombre: "Jarabe De Palo",
        fuente: "music/Jarabe De Palo - La Flaca.mp3",
    },
    {
        titulo: "The Reason",
        nombre: "Hoobastank",
        fuente: "music/Hoobastank - The Reason.mp3",
    },
    {
        titulo: "More Than Words",
        nombre: "Extreme",
        fuente: "music/Extreme - More Than Words.mp3",
    },
 
    {
        titulo: "Lamento Boliviano",
        nombre: "Enanitos Verdes",
        fuente: "music/Lamento Boliviano - Enanitos Verdes.mp3",
    },
    
    {
        titulo: "Enjoy the silence",
        nombre: "Depeche Mode",
        fuente: "music/Depeche Mode - Enjoy the silence.mp3",
    },
    {
        titulo: "Clavado en Un Bar",
        nombre: "Mana",
        fuente: "music/Clavado en Un Bar - Mana.mp3",
    },
    {
        titulo: "Eres",
        nombre: "Café Tacvba",
        fuente: "music/Café Tacvba - Eres.mp3",
    },
 


 ];
 
 let indiceCancionActual = 0;
 
 function actualizarInfoCancion() {
     tituloCancion.textContent = canciones[indiceCancionActual].titulo;
     nombreArtista.textContent = canciones[indiceCancionActual].nombre;
     cancion.src = canciones[indiceCancionActual].fuente;
     cancion.addEventListener("loadeddata", function () { });
 }
 
 cancion.addEventListener("timeupdate", function () {
     if (!cancion.paused) {
         progreso.value = cancion.currentTime;
     }
 });
 
 cancion.addEventListener("loadedmetadata", function () {
     progreso.max = cancion.duration;
     progreso.value = cancion.currentTime;
 });

 cancion.addEventListener("ended", function () {
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

function actualizarIconoVolumen(vol) {
    iconoVolumen.classList.remove(
        'bi-volume-up-fill',
        'bi-volume-down-fill',
        'bi-volume-mute-fill'
    );

    if (vol == 0) {
        iconoVolumen.classList.add('bi-volume-mute-fill');
    } else if (vol < 0.5) {
        iconoVolumen.classList.add('bi-volume-down-fill');
    } else {
        iconoVolumen.classList.add('bi-volume-up-fill');
    }
}

volumen.addEventListener('input', () => {
    const valor = parseFloat(volumen.value);
    cancion.volume = valor;
    actualizarIconoVolumen(valor);
});

btnVolumen.addEventListener('click', (e) => {
    e.stopPropagation();
    volumen.classList.toggle('visible');
});

document.addEventListener('click', (e) => {
    if (!controlVolumen.contains(e.target)) {
        volumen.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    actualizarIconoVolumen(volumen.value);
});
 
 function pausarCancion() {
     cancion.pause();
     iconoControl.classList.remove("bi-pause-fill");
     iconoControl.classList.add("bi-play-fill");
 }
 
 function reproducirCancion() {
     cancion.play();
     iconoControl.classList.add("bi-pause-fill");
     iconoControl.classList.remove("bi-play-fill");
 }
 
 function reproducirPausar() {
     if (cancion.paused) {
         reproducirCancion();
     } else {
         pausarCancion();
     }

}
 
 botonReproducirPausar.addEventListener("click", reproducirPausar);
 
 progreso.addEventListener("input", function () {
     cancion.currentTime = progreso.value;
 });
 
 progreso.addEventListener("change", function () {
     reproducirCancion();
 });
 
 botonAdelante.addEventListener("click", function () {
     indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
     actualizarInfoCancion();
     reproducirPausar();
 });
 
 botonAtras.addEventListener("click", function () {
     indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
     actualizarInfoCancion();
     reproducirPausar();
 });

 actualizarInfoCancion();