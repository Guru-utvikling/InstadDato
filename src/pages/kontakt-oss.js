import { Grid } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import { ListItemIcon } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import HomeIcon from "@material-ui/icons/Home"
import LeftPanelLayout from "../components/left-panle-layout"
const KontaktOss = ({ data }) => {
  const menuItems = [
    { text: "+47 567 890 456", url: "tel:+47 567 890 456", id: 10 },
    { text: "post@epost.no", url: "mailto:post@epost.no", id: 11 },
    {
      text: "Halfdan Kjerulfsgate 4 5017 Bergen",
      url: "/ledige-stillinger",
      icon: <HomeIcon />,
      id: 12,
    },
  ]
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <Grid container lg={12} className='kontakt-oss__container'>
        <Grid item lg={12} className='kontakt-oss__container--content'>
          <Grid lg={6} item>
            <Image fluid={data.img.edges[0].node.fluid} />
          </Grid>
          <Grid lg={6} item>
            <h1 className='bigSectionTitle bigSectionTitle__centered'>
              Kontakt oss
            </h1>
            <List>
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={item.url}
                >
                  <ListItem key={item.url}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
        </Grid>

        <Grid item lg={12} className='kontakt-oss__form'>
          <form
            className='kontakt-oss__form--wrapper'
            method='POST'
            data-netlify='true'
            action='/thank-you'
            name='Kontakt oss Form'
          >
            <input type='hidden' name='form-name' value='Kontakt oss Form' />
            <label>
              {" "}
              <input
                placeholder='E-post*'
                type='email'
                name='email'
                id='email'
                required
              />
            </label>
            <label>
              <input
                placeholder='Mobilnummer*'
                type='tel'
                id='phone'
                name='phone'
                required
              />
            </label>
            <label>
              <input
                required
                placeholder='Fullt navn*'
                type='text'
                name='name'
                id='name'
              />
            </label>
            <label>
              <textarea
                placeholder='Hva kan vi hjelpe deg med?'
                name='message'
                id='message'
                required
                rows='5'
              />
            </label>
            <button className='submit-btn-form' type='submit'>
              Kontakt oss
            </button>
          </form>
        </Grid>
      </Grid>
    </LeftPanelLayout>
  )
}

export default KontaktOss

export const query = graphql`
  query kontaktOssQuery {
    img: allDatoCmsAsset(
      filter: { filename: { eq: "welding-21781271920.jpg" } }
    ) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    bg: allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
