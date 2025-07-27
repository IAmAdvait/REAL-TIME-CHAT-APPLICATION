// Select key DOM elements for interaction
const chatBox = document.getElementById("chat-box");          // The container where messages will appear
const input = document.getElementById("message-input");       // The input box where user types their message
const sendBtn = document.getElementById("send-btn");          // The Send button

// Create a WebSocket connection to the server
const socket = new WebSocket("ws://localhost:8080");

// Handle incoming messages from the server
socket.onmessage = async (event) => {
  let messageText;

  // Some browsers receive the message as a Blob instead of plain text
  // This checks the type and converts Blob to text if needed
  if (event.data instanceof Blob) {
    messageText = await event.data.text(); // Convert Blob to string
  } else {
    messageText = event.data; // Use the string directly
  }

  // Create a new div for the message and style it
  const msg = document.createElement("div");
  msg.classList.add("message");
  msg.textContent = messageText;

  // Add the message to the chat box
  chatBox.appendChild(msg);

  // Automatically scroll to the latest message
  chatBox.scrollTop = chatBox.scrollHeight;
};

// Function to send the message to the WebSocket server
sendBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    socket.send(input.value); // Send message to server
    input.value = "";         // Clear the input box
  }
});

// Allow pressing 'Enter' key to send messages (not just clicking the button)
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click(); // Trigger the same click event
});
