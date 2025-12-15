document.getElementById('login-btn').addEventListener('click', function () {


    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let valid = true;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Ju lutem shtoni Username';
        valid = false;

    }
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Ju lutem shtoni Password';
        valid = false;
    }
    else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password duhet të ketë të paktën 8 karaktere';
        valid = false;
    }
    if (valid) {
        alert('Login me sukses!');
        window.location.href = 'home.html';
    }
});
