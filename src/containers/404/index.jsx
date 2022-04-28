import React, { useEffect } from 'react'

export const NotFound = () => {
  const storageAdmin = JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))
  const storageUser = JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))

  useEffect(() => {
    !storageUser && !storageAdmin && window.location.replace('/')
  }, [storageAdmin, storageUser])
  
  return (
    <div>
      404 not found
    </div>
  )
}
