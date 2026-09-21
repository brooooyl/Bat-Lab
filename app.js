const categorias = {

    hematologia: {
        titulo: "🩸 Hematologia",
        descricao: "Estudo do sangue, suas células e componentes.",
        artigos: [
            {
                nome: "Hemácias",
                imagem: "images/hemacias.jpg",
                texto: `
                    <h3>Hemácias</h3>
                    <p>
                    As hemácias, também chamadas de eritrócitos,
                    são células sanguíneas especializadas no transporte
                    de oxigênio e dióxido de carbono.
                    </p>

                    <h4>Principais características</h4>
                    <ul>
                        <li>Formato de disco bicôncavo</li>
                        <li>Não possuem núcleo na circulação periférica</li>
                        <li>Ricas em hemoglobina</li>
                        <li>Participam do transporte de gases</li>
                    </ul>
                `
            },

            {
                nome: "Leucócitos",
                texto: `
                    <h3>Leucócitos</h3>

                    <p>
                    Os leucócitos são células relacionadas principalmente
                    à defesa do organismo.
                    </p>

                    <h4>Principais tipos</h4>

                    <ul>
                        <li>Neutrófilos</li>
                        <li>Linfócitos</li>
                        <li>Monócitos</li>
                        <li>Eosinófilos</li>
                        <li>Basófilos</li>
                    </ul>
                `
            },

            {
                nome: "Plaquetas",
                texto: `
                    <h3>Plaquetas</h3>

                    <p>
                    As plaquetas são fragmentos celulares derivados
                    dos megacariócitos da medula óssea e participam
                    da hemostasia.
                    </p>

                    <h4>Funções</h4>

                    <ul>
                        <li>Formação do tampão plaquetário</li>
                        <li>Participação na coagulação</li>
                        <li>Auxílio na reparação vascular</li>
                    </ul>
                `
            },

            {
                nome: "Neutrófilos",
                texto: `
                    <h3>Neutrófilos</h3>

                    <p>
                    Os neutrófilos são leucócitos granulócitos
                    importantes na resposta imune, especialmente
                    contra agentes infecciosos.
                    </p>

                    <p>
                    Na análise microscópica apresentam núcleo
                    segmentado e grânulos citoplasmáticos.
                    </p>
                `
            }
        ]
    },


    bioquimica: {
        titulo: "🧪 Bioquímica",
        descricao: "Estudo de substâncias químicas presentes no organismo.",
        artigos: [

            {
                nome: "Glicose",
                texto: `
                    <h3>Glicose</h3>

                    <p>
                    A glicose é um dos principais substratos energéticos
                    utilizados pelas células do organismo.
                    </p>

                    <p>
                    A dosagem da glicemia é utilizada na investigação
                    e acompanhamento de alterações relacionadas ao
                    metabolismo da glicose.
                    </p>
                `
            },

            {
                nome: "Colesterol",
                texto: `
                    <h3>Colesterol</h3>

                    <p>
                    O colesterol é um lipídio essencial ao organismo,
                    participando da composição das membranas celulares
                    e da síntese de alguns hormônios e ácidos biliares.
                    </p>

                    <p>
                    Sua avaliação laboratorial geralmente faz parte
                    do perfil lipídico.
                    </p>
                `
            },

            {
                nome: "Creatinina",
                texto: `
                    <h3>Creatinina</h3>

                    <p>
                    A creatinina é um produto do metabolismo muscular
                    eliminado principalmente pelos rins.
                    </p>

                    <p>
                    Sua concentração no sangue pode ser utilizada
                    na avaliação da função renal, juntamente com
                    outros parâmetros laboratoriais.
                    </p>
                `
            }
        ]
    },


    microbiologia: {
        titulo: "🦠 Microbiologia",
        descricao: "Estudo dos microrganismos de importância clínica.",
        artigos: [

            {
                nome: "Bactérias",
                texto: `
                    <h3>Bactérias</h3>

                    <p>
                    Bactérias são organismos microscópicos unicelulares
                    que podem apresentar diferentes formas e características
                    estruturais.
                    </p>

                    <p>
                    Algumas espécies podem estar relacionadas a infecções
                    humanas e podem ser investigadas por métodos
                    microbiológicos.
                    </p>
                `
            },

            {
                nome: "Coloração de Gram",
                texto: `
                    <h3>Coloração de Gram</h3>

                    <p>
                    A coloração de Gram é uma técnica utilizada para
                    diferenciar bactérias de acordo com características
                    de sua parede celular.
                    </p>

                    <p>
                    O método permite classificá-las, de forma geral,
                    como Gram-positivas ou Gram-negativas.
                    </p>
                `
            },

            {
                nome: "Cultura microbiológica",
                texto: `
                    <h3>Cultura microbiológica</h3>

                    <p>
                    A cultura microbiológica é utilizada para permitir
                    o crescimento e posterior investigação de determinados
                    microrganismos presentes em uma amostra clínica.
                    </p>
                `
            }
        ]
    },


    imunologia: {
        titulo: "🛡️ Imunologia",
        descricao: "Estudo do sistema imunológico e suas respostas.",
        artigos: [

            {
                nome: "Antígenos",
                texto: `
                    <h3>Antígenos</h3>

                    <p>
                    Antígenos são estruturas capazes de ser reconhecidas
                    pelo sistema imunológico e podem desencadear respostas
                    imunológicas específicas.
                    </p>
                `
            },

            {
                nome: "Anticorpos",
                texto: `
                    <h3>Anticorpos</h3>

                    <p>
                    Anticorpos são proteínas produzidas por células do
                    sistema imunológico e fazem parte da resposta imune
                    adaptativa.
                    </p>

                    <p>
                    Também são chamados de imunoglobulinas.
                    </p>
                `
            },

            {
                nome: "Imunoglobulinas",
                texto: `
                    <h3>Imunoglobulinas</h3>

                    <p>
                    As imunoglobulinas são proteínas envolvidas no
                    reconhecimento e resposta a diferentes antígenos.
                    </p>

                    <ul>
                        <li>IgG</li>
                        <li>IgM</li>
                        <li>IgA</li>
                        <li>IgE</li>
                        <li>IgD</li>
                    </ul>
                `
            }
        ]
    },


    parasitologia: {
        titulo: "🪱 Parasitologia",
        descricao: "Estudo dos parasitas relacionados às doenças humanas.",
        artigos: [

            {
                nome: "Protozoários",
                texto: `
                    <h3>Protozoários</h3>

                    <p>
                    Protozoários são organismos eucarióticos unicelulares.
                    Algumas espécies podem atuar como agentes causadores
                    de doenças em seres humanos.
                    </p>
                `
            },

            {
                nome: "Helmintos",
                texto: `
                    <h3>Helmintos</h3>

                    <p>
                    Helmintos são organismos parasitas conhecidos
                    popularmente como vermes.
                    </p>

                    <p>
                    O diagnóstico laboratorial pode envolver a pesquisa
                    de ovos, larvas ou outras estruturas parasitárias
                    em amostras biológicas.
                    </p>
                `
            },

            {
                nome: "Exame parasitológico de fezes",
                texto: `
                    <h3>Exame parasitológico de fezes</h3>

                    <p>
                    O exame parasitológico de fezes é utilizado para
                    investigar a presença de estruturas relacionadas
                    a parasitas intestinais.
                    </p>
                `
            }
        ]
    },


    urinanalise: {
        titulo: "🧫 Urinálise",
        descricao: "Estudo laboratorial da urina e seus componentes.",
        artigos: [

            {
                nome: "Urina",
                texto: `
                    <h3>Urina</h3>

                    <p>
                    A urina é um fluido produzido pelos rins que participa
                    da eliminação de produtos do metabolismo e da regulação
                    do equilíbrio interno do organismo.
                    </p>
                `
            },

            {
                nome: "EAS",
                texto: `
                    <h3>EAS — Elementos Anormais do Sedimento</h3>

                    <p>
                    O exame de urina pode envolver avaliações físicas,
                    químicas e microscópicas da amostra.
                    </p>

                    <p>
                    Entre os parâmetros avaliados podem estar aspecto,
                    cor, pH, densidade, proteínas, glicose e elementos
                    do sedimento urinário.
                    </p>
                `
            },

            {
                nome: "Sedimento urinário",
                texto: `
                    <h3>Sedimento urinário</h3>

                    <p>
                    A análise microscópica do sedimento urinário pode
                    permitir a observação de diferentes elementos,
                    como células, cristais e cilindros.
                    </p>
                `
            }
        ]
    }
};


