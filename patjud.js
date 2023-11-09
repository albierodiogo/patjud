// ==UserScript==
// @name         PATJUD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Exibe todos os processos judiciais relacionados
// @author       albierodiogo@gmail.com
// @match        *://vip-pportalspaapr01.inss.prevnet/*
// @grant        none

// ==/UserScript==

function funcao(){
    var judiciais = document.querySelector("label[title='Totalizador de tarefas com o mesmo número do Processo']");
    judiciais.onclick = function() {
        const numeroprocesso = document.querySelector("body div[id='root'] div[class='dtp-painel-admin'] div[class='dtp-main-admin dtp-main-open'] div[class='dtp-content-admin'] main[id='tarefas-container'] div div[class='container-fluid'] div[class='dtp-panel dtp-tabs dtp-default'] div[class='dtp-panel-body'] div[class='tab-content'] div[id='tarefa'] div[class='detalhar-tarefa-container'] section[class='dtp-detalhamento-container'] div[class='dtp-grid-4'] div:nth-child(11) div:nth-child(1) div:nth-child(1) div:nth-child(2)").textContent;
        setTimeout(function() { const numeroprocesso = document.querySelector("body div[id='root'] div[class='dtp-painel-admin'] div[class='dtp-main-admin dtp-main-open'] div[class='dtp-content-admin'] main[id='tarefas-container'] div div[class='container-fluid'] div[class='dtp-panel dtp-tabs dtp-default'] div[class='dtp-panel-body'] div[class='tab-content'] div[id='tarefa'] div[class='detalhar-tarefa-container'] section[class='dtp-detalhamento-container'] div[class='dtp-grid-4'] div:nth-child(11) div:nth-child(1) div:nth-child(1) div:nth-child(2)").textContent; }, 1000);
        setTimeout(function() { document.querySelector("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > i:nth-child(1)").click(); }, 1000);
        setTimeout(function() { document.querySelector("a[role='tab'][href='#tab-interessadoProtocolo']").click(); }, 1000);
        setTimeout(function() { document.querySelector("#root > div.dtp-painel-admin > div > div.dtp-breadcrumb > a > i").click(); }, 1000);
        setTimeout(function() { document.querySelector("button[value='PROCESSO_JUDICIAL']").click(); }, 1000);
        setTimeout(function() { document.querySelector("#filtro-interessado-protocolo-processo-judicial").focus(); }, 1000);
        setTimeout(function() { document.execCommand('insertText', false, numeroprocesso); }, 1000);
        setTimeout(function() { document.querySelector("#btn-filtro-interessados-protocolo-pesquisar").click(); }, 1000);
}
}

(function() {
    'use strict';
    document.addEventListener("click", funcao);
})();
