import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../../components/App/Header/Header'
import { setup } from '../../services/Auth'
import { fetchCases } from '../../services/CaseList'
import { CASES_LIST } from '../../store/actions'
import CasesList from '../../components/App/CasesList/CasesList'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 260
  }
}))

const Cases = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const home = useSelector((state) => state.home)
  const cases = useSelector((state) => state.home.cases)

  const isLoaded = home.casesLoaded

  useEffect(() => {
    if (!isLoaded) {
      const getCases = fetchCases()
      const disp = getCases.then((resp) => ({ type: CASES_LIST, data: resp }))

      disp.then((action) => { dispatch(action) })
    }
  })


  if (setup() === false) {
    return <Redirect to='/' />
  }

  return (
    <>
      <Header target='home' />
      <Container className={classes.root} />
      <CasesList content={cases} />
    </>
  )
}

export default Cases
