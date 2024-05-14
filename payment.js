document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const paymentMessage = document.getElementById('paymentMessage');
    paymentMessage.textContent = "Processing...";
    setTimeout(() => {
        paymentMessage.textContent = "Payment Successful!";
    }, 3000);
});
