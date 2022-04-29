import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BarTable from '../../components/Admin/BarTable'
import { authService } from '../../services'

function Tab1() {
    const titles= ["nome do usuário", "Email", "Função", "Confirmado", "Status"]
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = () => {
      setLoading(true)
      authService.loadUsers()
          .then(res => {
              setLoading(false)
              setUsers(res.data)
          })
          .catch(err => {
              setLoading(false)
              console.log(err.response.data.error);
          })
    }
  
    useEffect(() => {
      getUsers()
    }, [])

    // console.log(users);

  return (
    <Area>
      <BarTable item={users} loading={loading} header={titles} />
    </Area>
  )
}

const Area = styled.div`
    margin-top: 104px;
    width: 100%;
    /* height: 200px; */
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    padding: 0px 30px;
`

export default Tab1