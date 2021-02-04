import { Grid } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import { ListItemIcon } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem"
import HomeIcon from "@material-ui/icons/Home"
import TextField from "@material-ui/core"
const KontaktOss = ({ data }) => {
  const menuItems = [
    { text: "+47 567 890 456", url: "tel:+47 567 890 456" },
    { text: "post@epost.no", url: "mailto:post@epost.no" },
    {
      text: "Halfdan Kjerulfsgate 4 5017 Bergen",
      url: "/ledige-stillinger",
      icon: <HomeIcon />,
    },
  ]
  return (
    <Layout>
      <Grid className='omOss__container'>
        <Grid item lg={12} className='omOss__container__content'>
          <Grid lg={6} item>
            <Image
              className='omOss__container__image'
              fluid={data.allDatoCmsAsset.edges[0].node.fixed}
            />
          </Grid>
          <Grid lg={6} item>
            <h1 className='bigSectionTitle'>Kontakt oss</h1>
            <List>
              {menuItems.map((item) => (
                <Link
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

        <Grid item lg={12} className='omOss__container__form'>

        </Grid>
      </Grid>
    </Layout>
  )
}

export default KontaktOss

export const query = graphql`
  query kontaktOssQuery {
    allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fixed {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  }
`
