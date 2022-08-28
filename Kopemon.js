const Seleccionar_Personaje = document.getElementById("Seleccionar_Personaje");
const Mapa_Interactivo = document.getElementById("Mapa_Interactivo");
const Seleccionar_Ataques = document.getElementById("Seleccionar_Ataques");

window.addEventListener("load", Iniciar_Juego);

let Kopemones = [];
let Tarjetas = [];

function Iniciar_Juego() {
  Mapa_Interactivo.style.display = "none";
  Seleccionar_Ataques.style.display = "none";

  class Kopemon {
    constructor(Serie, Nombre, Foto, Vida, Ataque, Tipo, Nivel, Defensa) {
      this.Serie = Serie;
      this.Nombre = Nombre;
      this.Foto = Foto;
      this.Vida = Vida;
      this.Ataque = Ataque;
      this.Tipo = Tipo;
      this.Movimientos = [];
      this.Nivel = Nivel;
      this.Defensa = Defensa;
    }
  }

  class Ataques {
    constructor(Nombre, Tipo, Potencia, Precision) {
      this.Nombre = Nombre;
      this.Tipo = Tipo;
      this.Potencia = Potencia;
      this.Precision = Precision;
    }
  }

  let Llamarada = new Ataques("Llamarada", "Fuego", 100, 50);
  let Flameado = new Ataques("Flameado", "Fuego", 50, 75);
  let Raices = new Ataques("Raices", "Tierra", 100, 75);
  let Tornado = new Ataques("Tornado", "Agua", 40, 100);
  let Gaia = new Ataques("Gaia", "Tierra", 150, 40);
  let Marea = new Ataques("Marea", "Agua", 120, 50);

  let Suendatoro = new Kopemon(01,"Suendatoro","./Assets/Suendatoro.png", 30, 470, "Tierra", 5, 50 );
  let Flamoravio = new Kopemon(02,"Flamoravio","./Assets/Flamoravio.png", 300, 200, "Fuego", 5, 75 );
  let Locafolio = new Kopemon(03,"Locafolio","./Assets/Locafolio.png", 250, 250, "Tierra", 5, 25 );
  let Sandrogeno = new Kopemon(04,"Sandrogeno","./Assets/Sandrogeno.png", 50, 450, "Agua", 5, 60 );
  let Sapotigre = new Kopemon(05,"Sapotigre","./Assets/Sapotigre.png", 200, 300, "Agua", 5, 20 );
  let Fierevelo = new Kopemon(06,"Fierevelo","./Assets/Fierevelo.png", 480, 20, "Fuego", 5, 100 );

  Suendatoro.Movimientos.push(Llamarada, Raices);
  Flamoravio.Movimientos.push(Llamarada, Flameado);
  Locafolio.Movimientos.push(Raices, Marea);
  Sandrogeno.Movimientos.push(Tornado, Marea);
  Sapotigre.Movimientos.push(Raices, Gaia);
  Fierevelo.Movimientos.push(Llamarada, Gaia);

  Kopemones.push(
    Suendatoro,
    Flamoravio,
    Locafolio,
    Sandrogeno,
    Sapotigre,
    Fierevelo
  );

  for (let i = 0; i < Kopemones.length; i++) {
    let info = `<label class="Tarjetas_Personaje" onclick="Seleccion('${i}')">
                    <p>${Kopemones[i].Nombre}</p>
                    <img src=${Kopemones[i].Foto}>
                    </label> `;

    Seleccionar_Personaje.innerHTML += info;
  }
}

function Seleccion(i) {
  Seleccionar_Personaje.style.display = "none";
  Seleccionar_Ataques.style.display = "grid";

  let info = `<label class="Tarjetas_Ataque">
              <p>${Kopemones[i].Nombre}</p>
              <img src=${Kopemones[i].Foto}>

              <p>Vida: ${Kopemones[i].Vida}</p>
              <p>Nivel: ${Kopemones[i].Nivel}</p>

              <button id="${Kopemones[i].Movimientos[0].Nombre}"> 
              ${Kopemones[i].Movimientos[0].Nombre}</button>
              <button id="${Kopemones[i].Movimientos[1].Nombre}"> 
              ${Kopemones[i].Movimientos[1].Nombre}</button>
              </label> 

              <h3> VS </h3>
              
              <label class="Tarjetas_Ataque">
              <p>${Kopemones[i].Nombre}</p>
              <img src=${Kopemones[i].Foto}>

              <p>Vida: ${Kopemones[i].Vida}</p>
              <p>Nivel: ${Kopemones[i].Nivel}</p>

              </label> `;

  Seleccionar_Ataques.innerHTML += info;
}
