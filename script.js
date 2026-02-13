document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const userEmail = document.getElementById('userEmail');
    const sendBtn = document.getElementById('sendBtn');
    const typingIndicator = document.getElementById('typingIndicator');

    // !!! IMPORTANT: FOLLOW THESE 3 STEPS TO MAKE IT WORK !!!
    // 1. Go to https://formspree.io and create a free account.
    // 2. Click "New Form" and name it "Naiga Chat".
    // 3. Copy the "Form ID" (it looks like 'mnqeogww') and paste it below:
    const FORM_ID = "mzdaeqle";

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showStatus(text) {
        typingIndicator.textContent = text;
        typingIndicator.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideStatus() {
        typingIndicator.style.display = 'none';
    }

    async function sendToEmail(email, message) {
        if (FORM_ID === "YOUR_FORM_ID_HERE") {
            addMessage("Wait! Naiga needs to finish a 1-minute setup. Please check the code (script.js) and add your 'FORM_ID' from Formspree so I can receive your messages!", false);
            return;
        }

        showStatus("Sending message to Naiga...");

        try {
            const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    message: message
                })
            });

            hideStatus();

            if (response.ok) {
                // Success! Wait a bit then show goodbye screen
                setTimeout(() => {
                    chatPortal.style.display = 'none';
                    document.getElementById('thankYouScreen').style.display = 'flex';
                    document.getElementById('thankYouScreen').classList.remove('welcome-hidden');
                }, 2000);
            } else {
                addMessage("Oops! Formspree says the ID is wrong. Please check your Form ID in script.js.", false);
            }
        } catch (error) {
            hideStatus();
            addMessage("Connection error. Please check your internet and try again.", false);
        }
    }

    function sendMessage() {
        const email = userEmail.value.trim();
        const text = userInput.value.trim();

        if (email === "" || !email.includes('@')) {
            alert("Please enter a valid email address so Naiga can reply to you!");
            return;
        }
        if (text === "") return;

        addMessage(text, true);
        userInput.value = "";

        sendToEmail(email, text);
    }

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    userInput.focus();

    // Transition Logic
    const welcomeScreen = document.getElementById('welcomeScreen');
    const startChat = document.getElementById('startChat');
    const chatPortal = document.getElementById('chatPortal');
    const thankYouScreen = document.getElementById('thankYouScreen');
    const askAgain = document.getElementById('askAgain');

    startChat.addEventListener('click', () => {
        // Fade out welcome
        welcomeScreen.classList.add('welcome-hidden');

        // Wait for transition, then show chat
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            chatPortal.style.display = 'flex';
            // Trigger focus again for the chat input
            userInput.focus();
        }, 800);
    });

    askAgain.addEventListener('click', () => {
        // Fade out thank you
        thankYouScreen.classList.add('welcome-hidden');

        // Wait for transition, then show chat
        setTimeout(() => {
            thankYouScreen.style.display = 'none';
            chatPortal.style.display = 'flex';
            // Clear message history if needed or just focus
            userInput.focus();
        }, 800);
    });

    const exitSite = document.getElementById('exitSite');
    exitSite.addEventListener('click', () => {
        // Attempt to close
        window.close();

        // Fallback if window.close() is blocked
        setTimeout(() => {
            document.querySelector('#thankYouScreen .welcome-content').innerHTML = `
                <h1 class="welcome-title">Goodbye!</h1>
                <p class="welcome-subtitle">It's now safe to close this tab.</p>
            `;
        }, 100);
    });
});
