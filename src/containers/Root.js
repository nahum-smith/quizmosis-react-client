import React, { Component } from 'react'
import logo from './logo.svg'
import './Root.css'
import Button from 'material-ui/Button'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Root extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <Button raised color='primary'>
            Hello World
          </Button>
        </p>
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

export default graphql(QUERY)(Root)
