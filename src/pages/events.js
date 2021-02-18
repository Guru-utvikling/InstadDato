import React from "react"
import LeftPanelLayout from "../components/left-panle-layout"
const Events = ({ data }) => {
  return (
    <LeftPanelLayout backgroundImage={data.allDatoCmsAsset}>
      <div className="event__container">
        {data.allDatoCmsEvent.nodes.map(( event ) => (
          <div key={event.id} className='service_box_wrapper'>
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>
    </LeftPanelLayout>
  )
}

export default Events

export const query = graphql`
  query queryEventsPage {
    allDatoCmsAsset(filter: { filename: { eq: "first-section-bg.png" } }) {
      edges {
        node {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    allDatoCmsEvent {
      nodes {
        title
        id
      }
    }
  }
`
