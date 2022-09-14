/* ------{ Declara variaveis }------ */

const mainDiv = document.querySelector('#mainDiv');
const accordionVerTodasVersoesBtn = document.querySelector('#accordionVerTodasVersoesBtn');
const accordionTodasVersoes = document.querySelector('#accordionTodasVersoes');
const todasVersoesTBody = document.querySelector('#todasVersoesTBody');
const mainDownloadBtn = document.querySelector('#mainDownloadBtn');



/* ------{ Declara funcoes }------ */

// Alimenta a tabela que mostra todas as versões do programa
function feedTodasVersoesTBody () {
    for(const d of data) {
        todasVersoesTBody.innerHTML += `<tr><td>${d.version}</td><td><a href="${filesPath+d.fileName}" download="${d.fileName}" class="link-download">Baixar <i class="bi bi-download"></i></a></td><td>${dateFormater(d.uploadDate)}</td></tr>`;
    }
}

// Alimenta o botão principal de download com o caminho da versão mais recente do programa
function feedDownload() {
    mainDownloadBtn.setAttribute('href', filesPath+data[0].fileName);
    mainDownloadBtn.setAttribute('download', data[0].fileName);
}



/* ------{ Executa funcoes }------ */

if(data.length <= 1) {
    accordionTodasVersoes.classList.add('d-none');
} else {
    feedTodasVersoesTBody();
}

feedDownload();