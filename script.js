const socket = io('https://chat-room-v1.vercel.app/'); // vercel url placeholder rn cuz i havent deployed yet :P

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

socket.on('message', (message) => {
    const msgElement = document.createElement('div');
    msgElement.textContent = message;
    messagesDiv.appendChild(msgElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // scroll to bottom of messages
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('message', message);
    messageInput.value = ''; // no more input
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
