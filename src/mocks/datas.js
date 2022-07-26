export const comb_esta = (data) => {
  return {
    id: 1093763195,
    index_escopo: 1,
    title: data[0][0],
    setor_atividade: data[4][2],
    data_select: [
      {
        title: "Setor de atividade", 
        data: ["Energia", "Manufatura ou Construção", "Comercial ou Institucional", "Residencial, Agricultura, Florestal ou Pesca"]
      }
    ],
    data: [
      {
        title: "Combustão estacionária",
        tables: [
          {
            title: "Fontes estacionárias de combustão",
            range: "Combustão estacionária!A11:D11",
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[7][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[7][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[7][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[7][3], data: data[10][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                items: [{id: 5, label: data[7][4], data: data[10][4]}],
                type: "result",
                header: false
              },
              {
                id: 6,
                header: data[7][5],
                type: "result",
                items: [{ label: "Combustível Fóssil", type: "result", data: data[10][5] }, { label: "Blocombustível", type: "result", data: data[10][6] }]
              },
              {
                id: 7,
                header: data[7][7],
                type: "result",
                items: [{ label: "Combustível Fóssil", type: "result", data: data[10][7] }, { label: "Blocombustível", type: "result", data: data[10][8] }]
              },
              {
                id: 8,
                header: data[7][9],
                type: "result",
                items: [{ label: "CO²(kg/un)", type: "result", data: data[10][9] }, { label: "CH4(kg/un)", type: "result", data: data[10][10] }, { label: "N2O(kg/un)", type: "result", data: data[10][11] }]
              },
              {
                id: 9,
                header: data[7][12],
                type: "result",
                items: [{ label: "CO²(kg/un)", type: "result", data: data[10][12] }, { label: "CH4(kg/un)", type: "result", data: data[10][13] }, { label: "N2O(kg/un)", type: "result", data: data[10][14] }]
              },
              { 
                id: 10,
                header: data[7][15],
                type: "result",
                items: [{ label: "Emissões CO2(t)", type: "result", data: data[10][15] }, { label: "Emissões CH4(t)", type: "result", data: data[10][16] }, { label: "Emissões N2O(t)", type: "result", data: data[10][17] }]
              },
              {
                id: 11,
                header: data[7][18],
                type: "result",
                items: [{ label: "Emissões CO2(t)", type: "result", data: data[10][18] }, { label: "Emissões CH4(t)", type: "result", data: data[10][19] }, { label: "Emissões N2O(t)", type: "result", data: data[10][20] }]
              },
              {
                id: 12,
                items:  [{label: data[7][21], data: data[10][21]}],
                type: "result",
                header: false
              },
              {
                id: 13,
                items: [{label: data[7][22], data: data[10][22]}],
                type: "result",
                header: false
              }
            ]
          }
        ]
      }
    ]
  }
}

export const comb_movel = (data) => {
  return {
    id: 5208192,
    index_escopo: 1,
    title: data[0][0],
    data_select: [
      {
        title: "Escolha um tipo de relato", 
        data: ["Anual", "Mensal"]
      }
    ],
    data: [
      {
        title_select: "Cálculo de emissões",
        data_select: [
          {
            title: "Escolha um tipo de relato", 
            data: ["Anual", "Mensal"]
          }
        ],
        title: data[1][0],
        tables: [
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 2,
            title: "Cálculo de emissões por tipo de combustível no ano",
            range: "Combustão móvel!A12:Q12",
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[8][0], data: data[11][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[8][1], data: data[11][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[8][2], data: data[11][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][15] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][3] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][4] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][5] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][6] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][7] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][8] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][9] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][10] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][11] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][12] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][13] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][14] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[11][16]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[11][17] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[11][18] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][31] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][19] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][20] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][21] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][22] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][23] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][24] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][25] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][26] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][27] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][28] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][29] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][30] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[11][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[11][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[11][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[11][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[11][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[11][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[11][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
        ]
      },
      {
        title_select: "Cálculo de emissões",
        data_select: [
          {
            title: "Escolha um tipo de relato", 
            data: ["Anual", "Mensal"]
          }
        ],
        title: data[19][0],
        tables: [
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 2,
            title: "Cálculo de emissões por tipo de combustível no ano",
            range: "Combustão móvel!A12:Q12",
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[8][0], data: data[11][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[8][1], data: data[11][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[8][2], data: data[11][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][15] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][3] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][4] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][5] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][6] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][7] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][8] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][9] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][10] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][11] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][12] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][13] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][14] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[11][16]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[11][17] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[11][18] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][31] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][19] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][20] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][21] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][22] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][23] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][24] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][25] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][26] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][27] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][28] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][29] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][30] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[11][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[11][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[11][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[11][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[11][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[11][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[11][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
        ]
      },
      {
        title_select: "Cálculo de emissões",
        data_select: [
          {
            title: "Escolha um tipo de relato", 
            data: ["Anual", "Mensal"]
          }
        ],
        title: data[26][0],
        tables: [
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 2,
            title: "Cálculo de emissões por tipo de combustível no ano",
            range: "Combustão móvel!A12:Q12",
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[8][0], data: data[11][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[8][1], data: data[11][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[8][2], data: data[11][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][15] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][3] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][4] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][5] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][6] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][7] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][8] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][9] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][10] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][11] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][12] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][13] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][14] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[11][16]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[11][17] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[11][18] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][31] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][19] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][20] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][21] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][22] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][23] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][24] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][25] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][26] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][27] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][28] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][29] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][30] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[11][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[11][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[11][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[11][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[11][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[11][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[11][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
        ]
      },
      {
        title_select: "Cálculo de emissões",
        data_select: [
          {
            title: "Escolha um tipo de relato", 
            data: ["Anual", "Mensal"]
          }
        ],
        title: data[33][0],
        tables: [
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 2,
            title: "Cálculo de emissões por tipo de combustível no ano",
            range: "Combustão móvel!A12:Q12",
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[8][0], data: data[11][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[8][1], data: data[11][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[8][2], data: data[11][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][15] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][3] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][4] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][5] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][6] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][7] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][8] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][9] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][10] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][11] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][12] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][13] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][14] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[11][16]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[11][17] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[11][18] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[11][31] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[11][19] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[11][20] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[11][21] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[11][22] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[11][23] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[11][24] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[11][25] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[11][26] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[11][27] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[11][28] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[11][29] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[11][30] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[11][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[11][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[11][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[11][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[11][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[11][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[11][54] 
                  } 
                ]
              },       
            ]
          },
          {
            id: 1,
            title: "Cálculo de emissões por tipo e ano de fabricação da frota de veículos no ano",
            range: "Combustão móvel!A6:Q6",
            data_select: [
              {
                title: "Escolha um tipo de relato", 
                data: ["Anual", "Mensal"]
              }
            ],
            items: [
              {
                id: 1,
                items: [{id: 1, label: data[2][0], data: data[10][0]}],
                type: "entry",
                header: false
              },
              {
                id: 2,
                items: [{id: 2, label: data[2][1], data: data[10][1]}],
                type: "entry",
                header: false
              },
              {
                id: 3,
                items: [{id: 3, label: data[2][2], data: data[10][2]}],
                type: "entry",
                header: false
              },
              {
                id: 4,
                items: [{id: 4, label: data[2][3], data: data[6][3]}] ,
                type: "entry",
                header: false
              },
              {
                id: 5,
                header: data[3][4],
                type: "result",
                title: "Tipo de relato",
                items: [
                  { 
                    label: data[3][16], 
                    type: "entry", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "entry", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "entry", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "entry", 
                    data: data[6][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "entry", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "entry", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "entry", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "entry", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "entry", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "entry", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "entry", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "entry", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "entry", 
                    data: data[5][15] 
                  },  
                ]
              },
              {
                id: 6,
                items: [{label: data[2][17], data: data[5][17]}] ,
                type: "result",
                header: false
              },
              {
                id: 7,
                header: data[2][18],
                type: "result",
                items: [
                  { 
                    label: data[4][18], 
                    type: "result", 
                    data: data[5][18] 
                  }, 
                  { 
                    label: data[4][19], 
                    type: "result", 
                    data: data[5][19] 
                  }  
                ]
              },
              {
                id: 8,
                header: data[3][20],
                type: "result",
                title: data[2][20],
                items: [
                  { 
                    label: data[3][16], 
                    type: "result", 
                    data: data[5][16] 
                  }, 
                  { 
                    label: data[4][4], 
                    type: "result", 
                    data: data[5][4] 
                  },
                  { 
                    label: data[4][5], 
                    type: "result", 
                    data: data[5][5] 
                  },
                  { 
                    label: data[4][6], 
                    type: "result", 
                    data: data[5][6] 
                  },
                  { 
                    label: data[4][7], 
                    type: "result", 
                    data: data[5][7] 
                  },
                  { 
                    label: data[4][8], 
                    type: "result", 
                    data: data[5][8] 
                  },
                  { 
                    label: data[4][9], 
                    type: "result", 
                    data: data[5][9] 
                  },
                  { 
                    label: data[4][10], 
                    type: "result", 
                    data: data[5][10] 
                  },
                  { 
                    label: data[4][11], 
                    type: "result", 
                    data: data[5][11] 
                  },
                  { 
                    label: data[4][12], 
                    type: "result", 
                    data: data[5][12] 
                  },
                  { 
                    label: data[4][13], 
                    type: "result", 
                    data: data[5][13] 
                  },
                  { 
                    label: data[4][14], 
                    type: "result", 
                    data: data[5][14] 
                  },
                  { 
                    label: data[4][15], 
                    type: "result", 
                    data: data[5][15] 
                  },  
                ]
              }, 
              {
                id: 9,
                header: data[2][46],
                type: "result",
                items: [
                  { 
                    label: data[4][46], 
                    type: "result", 
                    data: data[5][46] 
                  } 
                ]
              }, 
              {
                id: 10,
                header: data[2][47],
                type: "result",
                items: [
                  { 
                    label: data[4][47], 
                    type: "result", 
                    data: data[5][47] 
                  } 
                ]
              }, 
              {
                id: 11,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][50], 
                    type: "result", 
                    data: data[5][50] 
                  } 
                ]
              },
              {
                id: 12,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][51], 
                    type: "result", 
                    data: data[5][51] 
                  } 
                ]
              },
              {
                id: 13,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][52], 
                    type: "result", 
                    data: data[5][52] 
                  } 
                ]
              },
              {
                id: 14,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][53], 
                    type: "result", 
                    data: data[5][53] 
                  } 
                ]
              }, 
              {
                id: 15,
                header: false,
                type: "result",
                items: [
                  { 
                    label: data[2][54], 
                    type: "result", 
                    data: data[5][54] 
                  } 
                ]
              },       
            ]
          },
        ]
      }
    ]
  }
}
