function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>📚 Enciclopédia</h2>

        <p>
            A enciclopédia será preenchida após
            a definição do tema do TCC.
        </p>

        <p>
            Em breve teremos artigos, imagens,
            categorias e referências científicas.
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
            style="
                width: 100%;
                padding: 15px;
                margin-top: 15px;
                border-radius: 10px;
                border: 1px solid #444;
                background: #222;
                color: white;
            "
        >

        <button
            onclick="perguntarIA()"
            style="margin-top: 10px;"
        >
            Perguntar
        </button>

        <div id="resposta" style="margin-top: 20px;">
        </div>
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
