let botaoEnviar = document.getElementById('botaoEnviar')
let formulario = document.getElementsByClassName ("fomu_contato")
  

botaoEnviar.addEventListener('click', (event) => {
    

let campoNome = document.getElementById("nome");
let mensagemNome = document.getElementById("mensagemNome");

let campoEmail = document.getElementById("email");
let mensagemEmail = document.getElementById("mensagemEmail");
let Fone = document.getElementById ("Fone");
let mensagemFone = document.getElementById ("mensagemFone");
let campoMensagem = document.getElementById("Mensagem");
let mensagemMensagem = document.getElementById("mensagemMensagem");


//campoNome.value = "";

if (campoNome.value.length === 0) {
  mensagemNome.innerHTML = "Digite seu nome";
} else {
  mensagemNome.innerHTML = "";
}
//event.preventDefault()

//campoEmail.value = "";

if (campoEmail.value.length === "") {
  mensagemEmail.innerHTML = "Digite seu email";
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
} else {
  mensagemFone.innerHTML = " ";
}

if (campoMensagem.value.length === 0) {
  mensagemMensagem.innerHTML = "Digite sua mensagem";
} else {
  mensagemMensagem.innerHTML = "";
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
    <a href = "$ {url}"> ${url}
    </a>
    </li>
    `);
    }
      
 githubRepositorios.innerHTML = nomes;
  });
