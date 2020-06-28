import React from 'react'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Cases from '../Cases/Cases'
import titleSvg from '../../../images/maquette/c-case-title.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3)
    }
  }
}))

const CasesList = (props) => {
  const classes = useStyles()
  const oCases = props.content.slice(0, 3)

  return (
    <>
      <Container maxWidth='lg'>
        <center><img src={titleSvg} alt='Cas Cliniques' /></center>
        <div className={classes.root}>
          {
            oCases.map((oCase, index) => (
              <Cases key={index} item={oCase} />
            )
            )
          }
        </div>
      </Container>
    </>
  )
}

export default CasesList
