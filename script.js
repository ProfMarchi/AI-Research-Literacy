// script.js

// Save content for each module (simulated save function)
function saveContent(section) {
  let content = "";
  switch(section) {
    case 'topic':
      content = document.getElementById('topic-input').value;
      break;
    case 'literature':
      content = document.getElementById('literature-input').value;
      break;
    case 'draft':
      content = document.getElementById('draft-input').value;
      break;
    case 'revision':
      content = document.getElementById('revision-input').value;
      break;
    case 'reflection':
      content = document.getElementById('reflection-input').value;
      break;
  }
  // In a real application, you would persist the data to a server or local storage.
  console.log(`Saved content for ${section}: ${content}`);
  alert(`Your ${section} content has been saved.`);
}

// Handle sending messages in the AI assistant chat
function sendMessage() {
  const chatInput = document.getElementById('chat-input');
  const chatWindow = document.getElementById('chat-window');
  const message = chatInput.value.trim();
  if (message === "") return;
  
  // Append user's message to chat window
  let userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('message', 'user');
  userMessageDiv.textContent = message;
  chatWindow.appendChild(userMessageDiv);
  
  // Clear input
  chatInput.value = "";
  
  // Simulated AI response after a short delay
  setTimeout(function() {
    let aiResponseDiv = document.createElement('div');
    aiResponseDiv.classList.add('message', 'bot');
    aiResponseDiv.textContent = generateAIResponse(message);
    chatWindow.appendChild(aiResponseDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 1000);
}

// A simple function to generate simulated AI responses
function generateAIResponse(userMessage) {
  if (userMessage.toLowerCase().includes("help")) {
    return "Remember, your research topic should be specific and researchable.";
  }
  if (userMessage.toLowerCase().includes("draft")) {
    return "Focus on structuring your argument clearly in your draft.";
  }
  return "I'm here to help! Could you please elaborate on your question?";
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
