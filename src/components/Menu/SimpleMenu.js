/*

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <li onClick={handleClick}>
      <Link>Om oss </Link>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            className='second-menu--link'
            to='/om-oss'
          >
            Om oss
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            className='second-menu--link'
            to='/ansatte'
          >
            Ansatte
          </Link>
        </MenuItem>
      </Menu>
    </li>
  )
} */

import { Link } from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
 
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    minWidth:'200px',
    backgroundColor: 'inherit',
  },
  item:{
      fontFamily:'inherit',
      padding:'10px 0'
      
  }
}))

export default function ClickAway() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <li  onClick={handleClick}>
          Om oss
        </li>
        {open ? (
          <div className={classes.dropdown}>
            <MenuItem className={classes.item} >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                className='second-menu--link'
                to='/om-oss'
              >
                Om oss
              </Link>
            </MenuItem>
            <MenuItem className={classes.item} >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                className='second-menu--link'
                to='/ansatte'
              >
                Ansatte
              </Link>
            </MenuItem>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}
