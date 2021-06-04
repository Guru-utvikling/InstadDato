import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 10,
    color: "#fff",
  },
  para: {
    color: "#fff",
    textAlign: "center",
  },
}))
const MobileMenuList = (props) => {
  const classes = useStyles()
  const menuItems = [
    { text: "Om oss", url: "/om-oss", id: 1 },
    { text: "Ansatte", url: "/ansatte", id: 1 },
    { text: "Tjenester", url: "/tjenester", id: 2 },
    { text: "Ledige stillinger", url: "/ledige-stillinger", id: 3 },
    { text: "Events", url: "/events", id: 4 },
    { text: "Blogg", url: "/blogg", id: 5 },
    { text: "Kontakt oss", url: "/kontakt-oss", id: 6 },
    { text: "Logg inn", url: "https://instad.recman.no/login.php", id: 7 },
  ]

  return (
      <List className={classes.list}>
        {menuItems.map((text) => (
          <Link className='mobile-menu-links' to={text.url}>
            <li key={text.id}>
              <p className={classes.para}>{text.text}</p>
            </li>
          </Link>
        ))}
      </List>
  )
}
export default MobileMenuList
