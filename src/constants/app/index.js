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
    {
        id: 0, 
        item: {
            id: 0, 
            title: 'Escopo 1', 
            options: [
                {
                    id: 1,
                    name: {
                        title: 'Combustão estacionária',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 2,
                    name: {
                        title: 'Combustão móvel',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 3,
                    name: {
                        title: 'Emissões fugitivas',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 4,
                    name: {
                        title: 'Processos industriais',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 5,
                    name: {
                        title: 'Agricolas',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 6,
                    name: {
                        title: 'Mudança no uso do solo',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
                {
                    id: 7,
                    name: {
                        title: 'Residuos sólidos e efluentes líquidos',
                        table: [ ]
                    }, 
                    options: [],
                    otherOptions: [],

                },
            ]
        }
    },
    
    {
        id: 1, 
        item: {
            id: 1, 
            title: 'Escopo 2', 
            options: [
                {
                    id: 1,
                    name: {
                        title: 'Eletricidade (localização)',
                        table: [ 
                            {name: 'Registro da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Descrição da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Combustível utilizado', valor: ['', '', ''], index: ''},
                            {name: 'Eficiência do fervedor', valor: ['', '', ''], index: ''},
                            {name: 'Vapor comprado', valor: ['', '', ''], index: ''},
                            {name: 'Consumo de combustível (GJ)', valor: ['', '', ''], index: ''}
                            // 'Emissões de CO2 biogenico(t)'
                        ]
                    },
                    data: [],
                    options: [
                        'Vou incluir os consumos de energia elétrica mensalmente',
                        'Vou incluir os consumos de energia elétrica anualmente',
                        'Quero anexar minha fatura de energia elétrica para que sejam extraídas todas as informações necessárias do documento',
                        'Vou relatar o consumo de energia elétrica em MWh ou KWh'
                    ],
                    otherOptions: [
                        'Sistema Interligado Nacional (SIN)',
                        'Sistema Isolado do Amazonas',
                        'Outros sistemas isolados'
                    ]
                },
                {
                    id: 2,
                    name: {
                        title: 'Perdas por distribuição e transmissão (localização)',
                        table: [ 
                            {name: 'Registro da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Descrição da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Combustível utilizado', valor: ['', '', ''], index: ''},
                            {name: 'Eficiência do fervedor', valor: ['', '', ''], index: ''},
                            {name: 'Vapor comprado', valor: ['', '', ''], index: ''},
                            {name: 'Consumo de combustível (GJ)', valor: ['', '', ''], index: ''}
                            // 'Emissões de CO2 biogenico(t)'
                        ]
                    },
                    options: [
                        'Sistema interligado Nacional(SIN)',
                        'Sistema isolado do Amazonas',
                        'Outros sistemas isolados'
                    ],
                    data: [],
                    otherOptions: [
                        
                    ]
                },
                {
                    id: 3,
                    name: {
                        title: 'Compra de energia térmica',
                        table: [ 
                            {name: 'Registro da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Descrição da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Combustível utilizado', valor: ['', '', ''], index: ''},
                            {name: 'Eficiência do fervedor', valor: ['', '', ''], index: ''},
                            {name: 'Vapor comprado', valor: ['', '', ''], index: ''},
                            {name: 'Consumo de combustível (GJ)', valor: ['', '', ''], index: ''}
                            // 'Emissões de CO2 biogenico(t)'
                        ]
                    },
                    options: [
                        ''
                    ],
                    data: [],
                    otherOptions: [
                        
                    ]
                },
                {
                    id: 4,
                    name: {
                        title: 'Eletricidade(escolha de compra)',
                        table: [ 
                            {name: 'Registro da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Descrição da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Combustível utilizado', valor: ['', '', ''], index: ''},
                            {name: 'Eficiência do fervedor', valor: ['', '', ''], index: ''},
                            {name: 'Vapor comprado', valor: ['', '', ''], index: ''},
                            {name: 'Consumo de combustível (GJ)', valor: ['', '', ''], index: ''}
                            // 'Emissões de CO2 biogenico(t)'
                        ]
                    },
                    options: [
                        ''
                    ],
                    data: [],
                    otherOptions: [
                        
                    ]
                },
                {
                    id: 5,
                    name: {
                        title: 'Perdas por distribuição e transmissão (escolha de compra)',
                        table: [ 
                            {name: 'Registro da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Descrição da fonte', valor: ['', '', ''], index: ''},
                            {name: 'Combustível utilizado', valor: ['', '', ''], index: ''},
                            {name: 'Eficiência do fervedor', valor: ['', '', ''], index: ''},
                            {name: 'Vapor comprado', valor: ['', '', ''], index: ''},
                            {name: 'Consumo de combustível (GJ)', valor: ['', '', ''], index: ''}
                            // 'Emissões de CO2 biogenico(t)'
                        ]
                    },
                    data: [],
                    options: [
                        ''
                    ],
                    otherOptions: [
                        
                    ]
                },
            ]
        },
    },
    {id: 2, item: 
        {id: 2, title: 'Escopo 3', options: []}
    },
]

export const table= [
    {   id: 0, 
        name: '',
        title: [
            'Registro da Fonte',
            'Descrição da Fonte',
            'Combustivel utilizado',
            'Eficiência do Fervedor',
            'Vapor comprado',
            'Consumo de Combustível'
        ]
    },
] 

// table: [ 
//     {name: 'Registro da fonte', valor: ['', '', '']},
//     {name: 'Descrição da fonte', valor: ['', '', '']},
//     {name: 'Combustível utilizado', valor: ['', '', '']},
//     {name: 'Eficiência do fervedor', valor: ['', '', '']},
//     {name: 'Vapor comprado', valor: ['', '', '']},
//     {name: 'Consumo de combustível (GJ)', valor: ['', '', '']}
//     // 'Emissões de CO2 biogenico(t)'
// ]