function sendMessage() {
    const input = document.getElementById('chatbot_input');
    const box = document.getElementById('chatbot_box');
    const message = input.value.trim();
    if (message === '') return;

    const userMsg = document.createElement('p');
    userMsg.className = 'user_msg';
    userMsg.textContent = message;
    box.appendChild(userMsg);

    const botMsg = document.createElement('p');
    botMsg.className = 'bot_msg';

    const replies = {
        'hello': 'Hi there! How can I assist you?',
        'booking': 'You can view your bookings in the Current Bookings section above.',
        'payment': 'Please check the Payment section for your payment details.',
        'cancel': 'To cancel a booking, please contact us at our email.',
        'help': 'I can help with bookings, payments, and travel details!',
        'contact':'Please find our contact page at the footer or on the homepage for more information!',
        'travel':'Please visit our booking page and view our available travel destinations.',
        'what is so great about your company?':'Our high-quality tourism website has various destinations, cheap prices, and top-of-the-line scheduling.'
    };

    const key = Object.keys(replies).find(k => message.toLowerCase().includes(k));
    botMsg.textContent = key ? replies[key] : "I'm not sure about that. Please contact us directly!";
    box.appendChild(botMsg);

    input.value = '';
    box.scrollTop = box.scrollHeight;
}