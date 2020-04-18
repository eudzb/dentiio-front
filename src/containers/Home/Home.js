import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import CardForm from '../../components/App/CardForm/cardForm'
import './Home.scss'
import { cardCheck } from '../../store/actions'

const Home = (props) => {
  const dispatch = useDispatch() 
  const [cardState, setCardState] = useState('inscription')

  dispatch(
    cardCheck(
      {
        status: cardState
      }
    )
  )

  return (
    <div className='App'>
      <CardForm content={cardState} />
    </div>
  )
}

export default Home
