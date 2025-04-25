const form = document.getElementById('form');
        const errorDiv = document.getElementById('error');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // prevent actual form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!name || !email || !password) {
                errorDiv.textContent = 'Please fill out all fields.';
            } else {
                errorDiv.textContent = '';
                // Proceed with form submission logic (e.g., send to server)
                alert('Your account has been created!');
            }
        });

        <script>
document.getElementById("form").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match.");
    }
});
</script>
