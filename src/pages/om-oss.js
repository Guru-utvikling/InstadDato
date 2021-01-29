import React from "react"
import Layout from "../components/layout"
import Grid from "@material-ui/core/Grid"

const OmOss = () => {
  return (
    <Layout>
      <div className='om-oss-container'>
        <Grid
          container
          item
          lg={6}
          xs={12}
          className='om-oss-container__content'
        >
            <h1 className='bigSectionTitle'>Om oss</h1>
            <p className='om-oss-container__content--para'>
              Instad AS ble startet i desember 2019, av Bjarne Jakobsen og Trond
              Erik Stølås. Begge har lang erfaring i bransjen, og målet er å
              gjøre ting enkelt. Enkelt for kunde og samarbeidspartnere, og
              enkelt for våre kandidater/medarbeidere med å bruke det nyeste av
              teknologiske løsninger. Samtidig ønsker vi å skape en lokal
              forankring i bedriften vår. Vi skal være det foretrukne
              bemanningsselskapet på Vestlandet.
            </p>
        </Grid>
        <Grid lg={6} container item className='om-oss-container__images'>
          <img
            className='om-oss-container__images--img'
            src='https://www.datocms-assets.com/41475/1611919439-chris-gray-qdiswj9rlhc-unsplash.jpg'
          />
          <img
            className='om-oss-container__images--img'
            src='https://www.datocms-assets.com/41475/1611919439-chris-gray-qdiswj9rlhc-unsplash.jpg'
          />
        </Grid>
      </div>
    </Layout>
  )
}

export default OmOss
