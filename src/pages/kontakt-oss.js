import React from "react"
import Grid from "@material-ui/core/Grid"
import Image from "gatsby-image"
import LeftPanelLayout from "../components/left-panle-layout"
import { TextField } from "@material-ui/core"
import Link from "gatsby"
const KontaktOss = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      <Grid
        container
        item
        lg={12}
        xs={12}
        className='kontakt-oss__container--content'
      >
        <h1 className='bigSectionTitle'> Kontakt oss</h1>
        <ul className='kontakt-oss_list'>
          <li>Halfdan Kjerulfsgate 4</li>
          <li>5017 Bergen</li>
          <li>
            <a to='tel:+47 994 00 900'>+47 994 00 900</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/instad/'>
              <img
                className='kontakt-oss-icons'
                height='35px'
                width='35px'
                src='https://www.datocms-assets.com/41475/1619434477-linkedin.png'
              />
            </a>
            <a href='https://www.facebook.com/instad.no/'>
              <img
                className='kontakt-oss-icons'
                height='35px'
                width='35px'
                src='https://www.datocms-assets.com/41475/1619434474-facebook.png'
              />
            </a>
            <a>
              <img
                height='35px'
                width='35px'
                src='https://www.datocms-assets.com/41475/1619434588-instagram-icon.png'
              />
            </a>
          </li>
        </ul>

        <Grid className='kontakt-oss__form__container'>
          <form
            className='kontakt-oss__form--wrapper'
            method='POST'
            data-netlify='true'
            action='/thank-you'
            name='Kontakt oss Form'
          >
            <div>
              <TextField
                required
                id='epost-required'
                label='E-post'
                type='email'
                name='email'
                id='email'
                required
              />
              <TextField
                required
                id='phone-required'
                label='Mobilnummer'
                type='tel'
                name='phone'
                id='phone'
                required
              />
              <TextField
                required
                id='navn-required'
                label='Fullt navn'
                type='text'
                name='name'
                id='name'
                required
              />
              <TextField
                required
                id='navn-required'
                label='Hva kan vi hjelpe deg med?'
                type='text'
                name='message'
                id='message'
                required
                rows={4}
              />
            </div>
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
  query kontaktOssQUery {
    bg: allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    first: allDatoCmsAsset(
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
  }
`

/*          <form
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
          </form> */
