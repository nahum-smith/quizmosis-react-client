import React, {Component} from 'react'
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import {FacebookAuthButton} from '../../components'

const styles = theme => ({
  container: {
    display: 'flex',
    width: 275
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 275,
  }
})


class LoginContainer extends Component {
  render () {
    const {open, classes} = this.props
    return (
      <div className={classes.container}>
        <Dialog open={open} maxWidth='xs'>
          <DialogTitle>{'Login / Register'}</DialogTitle>
          <DialogContent>
            <TextField
              label='username'
              id='username'
              className={classes.textField}
            />
            <TextField
              label='password'
              id='password'
              className={classes.textField}
              margin='normal'
            />
          <FacebookAuthButton className={classes.textField}/>
          </DialogContent>
        </Dialog>
    </div>
    )
  }
}

export default withStyles(styles)(LoginContainer)
