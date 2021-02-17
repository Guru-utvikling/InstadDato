import React from "react"
import Grid from "@material-ui/core/Grid"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <Grid  justify='center' container>
      <ul style={{color:"#fff", textAlign:"center", margin:"2rem", }}>
        <li>Halfdan Kjerulfsgate 4</li>
        <li>5017 Bergen</li>
        <li>
          <Link style={{color:"#fff"}} to='tel:+47 994 00 900'>+47 994 00 900</Link>
        </li>
        <li>
          <a to='https://www.linkedin.com/company/instad/'>
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </Grid>
  )
}

export default Footer

/*      <Grid className='footer-item__wrapper' md lg={2} item>
        <img alt="Instad logo " src='https://www.datocms-assets.com/41475/1611574344-instad-logo.png' />
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
      </Grid>*/
