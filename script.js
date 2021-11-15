const btnEntrar = document.getElementById('btn-entrar'); // guarda o botão btn-entrar nesta variável.
const agreementBox = document.getElementById('agreement'); // guarda o checkBox agreement nesta variável.
const btnSend = document.getElementById('submit-btn'); // guarda o botão 'submit-btn' nesta variavel.
const textArea = document.querySelector('textarea'); // guarda o input de texto nesta variável.
const maxLength = textArea.getAttribute('maxlength'); // guarda o valor numerico do atributo maxlength da textarea.
const counter = document.getElementById('counter'); // Elemento span que guarda o numero atual de carecteres do textarea (length).
// const main = document.getElementById('main'); REQUISITO 22

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
  if (agreementBox.checked === true) { // Verifica se o checkbox está selecionado.
    btnSend.disabled = false; // caso a condição seja verdadeira o botão se ativa.
  } else {
    btnSend.disabled = true; // se falsa a condição, o botão se desativa.
  }
}

// btnSend.addEventListener('click', (event) => {
//   const sentForm = document.createElement('div').className('sent-form');
// }); COMPLETAR REQUISITO 22!

window.onload = () => { // Se ativa no momento que a página é carregada.
  btnEntrar.addEventListener('click', () => { // escutador de evento 'click' no botão entrar.
    checkLogin(); // chama a função que verifica os dados de login.
  });

  agreementBox.addEventListener('click', () => { // escutador de evento 'click' no checkBox
    checkAgreement(); // chama a função que verifica se o checkBox está marcado.
  });

  counter.innerText = `${maxLength}`; // exibe o valor max de caracteres permitidos.
  textArea.addEventListener('keyup', () => { // Se ativa ao digitar na text area.
    counter.innerText = `${maxLength - textArea.value.length}`; // atualiza o counter. 500 - total digitado.
  });
};
