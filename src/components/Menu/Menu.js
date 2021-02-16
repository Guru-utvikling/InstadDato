import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
const Menu = (props) => {
  const menuItems = [
    { text: "Om oss", url: "/om-oss", id:1 },
    { text: "Tjenester", url: "/tjenester", id:2},
    { text: "Ledige stillinger", url: "/ledige-stillinger", id:3 },
    { text: "Events", url: "/events", id:4 },
    { text: "Blogg", url: "/blogg", id:5},
    { text: "Kontakt oss", url: "/kontakt-oss", id:6},
  ]
  return (
    <List style={{ width:`${props.width}`,position:`${props.position}`, flexDirection:`${props.direction}`}} className="menu__list">
      {menuItems.map((item) => (
        <Link key={item.id} style={{flexDirection:`${props.direction}`, color:`${props.color}`,textDecoration:'none'}} to={item.url}>
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
