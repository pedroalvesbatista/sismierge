const storage= JSON.parse(localStorage.getItem("@sismiegee/auth"))

export const initialData = {
    informacoes_nstiucionais: null,
    motivo: null,
    verificacao_terceiros: null,
    limite_organizacionais: null,
    abordagem_consolidacao: null,
    funcionario: null,
    producao_total_ano: [],
    meta_reducao: null,
    desc_indicadores_emissao_gee: null,
    descricao_estrategias_gestao_emissoes_gee: null,
    informacoes_contratos_clientes: null,
    informacoes_incertezas: null,
    descricao_acoes_internas: null,
    informacoes_compra_energia_eletrica: null,
    info_autoprod_renovavel: null,
    info_estoque_carb_ton: null,
    compensacao_emissoes: null,
    organizacao_comp_emissoes: null,
    reducoes_emissoes: null,
    organizacao_proj_red_emissoes: null,
    users_permissions_users: [storage.user.id],
    company: null,
    ano: null
}

export const initialProduct = [{
    name: null,
    quantidade: null,
    unidade: null,
    index: 0
}]

export const initialMetaReducao = [{
    type: null,
    intensidade: null,
    absoluta: null,
    index: 0
}]