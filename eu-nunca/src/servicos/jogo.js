import axios from "axios";

async function getFraseAleatoria(categoria) {
    // transforma a categoria em minúscula para a URL
    const url = `http://localhost:8000/${categoria.toLowerCase()}`;
    const response = await axios.get(url);
    const frases = response.data; // isso pega apenas as frases daquela categoria

    if (!frases || frases.length === 0) return null; // evita erros se não tiver frase

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

export { getFraseAleatoria };