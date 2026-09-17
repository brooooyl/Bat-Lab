// ==========================================
// BAT-LAB — SISTEMA PRINCIPAL
// ==========================================


// ==========================================
// ENCICLOPÉDIA
// ==========================================

function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <div class="bem-vindo">

            <div class="bat-symbol">📚</div>

            <h2>Enciclopédia BAT-LAB</h2>

            <p>
                Explore o conhecimento das Análises Clínicas
                organizado por áreas laboratoriais.
            </p>

        </div>

        <div class="categorias">

            <button onclick="abrirCategoria('hematologia')">
                🩸 Hematologia
            </button>

            <button onclick="abrirCategoria('bioquimica')">
                🧪 Bioquímica
            </button>

            <button onclick="abrirCategoria('microbiologia')">
                🦠 Microbiologia
            </button>

            <button onclick="abrirCategoria('parasitologia')">
                🪱 Parasitologia
            </button>

            <button onclick="abrirCategoria('imunologia')">
                🛡️ Imunologia
            </button>

            <button onclick="abrirCategoria('urinanalise')">
                💧 Urinálise
            </button>

        </div>

        <button onclick="voltarInicio()">
            ← Voltar
        </button>
    `;
}


// ==========================================
// CATEGORIAS
// ==========================================

function abrirCategoria(categoria) {

    const conteudo = document.getElementById("conteudo");

    const nomes = {

        hematologia: "🩸 Hematologia",

        bioquimica: "🧪 Bioquímica",

        microbiologia: "🦠 Microbiologia",

        parasitologia: "🪱 Parasitologia",

        imunologia: "🛡️ Imunologia",

        urinanalise: "💧 Urinálise"

    };

    conteudo.innerHTML = `

        <div class="bem-vindo">

            <div class="bat-symbol">
                🔬
            </div>

            <h2>${nomes[categoria]}</h2>

            <p>
                Esta seção será preenchida com conteúdos,
                imagens, conceitos, procedimentos e
                referências científicas.
            </p>

            <span class="status">
                ● Módulo preparado
            </span>

        </div>

        <button onclick="abrirEnciclopedia()">
            ← Voltar para categorias
        </button>

    `;
}


// ==========================================
// BAT-IA
// ==========================================

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
