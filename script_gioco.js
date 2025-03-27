let wordPairs = [
    ["soggiorno", "salotto"],
    ["casa", "appartamento"],
    ["camera", "stanza"],
    ["bagno", "gabinetto"],
    ["discoteca", "club"],
    ["Milano", "Napoli"],
    ["spiaggia", "mare"],
    ["sala giochi", "arcade"],
    ["biblioteca", "libreria"],
    ["fast food", "McDonald's"],
    ["scuola", "prigione"],
    ["ufficio", "call center"],
    ["autobus", "metro"],
    ["castello", "fortezza"],
    ["aeroporto", "stazione"],
    ["ospedale", "obitorio"],
    ["supermercato", "discount"],
    ["palestra", "dojo"],
    ["zoo", "savana"],
    ["parco", "giardino"],
    ["bar", "osteria"],
    ["teatro", "cinema"],
    ["Lidl", "Esselunga"],
    ["Ikea", "Mondo Convenienza"],
    ["Luna Park", "circo"],
    ["Las Vegas", "Monaco"],
    ["stadio", "Maracanã"],
    ["TwitchCon", "Gamescom"],
    ["Area 51", "Roswell"],
    ["Among Us", "Mong Us"],
    ["Vaticano", "Gerusalemme"],
    ["Hogwarts", "Scuola di Magia"],
    ["Chernobyl", "Fukushima"],
    ["Louvre", "Museo Egizio"],
    ["Dubai", "Abu Dhabi"],
    ["Netflix", "Disney+"],
    ["YouTube", "TikTok"],
    ["Discord", "Telegram"],
    ["Twitter", "Reddit"],
    ["Facebook", "MySpace"],
    ["WhatsApp", "Messenger"],
    ["Minecraft", "Roblox"],
    ["Fortnite", "Apex Legends"],
    ["Cyberpunk", "GTA 6"],
    ["Google", "Bing"],
    ["Amazon", "eBay"],
    ["Mercato", "Bazar"],
    ["Carcere", "Alcatraz"],
    ["Piramidi", "Stonehenge"],
    ["Everest", "K2"],
    ["Sahara", "Gobi"],
    ["Antartide", "Artide"],
    ["Inferno", "Purgatorio"],
    ["Monte Olimpo", "Asgard"],
    ["Rapture", "Columbia"],
    ["Bikini Bottom", "Springfield"],
    ["Atlantide", "El Dorado"],
    ["Wakanda", "Metropolis"],
    ["Gotham", "Arkham"],
    ["Hell's Kitchen", "Brooklyn"],
    ["Chernobyl", "Pripyat"],
    ["Mordor", "Hogwarts"],
    ["Narnia", "Neverland"],
    ["Minecraft Nether", "End"],
    ["Death Star", "Millennium Falcon"],
    ["Tokyo", "Kyoto"],
    ["Berlino", "Monaco di Baviera"],
    ["Parigi", "Marsiglia"],
    ["Roma", "Firenze"],
    ["Torino", "Bologna"],
    ["Palermo", "Catania"],
    ["Los Angeles", "San Francisco"],
    ["New York", "Chicago"],
    ["Londra", "Manchester"],
    ["Barcellona", "Madrid"],
    ["Rio de Janeiro", "Buenos Aires"],
    ["Pechino", "Shanghai"],
    ["Seoul", "Busan"],
    ["Mumbai", "Delhi"],
    ["Sydney", "Melbourne"],
    ["Atene", "Sparta"],
    ["Oslo", "Stoccolma"],
    ["Helsinki", "Reykjavik"],
    ["Dubai Mall", "Mall of America"],
    ["Starbucks", "Dunkin' Donuts"],
    ["KFC", "Burger King"],
    ["Subway", "Domino’s"],
    ["Euronics", "MediaWorld"],
    ["GameStop", "Steam"],
    ["PlayStation", "Xbox"],
    ["Nintendo", "Sega"],
    ["Tesla", "Ferrari"],
    ["BMW", "Mercedes"],
    ["Bugatti", "Lamborghini"],
    ["Rolls Royce", "Bentley"],
    ["F1", "MotoGP"],
    ["NBA", "NFL"],
    ["Champions League", "Mondiale"],
    ["Maracanã", "Santiago Bernabéu"],
    ["Old Trafford", "Camp Nou"],
    ["San Siro", "Juventus Stadium"],
    ["Anfield", "Wembley"],
    ["Museo delle Cere", "Madame Tussauds"],
    ["Ponte di Brooklyn", "Golden Gate Bridge"],
    ["Torre Eiffel", "Big Ben"],
    ["Statua della Libertà", "Cristo Redentore"],
    ["Machu Picchu", "Petra"],
    ["Monte Fuji", "Kilimangiaro"],
    ["La Mecca", "Taj Mahal"],
    ["Cappella Sistina", "Basilica di San Pietro"],
    ["Gran Canyon", "Niagara Falls"],
    ["Loch Ness", "Transilvania"],
    ["Notre Dame", "Sagrada Familia"],
    ["Wall Street", "Silicon Valley"],
    ["Monte Everest", "Monte Bianco"],
    ["Isola di Pasqua", "Bermuda"],
    ["Amazonia", "Foresta Nera"],
    ["Grand Central", "Shibuya Crossing"],
    ["Hollywood", "Bollywood"],
    ["Las Ramblas", "Times Square"],
    ["Beverly Hills", "Malibù"],
    ["Copacabana", "Ibiza"],
    ["Papeete", "Sharm El Sheikh"],
    ["Maldive", "Bora Bora"],
    ["Groenlandia", "Islanda"],
    ["Siberia", "Alaska"],
    ["Ulaanbaatar", "Novosibirsk"],
    ["Brasilia", "Santiago"],
    ["Hong Kong", "Macao"],
    ["Kuala Lumpur", "Bangkok"],
    ["Jakarta", "Manila"],
    ["Phuket", "Bali"],
    ["Dubai Marina", "Palm Jumeirah"],
    ["Burj Khalifa", "Empire State Building"],
    ["Colosseo", "Arena di Verona"],
    ["Piazza San Marco", "Piazza del Duomo"],
    ["Fontana di Trevi", "Ponte Vecchio"],
    ["Louvre", "MoMA"],
    ["Musei Vaticani", "British Museum"],
    ["CERN", "NASA"],
    ["ISS", "Stazione Mir"],
    ["Titanic", "Costa Concordia"],
    ["Pirati dei Caraibi", "Barbanera"],
    ["Nave spaziale", "UFO"],
    ["Mont Saint-Michel", "Castello di Neuschwanstein"],
    ["Eldorado", "Shangri-La"],
    ["Pompei", "Atlantide"],
    ["Olimpo", "Valhalla"],
    ["Tartarughe Ninja", "Power Rangers"],
    ["Paperopoli", "Topolinia"],
    ["Springfield", "South Park"],
    ["Fattoria", "Granaio"],
    ["Cimitero", "Cripta"],
    ["Centro commerciale", "Mercato rionale"],
    ["Fortezza Bastiani", "Muro di Berlino"],
    ["Tana del Lupo", "Bunker segreto"],
    ["Laboratorio segreto", "Base sotterranea"],
    ["Caverna", "Grotta di Ali Baba"],
    ["Torre di Pisa", "Torre di Babele"],
    ["Banca", "Caveau"],
    ["Carcere di massima sicurezza", "Prigione di Azkaban"],
    ["Laboratorio scientifico", "Area riservata"],
    ["Vulcano", "Isola deserta"],
    ["Deep Web", "Darknet"],
    ["Stazione spaziale", "Colonia marziana"],
    ["Basilica", "Cattedrale"],
    ["Bunker nucleare", "Zona 51"],
    ["Set cinematografico", "Studio televisivo"]
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
        gameRules.style.display = "block";  // Mostra l'elemento
        setTimeout(() => {
            gameRules.classList.add('show'); // Aggiungi la classe per l'animazione
        }, 10); // Un piccolo ritardo per far partire l'animazione
    } else {
        gameRules.classList.remove('show'); // Rimuovi la classe dell'animazione
        setTimeout(() => {
            gameRules.style.display = "none"; // Nascondi l'elemento dopo l'animazione
        }, 500); // Tempo dell'animazione
    }
}

function showGameScreen() {
    // Nasconde la schermata di setup
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";

    // Imposta il titolo del gioco
    document.getElementById("gameTitle").textContent = (selectedGame === 1) ? "scopri l'impostore" : "indovina la parola";

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
