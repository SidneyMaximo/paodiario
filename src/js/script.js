// Json dos versículos
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