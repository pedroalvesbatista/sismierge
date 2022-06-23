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
import { LoadingAnimation } from '../lottie'

function Modal({ loading }) {
  const dispatch = useDispatch()
  const { isOpenModal, displayModal } = useSelector(state => state.others)
  const { loadingDeleteUser } = useSelector(state => state.auth)
  const title= typeof(displayModal) === "number" ? displayModal : firstLetterCase(displayModal)

  const handleCloseModal = (e) => {
    e.stopPropagation()
    dispatch(othersActions.closeModal())
  }

  return (
    loadingDeleteUser ? (
      <LoadingAnimation size={150}/>
    )  : (
      typeof(displayModal) !== "number" && isOpenModal &&
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
  )
}

export default Modal