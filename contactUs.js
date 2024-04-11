document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'contactUs.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
  
    xhr.onload = function() {
        if (xhr.status === 200) {
          alert('Message sent successfully');
        } else {
          alert('An error occurred: ' + xhr.status);
        }
      };
  });