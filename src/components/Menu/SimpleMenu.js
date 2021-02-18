import React from "react"
import { Link } from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
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
}
