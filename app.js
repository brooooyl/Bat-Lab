function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>📚 Enciclopédia BAT-LAB</h2>

        <p>
            Explore conhecimentos de Análises Clínicas.
        </p>

        <div class="card-enciclopedia">
            <h3>🩸 Hematologia</h3>
            <p>Estudo dos elementos celulares e componentes do sangue.</p>
            <button onclick="abrirHematologia()">
                Explorar
            </button>
        </div>

        <div class="card-enciclopedia">
            <h3>🧪 Bioquímica</h3>
            <p>Estudo das substâncias e reações químicas do organismo.</p>
            <button>
                Em construção
            </button>
        </div>

        <div class="card-enciclopedia">
            <h3>🦠 Microbiologia</h3>
            <p>Estudo dos microrganismos de importância clínica.</p>
            <button>
                Em construção
            </button>
        </div>

        <div class="card-enciclopedia">
            <h3>🧬 Imunologia</h3>
            <p>Estudo do sistema imunológico e suas respostas.</p>
            <button>
                Em construção
            </button>
        </div>
    `;
}


function abrirHematologia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `
        <h2>🩸 Hematologia</h2>

        <p>
            A Hematologia é a área das Análises Clínicas
            dedicada ao estudo do sangue, seus elementos
            celulares e componentes.
        </p>

        <div class="card-enciclopedia">
            <h3>🔬 Neutrófilo</h3>

            <p>
                Leucócito pertencente ao grupo dos granulócitos,
                relacionado principalmente à resposta imunológica
                contra agentes infecciosos.
            </p>

            <button onclick="abrirEnciclopedia()">
                ← Voltar
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

        <div class="bem-vindo">

            <div class="bat-symbol">
                🤖
            </div>

            <h2>Bat-IA</h2>

            <p>
                Assistente educacional do BAT-LAB.
                Faça uma pergunta sobre Análises Clínicas.
            </p>

        </div>


        <div style="
            margin-top: 25px;
        ">

            <input
                type="text"
                id="pergunta"
                placeholder="Ex.: O que é um neutrófilo?"
                style="
                    width: 100%;
                    padding: 16px;
                    border-radius: 14px;
                    border: 1px solid #38383f;
                    background: #0e0e12;
                    color: white;
                    font-size: 1rem;
                    outline: none;
                "
                onkeydown="if(event.key === 'Enter') perguntarIA()"
            >

            <button
                onclick="perguntarIA()"
                style="
                    width: 100%;
                    margin-top: 12px;
                    min-height: 65px;
                "
            >
                🦇 Perguntar ao Bat-IA
            </button>

        </div>


        <div
            id="resposta"
            style="
                margin-top: 25px;
                padding: 20px;
                border-radius: 16px;
                border: 1px solid #303038;
                background: #101014;
                display: none;
            "
        >
        </div>


        <button
            onclick="voltarInicio()"
            style="
                margin-top: 20px;
                min-height: 60px;
            "
        >
            ← Voltar
        </button>

    `;
}


// ==========================================
// RESPOSTA TEMPORÁRIA DA IA
// ==========================================

function perguntarIA() {

    const campo = document.getElementById("pergunta");

    const resposta = document.getElementById("resposta");

    if (!campo || !resposta) {
        return;
    }

    const pergunta = campo.value.trim();

    if (pergunta === "") {

        resposta.style.display = "block";

        resposta.innerHTML = `
            <p>
                ⚠️ Digite uma pergunta primeiro.
            </p>
        `;

        return;
    }


    resposta.style.display = "block";

    resposta.innerHTML = `

        <strong>🤖 Bat-IA</strong>

        <p style="margin-top: 12px;">

            Pergunta recebida:

            <br><br>

            <strong>
                "${pergunta}"
            </strong>

        </p>

        <p>

            🧠 O núcleo de inteligência artificial
            será conectado em uma próxima etapa.

        </p>

        <span class="status">
            ● Sistema operacional
        </span>

    `;
}


// ==========================================
// VOLTAR
// ==========================================

function voltarInicio() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <div class="bem-vindo">

            <div class="bat-symbol">
                🦇
            </div>

            <h2>Bem-vindo ao BAT-LAB</h2>

            <p>
                Conhecimento laboratorial na palma da mão.
            </p>

            <span class="status">
                ● BAT-LAB online
            </span>

        </div>

    `;
}
