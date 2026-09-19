function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <button onclick="voltarInicio()">
            ← Voltar
        </button>

        <h2>📚 Enciclopédia BAT-LAB</h2>

        <p>
            Explore as principais áreas das Análises Clínicas.
        </p>

        <div class="categorias">

            <button class="categoria" onclick="abrirCategoria('hematologia')">
                🩸
                <strong>Hematologia</strong>
                <span>Sangue e células</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('bioquimica')">
                🧪
                <strong>Bioquímica</strong>
                <span>Exames bioquímicos</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('microbiologia')">
                🦠
                <strong>Microbiologia</strong>
                <span>Microrganismos</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('imunologia')">
                🛡️
                <strong>Imunologia</strong>
                <span>Sistema imunológico</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('parasitologia')">
                🔬
                <strong>Parasitologia</strong>
                <span>Parasitas</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('urinálise')">
                🧫
                <strong>Urinálise</strong>
                <span>Exames de urina</span>
            </button>

        </div>
    `;
}


function abrirCategoria(tipo) {

    const conteudo = document.getElementById("conteudo");

    let titulo = "";
    let descricao = "";

    if (tipo === "hematologia") {
        titulo = "🩸 Hematologia";
        descricao = "Estudo do sangue, suas células e componentes.";
    }

    if (tipo === "bioquimica") {
        titulo = "🧪 Bioquímica";
        descricao = "Estudo das substâncias químicas presentes no organismo.";
    }

    if (tipo === "microbiologia") {
        titulo = "🦠 Microbiologia";
        descricao = "Estudo dos microrganismos de importância clínica.";
    }

    if (tipo === "imunologia") {
        titulo = "🛡️ Imunologia";
        descricao = "Estudo do sistema imunológico e suas respostas.";
    }

    if (tipo === "parasitologia") {
        titulo = "🔬 Parasitologia";
        descricao = "Estudo dos parasitas relacionados às doenças humanas.";
    }

    if (tipo === "urinálise") {
        titulo = "🧫 Urinálise";
        descricao = "Estudo laboratorial da urina e seus componentes.";
    }

    conteudo.innerHTML = `
        <button onclick="abrirEnciclopedia()">
            ← Voltar para a Enciclopédia
        </button>

        <h2>${titulo}</h2>

        <p>${descricao}</p>

        <hr>

        <h3>Conteúdo</h3>

        <p>
            Os artigos desta categoria serão adicionados
            após a definição do tema do TCC.
        </p>
    `;
}


function voltarInicio() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>Bem-vindo ao BAT-LAB</h2>

        <p>
            Conhecimento laboratorial na palma da mão.
        </p>

        <p>
            Escolha uma das opções acima para começar.
        </p>
    `;
}


function abrirIA() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>🤖 Bat-IA</h2>

        <p>
            O assistente de inteligência artificial
            será conectado posteriormente.
        </p>

        <input
            type="text"
            id="pergunta"
            placeholder="Digite sua pergunta..."
        >

        <button onclick="perguntarIA()">
            Perguntar
        </button>

        <div id="resposta"></div>
    `;
}


function perguntarIA() {

    const pergunta = document.getElementById("pergunta").value;

    const resposta = document.getElementById("resposta");

    if (!pergunta) {
        resposta.innerHTML = "Digite uma pergunta.";
        return;
    }

    resposta.innerHTML = `
        <p>
            🤖 O Bat-IA ainda está sendo construído.
        </p>

        <p>
            Pergunta recebida:
            <strong>${pergunta}</strong>
        </p>
    `;
}
