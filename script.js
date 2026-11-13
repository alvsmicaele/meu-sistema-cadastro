function irParaCadastro() {
    window.location.href = "cadastro.html";
}

function irParaUsuarios() {
    window.location.href = "usuarios.html";
}

function voltar() {
    window.location.href = "index.html";
}


function cadastrar() {

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    let novoUsuario = {
        nome: nome,
        email: email
    };

        usuarios.push(novoUsuario);

    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");

    
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    
    window.location.href = "usuarios.html";
}



function listarUsuarios() {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let lista = document.getElementById("lista-usuarios");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    if (usuarios.length === 0) {
        lista.textContent = "Nenhum usuário cadastrado.";
        return;
    }

    usuarios.forEach(function(usuario, indice) {

        let item = document.createElement("div");

        item.className = "usuario-item";

        let nome = document.createElement("h3");
        nome.textContent = usuario.nome;

        let email = document.createElement("p");
        email.textContent = usuario.email;

        let numero = document.createElement("small");
        numero.textContent = "Usuário " + (indice + 1);

        
        let botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "btn-excluir";

        botaoExcluir.addEventListener("click", function() {
            excluirUsuario(indice);
        });

        
        item.appendChild(numero);
        item.appendChild(nome);
        item.appendChild(email);
        item.appendChild(botaoExcluir);

        lista.appendChild(item);

    });

}

function excluirUsuario(indice) {

    let confirmar = confirm(
        "Tem certeza que deseja excluir este usuário?"
    );

    if (!confirmar) {
        return;
    }

    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    usuarios.splice(indice, 1);

    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário excluído com sucesso!");

    
    listarUsuarios();

}

listarUsuarios();
