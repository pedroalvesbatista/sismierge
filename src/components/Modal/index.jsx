import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { othersActions } from '../../actions'
import { firstLetterCase } from '../../functions'

import RoutesCompany from './Company/Routes'
import RoutesAdmin from './Admin/RoutesAdmin'
import { 
    Area,
    Card,
    Header,
    Separator,
    IconClose,
    Text
} from './styles'

function Modal() {
  const dispatch = useDispatch()
  const { isOpenModal, displayModal } = useSelector(state => state.others)
  const title= firstLetterCase(displayModal)

  const handleCloseModal = (e) => {
    e.preventDefault()
    dispatch(othersActions.closeModal())
  }

  return (
    isOpenModal &&
    <Area onClick={handleCloseModal}>
        <Card onClick={e => e.stopPropagation()}>
          <Header>
              <Text> {title} </Text>
              <IconClose onClick={handleCloseModal} />
          </Header>
          <Separator />
          <RoutesCompany/>
          <RoutesAdmin />
        </Card>
    </Area>
  )
}

export default Modal