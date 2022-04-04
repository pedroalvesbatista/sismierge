export const menu = [
    {id: 0, text:'Inicio', slug: '/'},
    {id: 1, text:'Escopo', slug: '/contabilizar' },
    {id: 2, text:'Coleção', slug: '/colecao'},
    {id: 3, text:'Histórico', slug: '/historico'},
    {id: 4, text:'Mensagens', slug: '/mensagem'},
    {id: 5, text:'Notificações', slug: '/notificacao'},
    {id: 6, text:'Configurações', slug: '/configuracao'},
]

export const inicial = [
    {id: 0, text:'Quero contabilizar minhas emissões', slug: '/contabilizar'},
    {id: 1, text:'Quero o meu IGEE', slug: '/igee' },
    {id: 2, text:'Indicadores', slug: '/indicadores'},
    {id: 3, text:'Verificação', slug: '/verificacao'},
]
export const escopo= [
    {id: 0, item: {
        id: 0, title: 'Escopo 1', options: [
            'Combustão estacionária',
            'Combustão móvel',
            'Emissões fugitivas',
            'Processos industriais',
            'Agricolas',
            'Mudança no uso do solo',
            'Residuos sólidos e efluentes líquidos'
        ]}
    },
    {id: 1, item: 
        {id: 1, title: 'Escopo 2', options: [
            'Compra de energia elétrica',
            'Compra de energia térmica',
            'Perdas por transmissão e distribuição',
        ]}
    },
    {id: 2, item: 
        {id: 2, title: 'Escopo 3', options: []}
    },
    {id: 3, item: 
        {id: 3, title: 'Escopo 4', options: []}
    }
]

export const table= [
    {id: 0, title: [
        'Registro da Fonte',
        'Descrição da Fonte',
        'Combustivel utilizado',
        'Eficiência do Fervedor',
        'Vapor comprado',
        'Consumo de Combustível'
    ]}
] 