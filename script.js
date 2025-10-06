//Lista de frases romanticas
const frases = [
    "Eres mi lugar seguro",
    "Tu sonrisa ilumina mis dias",
    "Te necesito a ti",
    "Eres la razon de mis sonrisas",
    "Tu voz es hermosa",
    "Cada dia contigo es mejor",
    "No pienso soltarte facilmente",
    "Te elegiría una y otra vez",
    "Eres la casualidad más bonita",
    "Sonrio cada vez que te pienso",
    "Mereces muchas cosas buenas",
    "Eres una buena persona",
    "Soy cursi solo contigo!",
    "Tienes los ojos más lindos del universo",
    "Eres guapisimo",
    "Nunca dudes de tu potencial"
];

//Referencias al html
const boton = document.getElementById("botton");
const texto = document.getElementById("frase");

boton.addEventListener("click", () => {
  const indice = Math.floor(Math.random() * frases.length);
  texto.innerText = frases[indice];
});