document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript carregado");

    function toggleDetails(elementId) {
        const details = document.getElementById(elementId);
        if (!details) {
            console.error(`Elemento com ID ${elementId} não encontrado.`);
            return; 
        }

        const arrow = details.previousElementSibling.querySelector(".arrow");

        if (details.classList.contains("details-hidden")) {
            details.classList.remove("details-hidden");
            details.classList.add("details-visible");
            arrow.textContent = "˄"; 
        } else {
            details.classList.add("details-hidden");
            details.classList.remove("details-visible");
            arrow.textContent = "˅"; 
        }
    }

    const entertainmentItems = document.querySelectorAll(".entretenimento ul li");
    entertainmentItems.forEach(item => {
        item.addEventListener("click", function() {
            const itemText = item.querySelector("strong").innerText.trim();
            const elementId = itemText.toLowerCase().replace(/ /g, '-') + '-details';
            toggleDetails(elementId);
        });
    });

    // Adicionando o botão flutuante de Instagram
    const instagramButton = document.createElement("a");
    instagramButton.href = "https://www.instagram.com/terceiro_if/";
    instagramButton.target = "_blank";
    instagramButton.classList.add("instagram-float");
    instagramButton.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="instagram-icon" aria-label="Siga-nos no Instagram">
    `;
    document.body.appendChild(instagramButton);

    // Adicionando a contagem regressiva para o evento
    const countdown = document.createElement("div");
    countdown.id = "countdown";
    countdown.style.position = "fixed";
    countdown.style.top = "20px";
    countdown.style.right = "20px";
    countdown.style.background = "#ff7518";
    countdown.style.color = "#fff";
    countdown.style.padding = "10px";
    countdown.style.borderRadius = "5px";
    countdown.style.zIndex = "1000";
    document.body.appendChild(countdown);

    const eventDate = new Date("2024-10-25T19:00:00");
    const updateCountdown = () => {
        const now = new Date();
        const distance = eventDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    setInterval(updateCountdown, 1000);

    // Adicionando o estilo do botão flutuante
    const style = document.createElement('style');
    style.innerHTML = `
        .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25D366; /* Cor de fundo do WhatsApp */
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: transform 0.3s;
        }
        
        .whatsapp-float:hover {
            transform: scale(1.1);
        }

        .instagram-float {
            position: fixed;
            bottom: 90px; /* Distância do botão do WhatsApp */
            right: 20px;
            background-color: #E1306C; /* Cor de fundo do Instagram */
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: transform 0.3s;
        }

        .instagram-float:hover {
            transform: scale(1.1);
        }

        .whatsapp-icon,
        .instagram-icon {
            width: 50px;
            height: 50px;
        }

        /* Adicionando novas classes para animações */
        .details-visible {
            opacity: 1;
            transition: opacity 0.3s ease-in;
        }

        .details-hidden {
            opacity: 0;
            transition: opacity 0.3s ease-out;
        }

        /* Efeito para lista de entretenimento */
        .entretenimento ul li {
            transition: background-color 0.3s;
        }

        .entretenimento ul li:hover {
            background-color: #ff914d;
        }

        /* Estilos adicionais para a contagem regressiva */
        #countdown {
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
    `;
    document.head.appendChild(style);
});
