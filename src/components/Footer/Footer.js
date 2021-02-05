import React from "react"
import Grid from "@material-ui/core/Grid"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Menu from "../Menu/Menu"
import Link from "gatsby"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"

const Footer = () => {
  return (
    <Grid className='footer__container' justify='center' container>
      <Grid className='footer-item__wrapper' md lg={2} item>
        <img src='https://www.datocms-assets.com/41475/1611574344-instad-logo.png' />
      </Grid>
      <Grid className='footer-item__wrapper' md lg={2} item>
        <h4 className='smallBoldTitle'>Meny</h4>
        <Menu color='#000' direction='column' />
      </Grid>
      <Grid className='footer-item__wrapper' md lg={2} item>
        <h4 className='smallBoldTitle'>Kontakt oss</h4>
        <List>
          <ListItem>
            <ListItemText>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href='tel:+47 567 890 456'
              >
                +47 567 890 456
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href='mailto:post@epost.no'
              >
                post@epost.no
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Halfdan Kjerulfsgate 4 5017 Bergen</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid className='footer-item__wrapper' md lg={2} item>
        <h4 className='smallBoldTitle'>Follow us</h4>
        <div>
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer
