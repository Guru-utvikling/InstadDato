import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
const Menu = () => {
  const menuItems = [
    { text: "Om oss", url: "/om-oss" },
    { text: "Tjenester", url: "/tjenester" },
    { text: "Ledige stillinger", url: "/ledige-stillinger" },
    { text: "Events", url: "/events" },
    { text: "Blogg", url: "/blogg" },
    { text: "Kontakt oss", url: "kontakt-oss" },
  ]
  return (
    <List>
      {menuItems.map((item) => (
        <Link>
          <ListItem button key={item.url}>
            <ListItemText  primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default Menu

/*        <li>
          <Link style={{color:'inherit',textDecoration:'none'}} to={item.url}>
              {item.text}
          </Link>
        </li> */