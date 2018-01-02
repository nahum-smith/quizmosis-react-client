import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Switch from 'material-ui/Switch'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Menu, { MenuItem } from 'material-ui/Menu'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as applicationActionCreators from '../../redux/modules/application'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class AppBarContainer extends React.Component {
  state = {
    anchorEl: null,
  }

  handleChange = (event, checked) => {
    this.props.authAction(checked)
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  logout = () => {
    this.props.authAction(false)
    this.setState({anchorEl: null})
  }
  login = () => {
    this.props.authAction(true)
  }
  handleRequestClose = () => {
    this.setState({ anchorEl: null })
  }
  doSomething = (e) => {
    console.info(e)
  }
  render () {
    const { classes, isAuth } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={isAuth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={isAuth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.doSomething} className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Quizmosis
            </Typography>
            {isAuth
              ? <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onRequestClose={this.handleRequestClose}
                  >
                    <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                  </Menu>
                </div>
              : <Button onClick={this.login} color="contrast">Login</Button>}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps({application}) {
  return{
    isAuth: application.isAuth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(applicationActionCreators, dispatch)
}

AppBarContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}
AppBarContainer = withStyles(styles)(AppBarContainer)
AppBarContainer = connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)

export default AppBarContainer
