import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import FirstSection from "../components/FirstSection/FirstSection"
import SecondSection from "../components/SecondSection/SecondSection"
import ThirdSection from "../components/ThirdSection/ThirdSection"
import NewsletterSection from "../components/NewsletterSection/NewsletterSection"
const IndexPage = () => (
  <Layout>
    <FirstSection />
    <SecondSection/>
    <ThirdSection/>
    <NewsletterSection />
  </Layout>
)

export default IndexPage
