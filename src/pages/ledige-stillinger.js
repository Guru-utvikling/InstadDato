import React, { useEffect, useState } from "react"
import LeftPanelLayout from "../components/left-panle-layout"
import ActiveJobList from "../components/ActiveJobList/ActiveJobList"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Link } from "gatsby"
import axios from "axios"

const LedigeStillinger = ({data}) => {
  const [activeJobs, setActiveJobs] = useState()
  const [dataIsLoading, setDataIsLoading] = useState(true)

  const getDataFromServer = async () => {
    const response = await axios.get("https://instad-1.herokuapp.com/data", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    const data = await response
    return data
  }

  const init = () => {
    getDataFromServer().then((data) => {
      if (dataIsLoading) {
        setActiveJobs(data)
        setDataIsLoading(false)
      }
    })
  }

  useEffect(() => {
    init()
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LeftPanelLayout backgroundImage={data.bg}>
      {!dataIsLoading ? (
        <div className='ledige_stillinger_main_container'>
          <h1 className='bigSectionTitle'>Ledige stillinger</h1>

          <div className='container__ledige-stillinger'>
            <div className='container__ledige-list'>
              <ActiveJobList activelist={activeJobs} />
            </div>
          </div>
          <Link to='#' className='ga-top'>
            Gå til toppen
          </Link>
        </div>
      ) : (
        <div className='loading-div'>
          <h1>Loading</h1>
          <CircularProgress color='primary' />
        </div>
      )}
    </LeftPanelLayout>
  )
}

export default LedigeStillinger

export const query = graphql`
  query ledigeStill {
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
