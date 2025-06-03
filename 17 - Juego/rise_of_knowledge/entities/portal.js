import { config } from "../config.js";
import { Map } from "../entities/map.js";

export class Portal {
  x = 0;
  y = 0;
  mapName = ""; // Almacena el mapa de destino
  sprite = new Image();
  size = config.tileSize;
  cooldown = false; // Para evitar activaciones múltiples

  constructor(x, y, mapName, destX = 0, destY = 0) {
    this.x = x;
    this.y = y;
    this.mapName = mapName; // Mapa de destino
    this.destX = destX; // Coordenada X de destino
    this.destY = destY; // Coordenada Y de destino
    this.sprite.src = "./sprites/resources/portal.png";
  }

  /**
   * Dibuja el portal en el canvas.
   */
  draw() {
    config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
  }

  /**
   * Verifica si el jugador está dentro del área del portal y activa la transición.
   * @param {object} player Referencia al jugador
   */
  cross(player) {
    if (this.isPlayerInPortal(player)) {
      if (!this.cooldown) {
        console.log("🌌 El jugador ha entrado al portal.");
        this.activatePortal();
        this.cooldown = true; // Evita reactivaciones constantes
      }
    } else {
      this.cooldown = false; // Resetea cooldown cuando el jugador sale del portal
    }
  }

  /**
   * Verifica si el jugador está dentro del portal.
   * @param {object} player Referencia al jugador
   * @returns {boolean} true si el jugador está en el portal, false en caso contrario
   */
  isPlayerInPortal(player) {
    const offset = 10; // Ajusta la zona de detección

    return (
      player.x + offset < this.x + this.size - offset &&
      player.x + config.tileSize - offset > this.x + offset &&
      player.y + offset < this.y + this.size - offset &&
      player.y + config.tileSize - offset > this.y + offset
    );
  }

  /**
   * Lógica para activar el portal
   */
  async activatePortal() {
    const tiempoEspera = 3000; // Tiempo en milisegundos (3 segundos)
    let mostrandoMensaje = true;

    // Aseguramos que el mensaje se renderice correctamente
    const mantenerMensaje = () => {
      if (mostrandoMensaje) {
        this.mostrarPantallaTransicion(this.mapName); // Redibuja el mensaje
        setTimeout(() => requestAnimationFrame(mantenerMensaje)); // Aproximadamente 60 FPS
      }
    };

    mantenerMensaje(); // Inicia el bucle de renderizado

    // Espera el tiempo especificado antes de cargar el nuevo mapa
    await new Promise((resolve) =>
      setTimeout(() => {
        mostrandoMensaje = false; // Detén el bucle de renderizado después del tiempo de espera
        resolve();
      }, tiempoEspera)
    );

    // Carga el nuevo mapa
    try {
      const module = await import(`../maps/${this.mapName}.js`);
      const levelData = module[this.mapName];
      config.map = new Map(this.mapName, levelData.grassSpritePath);
      config.map.floor = levelData.floor; 
      config.map.rocks = levelData.rocks;
      config.map.trees = levelData.trees;
      config.map.bushes = levelData.bushes;
      config.map.houses = levelData.houses;
      config.map.teachers = levelData.teachers;
      config.map.wildGrass = levelData.wildGrass;
      config.map.portal = levelData.portal;
      config.map.waters = levelData.waters || [];

      // Mueve al jugador a las coordenadas de destino
      config.player.x = this.destX;
      config.player.y = this.destY;

      console.log(`🗺️ Mapa cambiado a ${this.mapName}`);
      this.animarEntradaMapa(); // Animación de zoom in al nuevo mapa
    } catch (error) {
      console.error(`❌ Error al cargar el mapa ${this.mapName}:`, error);
    }
  }

  mostrarPantallaTransicion(nombreMapa) {
    let overlay = document.getElementById("transition-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "transition-overlay";
      document.getElementById('game-wrapper').appendChild(overlay);
  
      Object.assign(overlay.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999",
      });
    } else {
      overlay.innerHTML = ""; // Limpia si ya existía
    }
  
    // Contenedor del contenido (texto + gif)
    const contenedor = document.createElement("div");
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";
  
    // Texto
    const texto = document.createElement("div");
    texto.textContent = `Viajando a ${nombreMapa}...`;
    Object.assign(texto.style, {
      color: "white",
      fontSize: "32px",
      fontFamily: "Arial, sans-serif",
      marginBottom: "20px",
      textAlign: "center",
    });
  
    // GIF animado
    const gif = document.createElement("img");
    gif.src = "./sprites/resources/cruzandoPortal.gif";
    gif.alt = "Cruzando el portal";
    gif.style.maxWidth = "500px";
    gif.style.height = "auto";
  
    // Agregar elementos al contenedor y luego al overlay
    contenedor.appendChild(texto);
    contenedor.appendChild(gif);
    overlay.appendChild(contenedor);
  
    // Eliminar overlay después de 3 segundos
    setTimeout(() => {
      if (overlay.parentNode) overlay.remove();
    }, 3000);
  }
  
  

  animarEntradaMapa() {
    const ctx = config.ctx;
    const canvas = ctx.canvas;
    let alpha = 1;

    const fadeIn = () => {
      ctx.save();
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      alpha -= 0.005;
      if (alpha > 0) {
        requestAnimationFrame(fadeIn);
      }
    };

    requestAnimationFrame(fadeIn);
  }
}
