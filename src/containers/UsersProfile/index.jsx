import React, {  useState } from 'react'
import { escopo, inicial } from '../../constants/app/'

export const UsersProfile= () => {
  const [loading, setLoading] = useState(true)

  return (
    < div className="d-flex flex-column justify-content-center align-items-center w-100">
      {!loading ? 'Carregando...'
      : <>
          <h1 className="text-center fs-1">Brevemente!</h1>
      </>  
    }
     </ div>
  )
}
