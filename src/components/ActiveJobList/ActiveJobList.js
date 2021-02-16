import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

const ActiveJobsList = (props) => {
  const classes = useStyles()
  return (
    <>
      {" "}
      {props.activelist.data ? (
        Object.keys(props.activelist.data).map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={props.activelist.data[item].applyUrl}
            >
              <Card
                key={props.activelist.data[item].jobPostId}
                className='card_container'
              >
                <div
                  className='card_logo'
                  style={{
                    backgroundImage: `url(${props.activelist.data[item].logo})`,
                  }}
                ></div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component='h5' variant='h5'>
                      {props.activelist.data[item].name}
                    </Typography>

                    <Typography variant='subtitle1' color='textSecondary'>
                      {props.activelist.data[item].ingress}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )
        })
      ) : (
        <div className='no-jobs-container'>
          <h1>Vi har for tiden ingen ledige stillinger.</h1>
        </div>
      )}
    </>
  )
}

export default ActiveJobsList