function abrirEnciclopedia() {

    const conteudo = document.getElementById("conteudo");

    let html = `
        <button onclick="voltarInicio()">← Voltar</button>

        <h2>📚 Enciclopédia BAT-LAB</h2>

        <p>
            Explore os principais campos das Análises Clínicas.
        </p>

        <input
            type="text"
            id="busca"
            placeholder="🔎 Buscar conteúdo..."
            oninput="buscarArtigos()"
        >

        <div id="resultadoBusca"></div>

        <div class="categorias">
    `;

    for (const chave in categorias) {

        const categoria = categorias[chave];

        html += `
            <button
                class="categoria"
                onclick="abrirCategoria('${chave}')"
            >

                <strong>${categoria.titulo}</strong>

                <span>
                    ${categoria.descricao}
                </span>

            </button>
        `;
    }

    html += `
        </div>
    `;

    conteudo.innerHTML = html;
}


function abrirCategoria(chave) {

    const conteudo = document.getElementById("conteudo");

    const categoria = categorias[chave];

    if (!categoria) {
        conteudo.innerHTML = "<p>Categoria não encontrada.</p>";
        return;
    }

    let html = `
        <button onclick="abrirEnciclopedia()">
            ← Voltar para Enciclopédia
        </button>

        <h2>${categoria.titulo}</h2>

        <p>${categoria.descricao}</p>

        <hr>

        <h3>📖 Conteúdos</h3>

        <div class="artigos">
    `;

    categoria.artigos.forEach((artigo, indice) => {

        html += `
            <button
                class="artigo"
                onclick="abrirArtigo('${chave}', ${indice})"
            >

                📄

                <strong>${artigo.nome}</strong>

            </button>
        `;

    });

    html += `
        </div>
    `;

    conteudo.innerHTML = html;
}


