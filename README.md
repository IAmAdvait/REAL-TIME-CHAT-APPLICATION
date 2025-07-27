# REAL-TIME-CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ADVAIT MAHAJAN

*INTERN ID*: CT04DH273

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

*DESCRIPTION*: This project is a real-time chat application built with front-end web development technologies and a lightweight WebSocket server in Node.js. The idea behind the app is simple but powerful: create a clean, responsive, and interactive interface where users can send and receive messages instantly without needing to refresh the page or rely on heavy frameworks or backends. It showcases your ability to handle live data communication and reflects a good understanding of HTML, CSS, and JavaScript fundamentals.

At the heart of the project is WebSockets, a protocol that allows two-way communication between the client and server. When a user sends a message through the input field on the frontend, it's pushed to the server and broadcast to all connected clients in real time. This creates a smooth experience similar to WhatsApp, allowing users to see messages appear immediately without page reloads or delays. WebSockets are faster and more efficient than traditional HTTP polling or AJAX solutions, making them ideal for live interactions.

On the frontend, the layout uses semantic HTML and pure CSS for styling. The interface is clean and minimal, featuring a scrollable message window, a text input field, and a send button. It’s designed to be mobile-responsive and looks good even on smaller screens. The chat messages appear in a styled container, making it easy to tell different messages apart. The UI automatically scrolls to show the latest message, improving the user experience.

JavaScript manages the WebSocket connection and message logic. It connects to the server, listens for incoming messages, and updates the DOM. It also sends messages to the server, allowing users to submit their messages by clicking the send button or pressing the Enter key. This keeps the user experience smooth and intuitive.

The backend is intentionally simple, consisting of a single Node.js file that uses the `ws` WebSocket library. It manages all WebSocket connections, stores client references, and takes care of broadcasting messages. It does not save chat history permanently, which keeps it lightweight. This simplicity makes it a great starting point if you want to build a more complex chat system in the future with user accounts, message history, or multiple chat rooms.

This project is perfect for anyone learning real-time web development or wanting to improve their portfolio with a practical example of WebSocket implementation. It provides a solid base to build upon. You could easily add features like nicknames, timestamps, typing indicators, or even emojis. Whether you’re learning, showcasing, or experimenting, this real-time chat app combines responsiveness, interactivity, and live communication in a compact format.

*OUTPUT*: ![Image](https://github.com/user-attachments/assets/f1ebb9b0-f6fd-4ae5-9554-2bc4f8a73c5d)
