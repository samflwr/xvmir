/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

function changeQuote() {
  var quotes = [
    "Buzatu Samir Ionut Trifu, noto come xvmir, è un artista italiano poliedrico nato il 10 gennaio 2004. La sua passione per l'arte e la tecnologia lo ha portato a sviluppare un'ampia gamma di competenze in diversi campi. Come musicista, xvmir si dedica principalmente alla produzione di musica phonk e lo-fi."
    "i have a love-hate relationship with coding. it's like solving a puzzle, but the puzzle is constantly changing its rules.",
    "my secret to staying up late coding? Lots of caffeine and a playlist of upbeat tunes. and maybe a cat nap or two.",
    "designing and programming are like peanut butter and jelly - they just belong together.",
    "programming is my passion, but cute animals are my weakness. if you see a cute puppy, please excuse my temporary absence.",
    "i believe that good design and programming can change the world, one website or application at a time. and hey, it doesn't hurt if it looks cute and cuddly too!",
    "if you need me, i'll be buried under a pile of code and surrounded by a mountain of cute animal videos.",
    "my coding skills may be sharp, but my love for cute animals is even sharper.",
    "i can design and program for hours on end, but show me a cute kitten and all productivity goes out the window."
  ];

  var quoteElement = document.getElementById("quote");
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  
  quoteElement.innerHTML = randomQuote;
}

window.addEventListener("load", changeQuote);


/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
