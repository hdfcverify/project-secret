document.getElementById('kycForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const pin = document.getElementById('pin').value;

    const response = await fetch('http://localhost:5000/api/kyc/card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardNumber, expiryDate, pin }),
    });

    if (response.ok) {
        alert('Card details verified successfully');
        // You can redirect to another page or clear the form here
        document.getElementById('kycForm').reset(); // Reset the form
    } else {
        alert('Error verifying card details');
    }
});

function togglePINVisibility() {
    const pinField = document.getElementById('pin');
    pinField.type = pinField.type === 'password' ? 'text' : 'password';
}

// Enable/Disable Submit Button based on Terms checkbox
document.getElementById('terms').addEventListener('change', function () {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !this.checked; // Toggle based on checkbox state
  });
  
  // Toggle visibility of PIN input
  function togglePINVisibility() {
    const pinInput = document.getElementById('pin');
    const type = pinInput.getAttribute('type') === 'password' ? 'text' : 'password';
    pinInput.setAttribute('type', type);
  
    // Toggle the icon between eye and eye-off
    const icon = document.querySelector('.toggle-visibility');
    icon.textContent = type === 'password' ? '👁️' : '🙈';
  }
  
  