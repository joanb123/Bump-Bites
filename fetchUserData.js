document.addEventListener('DOMContentLoaded', () => {
    fetch('getUserData.php')
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          console.error(data.error);
          return;
        }
        document.querySelector('.account-info-box1 p[name="name"]').innerHTML = `<strong>Name:</strong> ${data.name}`;
        document.querySelector('.account-info-box1 p[name="email"]').innerHTML = `<strong>Email:</strong> ${data.email}`;
      })
      .catch(error => console.error('Error:', error));
  });
  