
var jsonEmissaoEstacionaria = require('./fatoresEmissao_combustaoEstacionaria.json'); //with path
var jsonEmissaoTransporte   = require('./fatoresEmissao_emissaoTransporte.json'); //with path
var jsonGeracaoEnergia      = require('./fatoresEmissao_geracaoEnergia.json'); //with path
var jsonGWP                 = require('./fatoresEmissao_potencialAquecimentoGlobal.json'); //with path

// Escopo 1 Combustão Estacionária
// Primeiro, deve carregar os dados referentes ao setor de atividade

function carregaDadosSetorAtividade(dadosSetor) {
    var energia = json
    var manufatura_construcao = json
    var comercial_institucional = json
    var residencial_agricultura_pesca = json

    if (fatorEmissaoSetor == 'Energia') {
        let dadosSetor = energia;
        return dadosSetor;
    }
    if (fatorEmissaoSetor == 'Manufatura ou Construcao') {
        let dadosSetor = manufatura_construcao;
        return dadosSetor;
    }
    if (fatorEmissaoSetor == 'Comercial ou Institucional') {
        let dadosSetor = comercial_institucional
        return dadosSetor;
    }
    if (fatorEmissaoSetor == 'Residencial, Agricultura ou Pesca') {
        let dadosSetor = residencial_agricultura_pesca
        return dadosSetor;
    }
}

// Carrega as unidades - ideal é carregar de acordo com o combustível para selecionar a unidade automaticamente
let listaUnidades = json.fatoresEmissaoCombustaoEstacionaria.fatoresEmissaoCombustiveisFosseis.unidades;

// Calcula combustivel consumido
function calculaCombustivelConsumido(entradaCombustivelUtilizado) {
    
    // Retornar um array com os dados do setor escolhido para que o os fatores de emissão do setor escolhido sejam retornados
    // com os combustíveis com os fatores CO2, CH4 e N2O
    let setorEscolhido = carregaDadosSetorAtividade();
    let percentEtanolAnual =() => {
        return percentEtanolAnual.fatoresEmissaoCombustaoEstacionaria.fatoresEmissaoCombustiveisFosseis.fatores_emissao[setorEscolhido.];
    };
    
    let percentBiodAnual =() => {
        let percentBiodlAnual = carregaDadosSetorAtividade();
        return percentBiodlAnual;
    };

    if (entradaCombustivelUtilizado == 'Gasolina Automotiva') {
         entradaQtdConsumida * (1 - percentEtanolAnual);

    } else if (entradaCombustivelUtilizado == 'Oleo Diesel') {
        entradaQtdConsumida * percentBiodAnual;

    }
    
    
}

// Calcula fator de emissão combustivel fossil CO2
function calculaFatorEmissaoCombustivelCO2() {    

    let fatorEmissaoSetor = carregaDadosSetorAtividade();
    
    if (fatorEmissaoSetor == 'Energia') {
         let calculaEmissao = () => {
             entradaQtdConsumida * (1 - percenEtanolAnual);
         } 

    } else if (entradaCombustivelUtilizado == 'Oleo Diesel') {
        entradaQtdConsumida * percentBiodAnual;

    }
    
    
}

// Calcula fator de emissão combustivel fossil CH4
function calculaFatorEmissaoCombustivelCH4() {
    
    if (entradaCombustivelUtilizado == 'Gasolina Automotiva') {
        let fatorEmissaCO2 = json.fatoresEmissaoCombustaoEstacionaria.fatoresEmissaoCombustiveisFosseis.fatores_emissao.co2_kg_tj;
 
        entradaQtdConsumida * (1 - percenEtanolAnual);

    } else if (entradaCombustivelUtilizado == 'Oleo Diesel') {
        entradaQtdConsumida * percentBiodAnual;

    }
    
    
}

// Calcula fator de emissão combustivel fossil N2O
function calculaFatorEmissaoCombustivelN2O() {
    
    if (entradaCombustivelUtilizado == 'Gasolina Automotiva') {
         entradaQtdConsumida * (1 - percenEtanolAnual);

    } else if (entradaCombustivelUtilizado == 'Oleo Diesel') {
        entradaQtdConsumida * percentBiodAnual;

    }
    
    
}

// Calcula fator de emissão biocombustivel
function calculaFatorEmissaoBiocombustivel() {
    
    if (entradaCombustivelUtilizado == 'Gasolina Automotiva') {
         entradaQtdConsumida * (1 - percentEtanolAnual);

    } else if (entradaCombustivelUtilizado == 'Oleo Diesel') {
        entradaQtdConsumida * percentBiodAnual;

    }
    
    
}

function imprimeCombustiveisFosseis() {

}

function imprimeBiocombustiveis() {

}

function imprimeEmissoesFosseisTotaistCO2e() {}

function imprimeEmissoesBiogenicastCO2() {}

// Campos apresentados no final após as tabelas
let emissoesTotaisCO2EquivalenteSIN = total_ee_localizacao_CO2_sin + total_ee_localizacao_CO2_sia + total_ee_localizacao_CO2e_outras;
let emissoesTotaisCO2BiogenicoSIA   = ;
let emissoesTotaisCO2BiogenicoOSI   =  ;

// Escopo 1 Combustão Móvel

 

// Escopo 1 Emissões Fugitivas

 

// Escopo 1 Processos Industriais

 

// Escopo 1 Atividades de Agricultura

 

// Escopo 1 Mudanças no uso do solo 

 

// Escopo 1 Resíduos Sólidos

 

// Escopo 1 Efluentes

// Campos apresentados no final após as tabelas
//let emissoesTotaisCO2EquivalenteSIN = total_ee_localizacao_CO2_sin + total_ee_localizacao_CO2_sia + total_ee_localizacao_CO2e_outras;
//let emissoesTotaisCO2BiogenicoSIA   = 
//let emissoesTotaisCO2BiogenicoOSI   =  














// Escopo 2

 

// Escopo 2

 

// Escopo 2

 

// Escopo 2

 

// Escopo 2

// Campos apresentados no final após as tabelas
//let emissoesTotaisCO2EquivalenteSIN = total_ee_localizacao_CO2_sin + total_ee_localizacao_CO2_sia + total_ee_localizacao_CO2e_outras;
//let emissoesTotaisCO2BiogenicoSIA   = 
//let emissoesTotaisCO2BiogenicoOSI   =  



// Escopo 3

 

// Escopo 3

 

// Escopo 3

 

// Escopo 3

 

// Escopo 3


// Campos apresentados no final após as tabelas
//let emissoesTotaisCO2EquivalenteSIN = total_ee_localizacao_CO2_sin + total_ee_localizacao_CO2_sia + total_ee_localizacao_CO2e_outras;
//let emissoesTotaisCO2BiogenicoSIA   = 
//let emissoesTotaisCO2BiogenicoOSI   =  


const gwpCO2 = 1; 
const gwpCH4 = 28;
const gwpN2O = 265;

const eficienciaFervedor = entradaEficienciaFervedor / 100;

let consumoCombustivel = vaporComprado / eficienciaFervedor;
let emissaoCO2 = consumoCombustivel * alcatraoArray.fator_emissao_co2 / 1000;
let emissaoCH4 = consumoCombustivel * alcatraoArray.fator_emissao_ch4 / 1000;
let emissaoN2O = consumoCombustivel * alcatraoArray.fator_emissao_n2o / 1000;
let emissoesCO2e = emissaoCO2 * gwpCO2 + emissoesCH4 * gwpCH4 + emissaoN2O * gwpN2O;

                

