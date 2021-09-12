let botaoEnviar = document.getElementById('botaoEnviar')
let formulario = document.getElementsByClassName ("fomu_contato")
  
botaoEnviar.addEventListener('click', (event) => {
  let formularioValido = true;
    
let campoNome = document.getElementById("nome");
let mensagemNome = document.getElementById("mensagemNome");

let campoEmail = document.getElementById("email");
let mensagemEmail = document.getElementById("mensagemEmail");
let Fone = document.getElementById ("Fone");
let mensagemFone = document.getElementById ("mensagemFone");
let campoMensagem = document.getElementById("Mensagem");
let mensagemMensagem = document.getElementById("mensagemMensagem");


if (campoNome.value.length === 0) {
  mensagemNome.innerHTML = "Digite seu nome";
  formularioValido = false;
} else {
  mensagemNome.innerHTML = "";
}

if (campoEmail.value.length === "") {
  mensagemEmail.innerHTML = "Digite seu email";
  formularioValido = false;
  formularioValido = false;
} else {
  mensagemEmail.innerHTML = "";
}

if (campoEmail.value.indexOf("@") === -1 || campoEmail.value.indexOf(".") === -1 || (campoEmail.value.indexOf(".") - campoEmail.value.indexOf("@") === 1)) {
  campoEmail.classList.add("errorInput")
} else {
  campoEmail.classList.remove("errorInput")
}

if (Fone.value.length === 0) {
  mensagemFone.innerHTML = "Digite seu Fone";
  formularioValido = false;
} else {
  mensagemFone.innerHTML = " ";
}

if (campoMensagem.value.length === 0) {
  mensagemMensagem.innerHTML = "Digite sua mensagem";
  formularioValido = false;
} else {
  mensagemMensagem.innerHTML = "";
}
if (! formularioValido) {
  event.preventDefault ();
}

});

let promessa = fetch("https://api.github.com/users/katherinevilla/repos");
let githubRepositorios = document.getElementById("repositiGithub");
promessa
  .then(function (retorno) {
    return retorno.json();
  })
  .then(function (repositorios) {
    let nomes = [];

    for (let repositorio of repositorios) {
    let url = repositorio.html_url;
    let nome = repositorio.name;
      nomes.push(`
    <li> 
    ${nome} <a href = "$ {url}"> ${url}
    </a>
    </li>
    `);
    }
      
 githubRepositorios.innerHTML = nomes;
  });
