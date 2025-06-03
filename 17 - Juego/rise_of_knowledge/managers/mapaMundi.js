import { config } from "../config.js";

export function initializeMapScreen() {
    document.getElementById("ui-container").style.display = "none";
    document.getElementById("gameCanvas").style.display = "none";

    const mapaMundiContainer = document.getElementById("mapaMundi-container");
    mapaMundiContainer.style.display = "flex";

    const currentMap = config.map.mapName;

    generateMapGrid(currentMap);
    
    setTimeout(drawConnections, 100);
}

// Red de mapas conectados por portales, con dirección cardinal
const mapNetwork = {
    Tutorial: { E: "Grassland" },
    Grassland: { W: "Tutorial", E: "Forest", S: "Rockyfield" },
    Forest: { W: "Grassland", E: "Land" },
    Land: { W: "Forest", S: "Town" },
    Rockyfield: { N: "Grassland", E: "Snowforest" },
    Town: { N: "Land" },
    Snowforest: { W: "Rockyfield", E: "Town", S: "Icevalley" },
    Icevalley: { N: "Snowforest", E: "Snowbay", W: "Snowtown" },
    Snowbay: { N: "Town", W: "Icevalley"},
    Snowtown: { E: "Icevalley", W: "Snowland"},
    Snowland: { E: "Snowtown"},
};

let mapPositions = {}; // Coordenadas relativas de cada mapa

function generateMapGrid(currentMap = "") {
    const container = document.getElementById("mapaMundi-maps");
    container.innerHTML = "";
    mapPositions = {};

    assignPositions("Tutorial", 0, 0, new Set());

    // Normalizar posiciones para que todas sean positivas
    const xVals = Object.values(mapPositions).map(p => p.x);
    const yVals = Object.values(mapPositions).map(p => p.y);
    const minX = Math.min(...xVals);
    const minY = Math.min(...yVals);

    Object.keys(mapPositions).forEach(name => {
        mapPositions[name].x -= minX;
        mapPositions[name].y -= minY;
    });

    // Crear nodos de mapa
    Object.entries(mapPositions).forEach(([name, pos]) => {
        const div = document.createElement("div");
        div.className = "mapaMundi-map";
        div.setAttribute("data-name", name);
        div.style.gridColumn = pos.x + 1;
        div.style.gridRow = pos.y + 1;
        
        const img = document.createElement("img");
        img.src = `./sprites/maps/${name.toLowerCase()}.jpg`; 
        img.alt = name;
        img.className = "mapaMundi-image";

        if (name.toLowerCase() === currentMap.toLowerCase()) {
            div.classList.add("mapaMundi-map--current");
        }

        div.appendChild(img); // ✅ Agrega la imagen dentro del div
        container.appendChild(div); // ✅ Agrega el div con imagen al contenedor principal
    });
}

function assignPositions(name, x, y, visited) {
    if (visited.has(name)) return;
    visited.add(name);
    mapPositions[name] = { x, y };
    const neighbors = mapNetwork[name] || {};
    for (const dir in neighbors) {
        const neighbor = neighbors[dir];
        if (!visited.has(neighbor)) {
            const [dx, dy] = directionOffset(dir);
            assignPositions(neighbor, x + dx, y + dy, visited);
        }
    }
}

function directionOffset(dir) {
    switch (dir) {
        case "N": return [0, -1];
        case "S": return [0, 1];
        case "E": return [1, 0];
        case "W": return [-1, 0];
        default: return [0, 0];
    }
}

function drawConnections() {
    const lineContainer = document.getElementById("mapaMundi-lines");
    lineContainer.innerHTML = "";

    Object.entries(mapNetwork).forEach(([from, directions]) => {
        const fromElem = document.querySelector(`.mapaMundi-map[data-name="${from}"]`);
        if (!fromElem) return;

        Object.entries(directions).forEach(([dir, to]) => {
            const toElem = document.querySelector(`.mapaMundi-map[data-name="${to}"]`);
            if (!toElem || from > to) return; // evitar duplicados

            const rectFrom = fromElem.getBoundingClientRect();
            const rectTo = toElem.getBoundingClientRect();
            const containerRect = lineContainer.getBoundingClientRect();

            const x1 = rectFrom.left + rectFrom.width / 2 - containerRect.left;
            const y1 = rectFrom.top + rectFrom.height / 2 - containerRect.top;
            const x2 = rectTo.left + rectTo.width / 2 - containerRect.left;
            const y2 = rectTo.top + rectTo.height / 2 - containerRect.top;

            const length = Math.hypot(x2 - x1, y2 - y1);
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

            const line = document.createElement("div");
            line.className = "connection-line";
            line.style.width = `${length}px`;
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.transform = `rotate(${angle}deg)`;

            lineContainer.appendChild(line);
        });
    });
}

document.getElementById("backButton").addEventListener("click", () => {
    document.getElementById("mapaMundi-container").style.display = "none";
    document.getElementById("ui-container").style.display = "flex";
    document.getElementById("gameCanvas").style.display = "block";
    config.uiManager.setResources();
    config.controlsManager.initializeGameControls();
    config.map.draw();
    config.player.draw();
});
