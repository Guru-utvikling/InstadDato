import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ActiveJobList from "../components/ActiveJobList/ActiveJobList"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Link } from "gatsby"
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const LedigeStillinger = () => {
  const [activeJobs, setActiveJobs] = useState()
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const classes = useStyles()

  const getAllActiveJobs = (req, res) => {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const api = `https://api.recman.no/v2/get/?key=${process.env.GATSBY_API_KEY}&scope=jobPost&fields=name,ingress,startDate,endDate,logo`
    const url = proxy + api

    return fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json()
      })
      .catch((err) => console.log(err))
  }

  const init = () => {
    getAllActiveJobs().then((data) => {
      if (dataIsLoading) {
        setActiveJobs(data)
        setDataIsLoading(false)
        console.log(data)
      }
    })
  }

  useEffect(() => {
    init()
    return () => {}
  }, [])

  return (
    <Layout>
      {!dataIsLoading ? (
        <div className='ledige_stillinger_main_container'>
          <h1 className='bigSectionTitle'>Ledige stillinger</h1>

          <div className='container__ledige-stillinger'>
            {/*<div className='ledige-filters__wrapper'>
              <div className='container__ledige-filters'>
                <Typography component='h3' variant='h5'>
                  Filters
                </Typography>
                  <Link to='/ledige-stillinger'>
                    <Typography component='p' variant='p'>
                      Alle
                    </Typography>
                  </Link>
              </div>
        </div> */}
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
    </Layout>
  )
}

export default LedigeStillinger
