const btnEntrar = document.getElementById('btn-entrar'); // guarda o botão btn-entrar nesta variável.
const agreementBox = document.getElementById('agreement'); // guarda o checkBox agreement nesta variável.
const btnSend = document.getElementById('submit-btn'); // guarda o botão 'submit-btn' nesta variavel.
const textArea = document.querySelector('textarea'); // guarda o input de texto nesta variável.
const maxLength = textArea.getAttribute('maxlength'); // guarda o valor numerico do atributo maxlength da textarea.
const counter = document.getElementById('counter'); // Elemento span que guarda o numero atual de carecteres do textarea (length).
const section1 = document.getElementById('personal-data');

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

function printName() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name.value} ${lastName.value}`;
  section1.append(fullName);
  name.remove();
  lastName.remove();
}

function printEmail() {
  const inputEmail = document.getElementById('input-email');
  const email = document.createElement('p');
  email.innerText = `Email: ${inputEmail.value}`;
  section1.append(email);
  inputEmail.remove();
}

function printHouse() {
  const inputHouse = document.getElementById('house');
  const house = document.createElement('p');
  house.innerText = `Casa: ${inputHouse.value}`;
  section1.append(house);
  inputHouse.remove();
  document.getElementById('label-house').remove();
}

btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  const subject = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < subject.length; i += 1) {
    subject[i].classList = 'subject';
  } // incompleto.

  printName(); printEmail(); printHouse();
});

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
