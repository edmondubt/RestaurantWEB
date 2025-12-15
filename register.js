document.getElementById('register-btn').addEventListener('click', function() {
  

   
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmError').textContent = '';

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if(username === '') {
        document.getElementById('usernameError').textContent = 'Ju lutem shtoni Username';
        valid = false;
        
    }

   if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Email jo i vlefshëm';
    valid = false;
}
    if(password === '') {
            document.getElementById('passwordError').textContent = 'Ju lutem shtoni Password';
            valid = false;
        } else if(password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password duhet të ketë të paktën 8 karaktere';
            valid = false;
        }

        if(confirmPassword === '') {
            document.getElementById('confirmError').textContent = 'Ju lutem konfirmoni Password';
            valid = false;
        }

        if(password && confirmPassword && password !== confirmPassword) {
            document.getElementById('confirmError').textContent = 'Password dhe Confirm Password nuk përputhen';
            valid = false;
        }

    if(valid) {
        alert('Account u krijua me sukses!');
    }
});
