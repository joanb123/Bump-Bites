document.addEventListener('DOMContentLoaded', function() {
    fetch('fetchOrderDetails.php')
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          console.log(data.error);
          return;
        }
        // Assuming you have placeholders in your HTML
        document.querySelector('.order-column strong[order-placed]').innerText = `Order Placed\n${data.order_placed}`;
        document.querySelector('.order-column strong[order-total]').innerText = `Order Total\n$${data.order_total}`;
        document.querySelector('.order-column strong[order-status]').innerText = `Order Status\n${data.order_status}`;
        document.querySelector('.order-content span').innerHTML = `<strong>${data.product_name}</strong><br>Order Number: ${data.order_number}`;
        // You might want to dynamically set the image src based on the product/order as well
      })
      .catch(error => console.error('Error:', error));
  });
  