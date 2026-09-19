function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>📚 Enciclopédia BAT-LAB</h2>

        <p>
            Explore as principais áreas das Análises Clínicas.
        </p>

        <div class="categorias">

            <button class="categoria" onclick="abrirCategoria('hematologia')">
                <span class="icone-categoria">🩸</span>
                <strong>Hematologia</strong>
                <span>Sangue e células</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('bioquimica')">
                <span class="icone-categoria">🧪</span>
                <strong>Bioquímica</strong>
                <span>Exames bioquímicos</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('microbiologia')">
                <span class="icone-categoria">🦠</span>
                <strong>Microbiologia</strong>
                <span>Microrganismos</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('imunologia')">
                <span class="icone-categoria">🧬</span>
                <strong>Imunologia</strong>
                <span>Sistema imunológico</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('parasitologia')">
                <span class="icone-categoria">🪱</span>
                <strong>Parasitologia</strong>
                <span>Parasitas</span>
            </button>

            <button class="categoria" onclick="abrirCategoria('urinalise')">
                <span class="icone-categoria">🧫</span>
                <strong>Urinálise</strong>
                <span>Exames de urina</span>
            </button>

        </div>
    `;
}


function abrirCategoria(categoria) {

    const conteudo = document.getElementById("conteudo");

    let titulo = "";
    let descricao = "";

    if (categoria === "hematologia") {
        titulo = "🩸 Hematologia";
        descricao = "Estudo do sangue, suas células e componentes.";
    }

    if (categoria === "bioquimica") {
        titulo = "🧪 Bioquímica";
        descricao = "Estudo das substâncias químicas presentes no organismo.";
    }

    if (categoria === "microbiologia") {
        titulo = "🦠 Microbiologia";
        descricao = "Estudo dos microrganismos de importância clínica.";
    }

    if (categoria === "imunologia") {
        titulo = "🧬 Imunologia";
        descricao = "Estudo do sistema imunológico e suas respostas.";
    }

    if (categoria === "parasitologia") {
        titulo = "🪱 Parasitologia";
        descricao = "Estudo dos parasitas relacionados às doenças humanas.";
    }

    if (categoria === "urinalise") {
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

        <button
            onclick="perguntarIA()"
        >
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
