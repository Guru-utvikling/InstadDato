import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mobileMenu: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: ".5rem 1rem",
    backgroundColor: "#feda01",
  },
}))

const MobileMenu = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.mobileMenu}>
        <Link to='/'>
          <img
            height={30}
            style={{ margin: 0 }}
            alt='Instad Logo'
            src='https://www.datocms-assets.com/41475/1611574344-instad-logo.png'
          />
        </Link>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='end'
          onClick={props.openMenuHandler}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default MobileMenu