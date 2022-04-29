import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Routes from './Routes'
import { 
    Area,
    Card,
    Header,
    Separator,
    IconClose,
    Text
} from './styles'

function Modal({ openModal }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      setIsOpen(openModal?.state)
    }, [openModal])

    const handleOpenModal = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

  return (
    isOpen &&
    <Area onClick={handleOpenModal}>
        <Card onClick={e => e.stopPropagation()}>
            <Header>
                <Text> {openModal?.type} </Text>
                <IconClose onClick={handleOpenModal} />
            </Header>
            <Separator />
            <Routes openModal={e => setIsOpen(e)} type={openModal?.type} />
        </Card>
    </Area>
  )
}

export default Modal