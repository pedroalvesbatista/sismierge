import React from 'react'
import { escopo, inicial } from '../../constants/app/'

import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: "test usuario",
    lastName: "Usuario",
    Modifications: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'Ativo'
        : statusChance > 0.33
        ? 'Inativo'
        : 'Suspenso',
  }
}

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`


const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, 
}) => {

  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }


  const onBlur = () => {
    updateMyData(index, id, value)
  }

 
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}


const defaultColumn = {
  Cell: EditableCell,
}


function Table({ columns, data, updateMyData, skipPageReset }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
    },
    usePagination
  )

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Página{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Ir para página:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}


export const Historico= () => {
  const [loading, setLoading] = React.useState(true)

  // return (
  //   < div className="d-flex flex-column justify-content-center align-items-center w-100">
  //     {!loading ? 'Carregando...'
  //     : <>
  //         <h1 className="text-center fs-1">Brevemente!</h1>
  //     </>  
  //   }
  //    </ div>
  // )
   const columns = React.useMemo(
    () => [
      {
        Header: 'Dados usuário',
        columns: [
          {
            Header: 'Nome',
            accessor: 'firstName',
          },
          {
            Header: 'Sobrenome',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Informações adicionais',
        columns: [
          {
            Header: 'Modificações',
            accessor: 'Modifications',
          },
          {
            Header: 'Acesso ao sistema',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Progresso',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => makeData(20))
  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)


  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }


  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])


  const resetData = () => setData(originalData)

  return (
    <Styles>
      {/* <button onClick={resetData}>Reset Data</button> */}
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  )

}
