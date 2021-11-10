const btnEntrar = document.getElementById('btn-entrar'); // btnEntrar guarda o botão Entrar nesta variável.
const agreementBox = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');

function checkLogin() {
  // Verifica se o email e a senha correspondem ao esperado.
  const emailInput = document.getElementById('email'); // emailInput guarda o input de email nessa variável.
  const passwordInput = document.getElementById('password'); // passwordInput guardo o input de senha nessa variável.
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkAgreement() {
  if (agreementBox.checked === true) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
}

window.onload = () => {
  btnEntrar.addEventListener('click', () => {
    checkLogin();
  });

  agreementBox.addEventListener('click', () => {
    checkAgreement();
  });
};

btnSend.addEventListener('click', () => {
  // Completar no requisito 21.
  console.log('click');
});
