document.getElementById('forumForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pseudo = document.getElementById('pseudo').value;
  const message = document.getElementById('message').value;
  const msgList = JSON.parse(localStorage.getItem('forumMessages') || '[]');
  msgList.push({ pseudo, message, date: new Date().toLocaleString() });
  localStorage.setItem('forumMessages', JSON.stringify(msgList));
  document.getElementById('pseudo').value = '';
  document.getElementById('message').value = '';
  loadMessages();
});

function loadMessages() {
  const container = document.getElementById('messages');
  const msgList = JSON.parse(localStorage.getItem('forumMessages') || '[]');
  container.innerHTML = msgList.map(msg => `
    <div class="message">
      <strong>${msg.pseudo}</strong> <em>(${msg.date})</em>
      <p>${msg.message}</p>
    </div>
  `).join('');
}

loadMessages();