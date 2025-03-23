let wordPairs = [
    ["pizza", "focaccia"],
    ["mare", "oceano"],
    ["gatto", "puma"],
    ["film", "documentario"],
    ["bicicletta", "monopattino"],
    ["scuola", "università"],
    ["dolce", "torta"],
    ["foresta", "giungla"],
    ["camicia", "maglia"],
    ["castello", "palazzo"],
    ["cane", "lupo"],
    ["automobile", "macchina"],
    ["libro", "manuale"],
    ["camera", "stanza"],
    ["caffè", "espresso"],
    ["albero", "pianta"],
    ["piano", "tastiera"],
    ["computer", "laptop"],
    ["spiaggia", "litorale"],
    ["acqua", "liquido"],
    ["montagna", "colle"],
    ["mare", "lago"],
    ["banco", "scrivania"],
    ["nave", "barca"],
    ["porta", "finestra"],
    ["sole", "luce"],
    ["neve", "ghiaccio"],
    ["luce", "lampada"],
    ["animale", "creatura"],
    ["aereo", "volo"],
    ["città", "metropoli"],
    ["fiore", "rosa"],
    ["viaggio", "avventura"],
    ["auto", "veicolo"],
    ["vignetta", "fumetto"],
    ["guerra", "battaglia"],
    ["cielo", "azzurro"],
    ["pianeta", "terra"],
    ["supermercato", "negozio"],
    ["caffetteria", "bar"],
    ["libro", "romanzi"],
    ["giocattolo", "peluche"],
    ["cavallo", "equino"],
    ["ragazzo", "giovane"],
    ["luna", "satellite"],
    ["amore", "affetto"],
    ["calcio", "sport"],
    ["fiume", "torrente"],
    ["computer", "PC"],
    ["telefono", "smartphone"],
    ["tavola", "scrivania"],
    ["libreria", "biblioteca"],
    ["insegna", "cartello"],
    ["occhiali", "lenti"],
    ["strada", "via"],
    ["abbigliamento", "vestiti"],
    ["tazza", "bicchiere"],
    ["carrozza", "auto"],
    ["moneta", "soldi"],
    ["piramide", "monumento"],
    ["torre", "edificio"],
    ["cavalletto", "supporto"],
    ["maschera", "costume"],
    ["pioggia", "tempesta"],
    ["tempesta", "uragano"],
    ["colore", "tinta"],
    ["sedia", "poltrona"],
    ["giocattolo", "pupazzo"],
    ["foglia", "ramo"],
    ["frutto", "mela"],
    ["musica", "melodia"],
    ["quaderno", "bloc-notes"],
    ["autostrada", "superstrada"],
    ["piano", "musica"],
    ["barca", "canoa"],
    ["scultura", "statua"],
    ["volo", "aereo"],
    ["finestra", "vetrata"],
    ["sottovoce", "bisbiglio"],
    ["giro", "tour"],
    ["vacanza", "viaggio"],
    ["camera", "albergo"],
    ["postino", "lettera"],
    ["arco", "porta"],
    ["quadro", "dipinto"],
    ["stadio", "campo"],
    ["ferragosto", "vacanze"],
    ["cavolfiore", "broccoli"],
    ["insalata", "verdura"]
];

let players = [];
let words = {};
let impostor = null;
let clickedPlayers = new Set();
let selectedGame = 1;

function selectGame(game) {
    selectedGame = game;
    document.getElementById("menu").style.display = "none";
    document.getElementById("setup").style.display = "block";
}

function addCustomWords() {
    let newWord1 = prompt("Inserisci la parola comune:");
    let newWord2 = prompt("Inserisci la parola dell'impostore:");
    
    if (newWord1 && newWord2) {
        wordPairs.push([newWord1.trim(), newWord2.trim()]);
        alert(`Aggiunte: "${newWord1}" e "${newWord2}"`);
    } else {
        alert("Parole non valide!");
    }
}

function startGame() {
    const numPlayers = parseInt(document.getElementById("numPlayers").value);
    if (numPlayers < 3 || numPlayers > 10) {
        alert("Inserisci un numero di giocatori valido (3-10)");
        return;
    }

    // Mostra i campi di input per i nomi dei giocatori
    const playerNamesContainer = document.getElementById("playerNamesContainer");
    playerNamesContainer.innerHTML = ""; // Pulisce i vecchi campi
    for (let i = 0; i < numPlayers; i++) {
        const playerInput = document.createElement("input");
        playerInput.type = "text";
        playerInput.classList.add("input-field");
        playerInput.placeholder = `nome giocatore ${i + 1}`;
        playerInput.id = `player${i + 1}`;
        playerNamesContainer.appendChild(playerInput);
    }

    // Modifica il testo del bottone per la fase successiva
    const startButton = document.querySelector("button[onclick='startGame()']");
    startButton.textContent = "conferma i giocatori";
    startButton.setAttribute("onclick", "confirmPlayers()");
}

