import React, { Component } from 'react'
import './Root.css'
import { withStyles } from 'material-ui/styles'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Route } from 'react-router-dom'
import Button from 'material-ui/Button'
import {AppBarContainer, MainContainer, AboutContainer} from '../'

const styles = (theme) => ({

})

class RootContainer extends Component {
  render () {
    var { classes, data: {questions, loading} } = this.props
    return (
      <div className='App'>
        <Route path='/' component={AppBarContainer} />
        <Route path='/about' component={AboutContainer} />
        <Route path='/' exact component={MainContainer} />
      </div>
    )
  }
}

const QUERY = gql`
{
  questions {
    questionID
    text
    answer
  }
}`

RootContainer = graphql(QUERY)(RootContainer)
export default withStyles(styles)(RootContainer)
