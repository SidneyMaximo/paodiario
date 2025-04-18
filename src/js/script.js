{
    index: 10,
    reflection: "URL",
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmos 46:1"
},
{
    index: 22,     <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Versículo bíblico diário da Igreja O Brasil Para Cristo">
        <title>Versículo Bíblico</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./src/css/style.css">
    </head>
    <body>
        <div class="container">
            <!-- Elementos que serão preenchidos pelo JavaScript -->
            <div class="verse" id="verse">Carregando versículo...</div>
            <div class="reference" id="reference"></div>
            <div class="buttons">
                <button id="copy">COPIAR</button>
                <button id="share">COMPARTILHAR</button>
                <button id="reflection" style="display: none;">VER REFLEXÃO</button>
            </div>
            <footer class="rodape">
                <p>Siga nossa igreja nas redes sociais</p>
                <ul class="redes-sociais">
                    <li>
                        <a href="https://www.instagram.com/obpcriolargo" target="_blank" rel="noopener noreferrer">
                            <img src="./src/imagens/intagram.png" alt="Instagram">
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
        <script src="./src/js/script.js"></script>
    </body>
    </html>
    reflection: "URL",
    text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
    reference: "Romanos 8:37"
}function getVerseText() {
    const verseText = document.getElementById("verse").textContent;
    const referenceText = document.getElementById("reference").textContent;
    return `${verseText} - ${referenceText}`;
}

document.getElementById("copy").addEventListener("click", () => {
    const textToCopy = getVerseText();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Versículo copiado!");
        }).catch(() => {
            fallbackCopy(textToCopy);
        });
    } else {
        fallbackCopy(textToCopy);
    }
});

document.getElementById("share").addEventListener("click", () => {
    const textToShare = getVerseText();
    if (navigator.share) {
        navigator.share({
            title: "Versículo Bíblico",
            text: textToShare,
        }).catch((error) => {
            console.log("Erro ao compartilhar:", error);
        });
    } else {
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
        window.open(shareUrl, "_blank");
    }
});if (verse.reflection && isValidUrl(verse.reflection)) {
    reflectionButton.style.display = "block";
    reflectionButton.onclick = () => window.open(verse.reflection, "_blank");
} else {
    reflectionButton.style.display = "none";
}{
    index: 10,
    reflection: "URL",
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmos 46:1"
},
{
    index: 10, // Duplicado
    reflection: "URL",
    text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
    reference: "Romanos 8:37"
}body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: url('../imagens/bg-obpc.png') no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
    text-align: center;
    min-height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo translúcido */
    box-sizing: border-box;
}

.verse {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
}

.reference {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    width: 100%;
    max-width: 300px;
}

button {
    padding: 0.75rem 1.5rem;
    font-size: 0.6rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #212121;
    color: #f5f5f5;
    width: 80%;
    max-width: 200px;
    transition: all 0.3s ease;
}

#copy:hover, #share:hover, #reflection:hover {
    background-color: #333333;
}

.redes-sociais {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.redes-sociais img {
    width: 40px;
    height: auto;
    transition: transform 0.3s ease;
}

.redes-sociais img:hover {
    transform: scale(1.1);
}

.rodape {
    margin-top: 2rem;
    text-align: center;
    color: #ffffff;
    padding: 1rem;
}

.church-info {
    margin: 0.2rem 0;
    font-size: 1rem;
    text-align: center;
    color: #ffffff;
}

.church-info:last-child {
    opacity: 0.7;
    font-size: 0.9rem;
}

/* Media Queries para responsividade */
@media (max-width: 600px) {
    .verse {
        font-size: 1.2rem;
    }
    .reference {
        font-size: 1rem;
    }
    button {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}

@media (min-width: 768px) {
    .verse {
        font-size: 1.8rem;
        max-width: 800px;
    }
    .reference {
        font-size: 1.4rem;
    }
}// Json dos versículos
const verses = [
    {
        index: 1,
        reflection: "URL",
        text: "A saber: Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres que Deus o ressuscitou dos mortos, serás salvo.",
        reference: "Romanos 10:9",
    },
    {
        index: 2,
        reflection: "URL",
        text: "Há caminho que ao homem parece direito, mas o fim dele são os caminhos da morte.",
        reference: "Provérbios 14:12",
    },
    {
        index: 3,
        reflection: "URL",
        text: "O Senhor é o meu pastor, nada me faltará.",
        reference: "Salmos 23:1",
    },
    {
        index: 4,
        reflection: "URL",
        text: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça.",
        reference: "Números 6:24-25",
    },
    {
        index: 5,
        reflection: "URL",
        text: "O Senhor é a minha luz e a minha salvação; de quem terei medo?",
        reference: "Salmos 27:1",
    },
    // Adicione os outros versículos aqui
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const verseElement = document.getElementById("verse");
    const referenceElement = document.getElementById("reference");
    const reflectionButton = document.getElementById("reflection");

    function displayRandomVerse() {
        const verse = getRandomVerse();
        verseElement.textContent = verse.text;
        referenceElement.textContent = verse.reference;

        if (verse.reflection && isValidUrl(verse.reflection)) {
            reflectionButton.style.display = "block";
            reflectionButton.onclick = () => window.open(verse.reflection, "_blank");
        } else {
            reflectionButton.style.display = "none";
        }
    }

    displayRandomVerse();

    document.getElementById("copy").addEventListener("click", () => {
        const verseText = verseElement.textContent;
        const referenceText = referenceElement.textContent;
        const textToCopy = `${verseText} - ${referenceText}`;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Versículo copiado!");
            }).catch(() => {
                fallbackCopy(textToCopy);
            });
        } else {
            fallbackCopy(textToCopy);
        }
    });

    function fallbackCopy(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            document.execCommand("copy");
            alert("Versículo copiado!");
        } catch (err) {
            alert("Erro ao copiar o versículo.");
        }

        document.body.removeChild(textarea);
    }

    document.getElementById("share").addEventListener("click", () => {
        const verseText = verseElement.textContent;
        const referenceText = referenceElement.textContent;
        const textToShare = `${verseText} - ${referenceText}`;

        if (navigator.share) {
            navigator.share({
                title: "Versículo Bíblico",
                text: textToShare,
            }).catch((error) => {
                console.log("Erro ao compartilhar:", error);
            });
        } else {
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
            window.open(shareUrl, "_blank");
        }
    });

    function isValidUrl(url) {
        if (!url || url === "URL") return false;
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
});