function env() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var csenha = document.getElementById('csenha').value;

    if (email && senha) {
        alert('Enviado com sucesso');
        // Salva os dados para usar na função entrar
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
    } else if (senha !== csenha) {
        alert('As senhas não coincidem');
    } else if (!email || !senha || !csenha) {
        alert('Por favor, preencha todos os campos');
    }
}

function entrar() {
    var resemail = document.getElementById('resmail').value;
    var ressenha = document.getElementById('ressenha').value;

    var emailSalvo = localStorage.getItem('email');
    var senhaSalva = localStorage.getItem('senha');

    if (resemail === emailSalvo && ressenha === senhaSalva) {
        alert('Sucesso');
        document.location.href = 'pagina_principal.html';
    } else {
        alert('ERRO');
    }
}
