import React from "react"
import Grid from "@material-ui/core/Grid"
const NewsletterSection = () => {
  return (
    <Grid
      className='newsletterSection__container'
      container
      direction='row'
      justify='space'
      alignItems='center'
    >
      <Grid
        alignItems='center'
        justify="center"
        container
        lg={6}
        xs={12}
      >
        <img className="newsletterSection__image" src='https://www.datocms-assets.com/41475/1611655430-conversation-icon.svg' />
        <div  className='newsletterSection__content'>
          <h2 style={{color:"#fff",fontWeight:'900',fontSize:'18px'}} >Har du noen spørsmål?</h2>
          <p className="paraSection">Send en henvendelse, så tar vi kontakt med deg.</p>
        </div>
      </Grid>
      <Grid
        alignItems='center'
        justify="center"
        container
        lg={4}
        xs={12}
      >
        <form
          method='POST'
          data-netlify='true'
          action='/thank-you'
          name='Newsletter Signup'
          className="form__container"
        >
          <input type='hidden' name='form-name' value='Newsletter Signup' />
          <div className='question__form--wrapper'>
            <input
              type='email'
              name='E-post'
              id='e-post'
              placeholder='E-post'
              className='question__text--input'
            />
            <button className='question__submit--input' type='submit' value='' />
          </div>

          <label>
            <p style={{textAlign:'center'}}>
              <a style={{color:"#000", fontSize:'18px',textDecoration:'none'}} href='tel:+4740021570'>Telefon: +47 400 21 570</a>
            </p>
          </label>
        </form>
      </Grid>
    </Grid>
  )
}

export default NewsletterSection