function confirmPlayers() {
    const numPlayers = parseInt(document.getElementById("numPlayers").value);
    players = [];
    for (let i = 0; i < numPlayers; i++) {
        const playerName = document.getElementById(`player${i + 1}`).value.trim();
        if (!playerName) {
            alert("Tutti i giocatori devono avere un nome.");
            return;
        }
        players.push(playerName);
    }

    assignWords();
    showGameScreen();
}


function assignWords() {
    words = {};
    clickedPlayers.clear();
    
    if (selectedGame === 1) {
        const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
        impostor = Math.floor(Math.random() * players.length);

        players.forEach((player, index) => {
            words[player] = (index === impostor) ? randomPair[1] : randomPair[0];
        });
    } else if (selectedGame === 2) {
        const randomWord = wordPairs[Math.floor(Math.random() * wordPairs.length)][0];
        impostor = Math.floor(Math.random() * players.length);

        players.forEach((player, index) => {
            words[player] = (index === impostor) ? "?" : randomWord;
        });
    }
}



function toggleRules() {
    const gameRules = document.getElementById("gameRules");
    // Se le regole sono visibili, le nascondiamo; se sono nascoste, le mostriamo
    if (gameRules.style.display === "none" || gameRules.style.display === "") {
        gameRules.style.display = "block";
    } else {
        gameRules.style.display = "none";
    }
}

function showGameScreen() {
    // Nasconde la schermata di setup
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";

    // Imposta il titolo del gioco
    document.getElementById("gameTitle").textContent = (selectedGame === 1) ? "Gioco 1: Scopri l'impostore" : "Gioco 2: Indovina la parola";

    // Aggiungi le regole in base al gioco selezionato
    const gameRules = document.getElementById("gameRules");
    gameRules.innerHTML = "";

    if (selectedGame === 1) {
        gameRules.innerHTML = `
            <h2>Regole del Gioco 1: Scopri l'impostore</h2>
            <p>
                In questo gioco, ogni giocatore riceve una parola comune, tranne uno che riceve una parola simile, ma diversa. 
                I giocatori devono cercare di scoprire chi è l'impostore facendo domande. 
                L'impostore deve rispondere senza farsi scoprire, cercando di non rivelare che la sua parola è simile, ma diversa.
            </p>
            <ul>
                <li>Ogni giocatore riceve una parola, tranne l'impostore.</li>
                <li>Ogni turno, un giocatore deve dire una parola che descriva la sua parola senza rivelarla.</li>
                <li>L'impostore deve cercare di non farsi scoprire e rispondere in modo convincente.</li>
                <li>Se un giocatore scopre l'impostore, vince!</li>
            </ul>
        `;
    } else if (selectedGame === 2) {
        gameRules.innerHTML = `
            <h2>Regole del Gioco 2: Indovina la parola</h2>
            <p>
                In questo gioco, ogni giocatore riceve una parola comune, tranne uno che non ha alcuna parola. 
                Ogni giocatore deve descrivere la parola che ha senza rivelarla direttamente. 
                L'impostore deve cercare di non farsi scoprire. 
                Se viene scoperto, avrà una possibilità di indovinare la parola comune per vincere.
            </p>
            <ul>
                <li>Ogni giocatore ha una parola, tranne l'impostore che non ha nulla.</li>
                <li>Ogni turno, un giocatore descrive la propria parola senza dirla direttamente.</li>
                <li>L'impostore deve rispondere in modo convincente per non farsi scoprire.</li>
                <li>Se l'impostore viene scoperto, avrà una seconda possibilità per indovinare la parola comune.</li>
                <li>Se l'impostore indovina, vince! Altrimenti, il gioco continua.</li>
            </ul>
        `;
    }

    // Mostra la lista dei giocatori
    const playersList = document.getElementById("playersList");
    playersList.innerHTML = "";

    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        li.onclick = () => revealWord(li, player);
        playersList.appendChild(li);
    });
}



function revealWord(element, player) {
    if (clickedPlayers.has(player)) return;

    clickedPlayers.add(player);
    element.textContent = words[player];
    element.classList.add("clicked");

    setTimeout(() => {
        element.textContent = player;
    }, 2000);
}

function restartGame() {
    assignWords();
    showGameScreen();
}

function goToMenu() {
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
