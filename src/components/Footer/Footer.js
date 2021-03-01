import React from "react"
import Grid from "@material-ui/core/Grid"
const NewsletterSection = () => {
  
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  console.log(url)
  return (
    <Grid
      className='newsletterSection__container'
      container
      direction='row'
      alignItems='center'
    >
      <Grid
        alignItems='center'
        justify="center"
        container
        item
        lg={6}
        xs={12}
      >
        <img className="newsletterSection__image" alt="conversation icon" src='https://www.datocms-assets.com/41475/1612531516-conversation-icon.svg' />
        <div  className='newsletterSection__content'>
          <h2 style={{color:"#fff",fontWeight:'900',fontSize:'18px'}} >
            {url === '/' ? 'Har du noen spørsmål?': 'Ønsker du å vite mer?' }
</h2>
          <p style={{color:'#fff'}} className="paraSection">Send en henvendelse, så tar vi kontakt med deg.</p>
        </div>
      </Grid>
      <Grid
        alignItems='center'
        justify="center"
        container
        item
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
            <button className='question__submit--input'  aria-label="Submit" type='submit' value='' />
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default NewsletterSection
