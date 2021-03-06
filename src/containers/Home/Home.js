import './Home.scss'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JOB_LIST } from '../../store/actions'
import Register from '../../components/App/Register/Register'
import SignIn from '../../components/App/SignIn/SignIn'
import { tryJobs } from '../../services/Jobs'
import { useToasts } from 'react-toast-notifications'

const Home = () => {
  const dispatch = useDispatch()
  const home = useSelector((state) => state.home)
  const {addToast} = useToasts()
  const isLoaded = home.jobsLoaded
  const form = home.login ? <SignIn /> : <Register />

  useEffect(() => {
    if (!isLoaded) {
      const getJobs = tryJobs()
      getJobs.then(response => {
        if (response.message !== 'Network error' && response.message !== undefined) {
          getJobs.then((res) => (dispatch({ type: JOB_LIST, data: res.datas })))
        } else {
            //dispatch({ type: 'LOAD_INTERNET'})
            //if(!home.internet) {
            //  addToast('Vous n\'avez pas accès à Internet', { appearance: 'error' });
            //}
        }
      })
    }
  })

  return (
    <div className='App'>
      {form}
    </div>
  )
}

export default Home
