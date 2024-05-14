const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');

sendButton.addEventListener('click', async () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    const chatHistory = document.querySelector('.chat-history');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'user-message');
    newMessage.textContent = userMessage;
    chatHistory.appendChild(newMessage);

    const aiResponse = await fetch('http://localhost/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    });

    const aiMessage = await aiResponse.text();
    const aiNewMessage = document.createElement('div');
    aiNewMessage.classList.add('message', 'ai-message');
    aiNewMessage.textContent = aiMessage;
    chatHistory.appendChild(aiNewMessage);

    userInput.value = '';
  }
});



