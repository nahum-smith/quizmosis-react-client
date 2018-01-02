import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import FacebookIcon from 'react-icons/lib/fa/facebook'

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
const styles = (theme) => {
  return {
    button: {
      background: '#3B5998',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      borderWidth: '0',
      fontSize: '17px',
      cursor: 'pointer',
      width: '300px',
      ':hover': {
        background: '#1542A0'
      }
    },
    icon: {
      marginRight: '20px'
    }
  }
}
function FacebookAuthButton ({onAuth, isFetching, classes}) {
  return (
    <Button raised onClick={onAuth} className={classes.button}>
      <FacebookIcon className={classes.icon} />
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}

    </Button>
  )
}

export default withStyles(styles)(FacebookAuthButton)