function abrirArtigo(categoriaChave, indice) {

    const conteudo = document.getElementById("conteudo");

    const categoria = categorias[categoriaChave];
    const artigo = categoria.artigos[indice];

    conteudo.innerHTML = `

        <button onclick="abrirCategoria('${categoriaChave}')">
            ← Voltar
        </button>

        <article class="artigo-completo">

            <div class="artigo-cabecalho">

                <span class="artigo-categoria">
                    ${categoria.titulo}
                </span>

                <h2>${artigo.nome}</h2>

                <p class="artigo-introducao">
                    Conteúdo educacional de Análises Clínicas.
                </p>

            </div>


            <section class="ficha-secao">

                <h3>🔬 Visão geral</h3>

                ${artigo.texto}

            </section>


            <section class="ficha-secao">

                <h3>🧪 Importância laboratorial</h3>

                <p>
                    A avaliação deste elemento faz parte do estudo
                    laboratorial e pode contribuir para a interpretação
                    de diferentes parâmetros biológicos.
                </p>

                <p>
                    A análise deve sempre considerar o conjunto dos
                    resultados laboratoriais, as características da
                    amostra e o contexto clínico.
                </p>

            </section>


            <section class="ficha-secao curiosidade">

                <h3>🧠 Curiosidade científica</h3>

                <p>
                    O organismo humano possui diferentes tipos de células
                    e estruturas especializadas, cada uma desempenhando
                    funções específicas para a manutenção do equilíbrio
                    do organismo.
                </p>

            </section>


            <section class="ficha-secao">

                <h3>📚 Referências</h3>

                <p class="referencia-aviso">
                    As referências científicas específicas deste conteúdo
                    serão inseridas na versão acadêmica final do projeto,
                    de acordo com as normas solicitadas pela instituição.
                </p>

            </section>


            <section class="bat-ia-card">

                <div class="bat-ia-icone">
                    🤖
                </div>

                <div>

                    <h3>Perguntar ao Bat-IA</h3>

                    <p>
                        Tire dúvidas sobre este conteúdo com o
                        assistente inteligente do BAT-LAB.
                    </p>

                    <button onclick="abrirIA()">
                        Perguntar ao Bat-IA →
                    </button>

                </div>

            </section>

        </article>
    `;
}

function buscarArtigos() {

    const busca = document
        .getElementById("busca")
        .value
        .toLowerCase();

    const resultado = document.getElementById("resultadoBusca");

    if (!busca) {
        resultado.innerHTML = "";
        return;
    }

    let encontrados = [];

    for (const chave in categorias) {

        const categoria = categorias[chave];

        categoria.artigos.forEach((artigo, indice) => {

            if (
                artigo.nome.toLowerCase().includes(busca) ||
                categoria.titulo.toLowerCase().includes(busca)
            ) {

                encontrados.push({
                    categoria: chave,
                    indice: indice,
                    nome: artigo.nome
                });

            }

        });

    }

    if (encontrados.length === 0) {

        resultado.innerHTML = `
            <p>
                Nenhum conteúdo encontrado.
            </p>
        `;

        return;
    }

    resultado.innerHTML = `
        <h3>🔎 Resultados</h3>

        ${encontrados.map(item => `

            <button
                class="artigo"
                onclick="abrirArtigo('${item.categoria}', ${item.indice})"
            >
                📄 ${item.nome}
            </button>

        `).join("")}
    `;
}


function voltarInicio() {

    location.reload();

}


function abrirIA() {

    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <button onclick="voltarInicio()">
            ← Voltar
        </button>

        <h2>🤖 Bat-IA</h2>

        <p>
            O assistente inteligente do BAT-LAB.
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

    const pergunta =
        document.getElementById("pergunta").value;

    const resposta =
        document.getElementById("resposta");

    if (!pergunta) {

        resposta.innerHTML =
            "<p>Digite uma pergunta.</p>";

        return;
    }

    resposta.innerHTML = `

        <p>🤖 Bat-IA</p>

        <p>
            Pergunta recebida:
            <strong>${pergunta}</strong>
        </p>

        <p>
            A inteligência artificial será conectada
            ao sistema em uma próxima etapa.
        </p>
    `;
}
