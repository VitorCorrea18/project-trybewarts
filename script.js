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

function prepareScreen() {
  document.querySelector('#evaluation-form').remove();
  const section = document.querySelector('.form-section');
  section.style.background = 'white';
}

function filtertechs({ HoFs , React, SQL, Jest, Promises, Python }) {
  let techs = [];
  if(HoFs) techs.push(HoFs);
  if(React) techs.push(React);
  if(SQL) techs.push(SQL);
  if(Jest) techs.push(Jest);
  if(Promises) techs.push(Promises);
  if(Python) techs.push(Python);
  return techs;
}

function appendAll(name, house, family, rate, textArea, techSpan) {
  document.querySelector('.form-section').appendChild(name);
  document.querySelector('.form-section').appendChild(house);
  document.querySelector('.form-section').appendChild(family);
  document.querySelector('.form-section').appendChild(techSpan);
  document.querySelector('.form-section').appendChild(rate);
  document.querySelector('.form-section').appendChild(textArea);
}

function makeSpanElements(name, lastname, house, family, rate, textarea, techs) {
  const nameSpan = document.createElement('span');
  const houseSpan = document.createElement('span');
  const familySpan = document.createElement('span');
  const techSpan = document.createElement('span');
  const rateSpan = document.createElement('span');
  const textAreaSpan = document.createElement('span');
  nameSpan.innerHTML = `Nome: ${name} ${lastname}`;
  houseSpan.innerHTML = `Casa: ${house}`;
  familySpan.innerHTML = `Familia: ${family}`;
  rateSpan.innerHTML = `Avaliação: ${rate}`;
  textAreaSpan.innerHTML = `Comentário: ${textarea}`;
  techSpan.innerHTML = `Tecnologias: ${techs}`;
  appendAll(nameSpan, houseSpan, familySpan, rateSpan, textAreaSpan, techSpan);
}

function makeTechList(techs) {
  const techList = document.createElement('ul');
  document.querySelector('.form-section').appendChild(techList);
  techs.forEach((tech) => {
    const newElem = document.createElement('li');
    newElem.innerText = tech;
    techList.appendChild(newElem);
  })
}

function printOnScreen(data) {
  const { name, lastname, house, family, rate, textarea} = data;
  prepareScreen();
  const techs = filtertechs(data);
  makeSpanElements(name, lastname, house, family, rate, textarea, techs);
  
}

btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('#evaluation-form'));
    const formProps = Object.fromEntries(formData);
    printOnScreen(formProps);
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
