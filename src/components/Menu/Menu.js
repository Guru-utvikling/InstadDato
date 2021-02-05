import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
const Menu = (props) => {
  const menuItems = [
    { text: "Om oss", url: "/om-oss" },
    { text: "Tjenester", url: "/tjenester" },
    { text: "Ledige stillinger", url: "/ledige-stillinger" },
    { text: "Events", url: "/events" },
    { text: "Blogg", url: "/blogg" },
    { text: "Kontakt oss", url: "/kontakt-oss" },
  ]
  return (
    <List style={{flexDirection:`${props.direction}`}} className="menu__list">
      {menuItems.map((item) => (
        <Link style={{flexDirection:`${props.direction}`, color:`${props.color}`,textDecoration:'none'}} to={item.url}>
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
