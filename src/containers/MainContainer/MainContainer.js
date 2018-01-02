import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as applicationActionCreators from '../../redux/modules/application'
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form'
import { LoginContainer } from '../'


class MainContainer extends Component {
  state = {
    open: !this.props.isAuth
  }
  render () {
    console.log(this.props)
    const { open } = this.state
    const { isAuth, classes } = this.props
    return (
      isAuth
      ? <div>{'Main Container'}</div>
      : <LoginContainer open={!isAuth} />
      )
  }
}
function mapStateToProps({application}) {
  return {
    isAuth: application.isAuth
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(applicationActionCreators, dispatch)
}

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer)

export default MainContainer
