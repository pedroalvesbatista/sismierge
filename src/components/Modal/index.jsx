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
  const title= firstLetterCase(displayModal)

  const handleCloseModal = (e) => {
    e.stopPropagation()
    dispatch(othersActions.closeModal())
  }
  

  return (
    isOpenModal &&
    <Area onClick={handleCloseModal}>
      {displayModal === "loading" ? (
          <LoadingAnimation size={150}/>
        ) : (
          <Card onClick={e => e.stopPropagation()}>
            <Header>
              <Text> {title} </Text>
              <IconClose onClick={handleCloseModal} />
            </Header>
            <Separator />
            <RoutesCompany/>
            <RoutesAdmin />
          </Card>
        )
      }
    </Area>
  )
}

export default Modal