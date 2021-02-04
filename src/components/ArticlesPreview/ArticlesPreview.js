import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const ArticlePreview = (props) => {
  return (
    <div>
      <>
        {props.post.edges.length <= 0 ? (
          ""
        ) : (
          <div className='postPreview__wrapper'>
            <div className='archive'>
              {props.post.edges.map(({ node: nyheter }) => (
                <article
                  className='article__container'
                  key={nyheter.nyheterSlug}
                >
                  <figure>
                    <BackgroundImage fluid={nyheter.nyheterCoverimage.fluid}>
                      <Link
                        className='article__image'
                        to={`/blogg/${nyheter.nyheterSlug}`}
                      ></Link>
                    </BackgroundImage>
                    <figcaption>
                      <h6 className='article__title'>
                        <Link to={`/blogg/${nyheter.nyheterSlug}`}>
                          {nyheter.nyheterTitle}
                        </Link>
                      </h6>
                      <div>
                        <p className='article__short'>
                          {nyheter.nyheterExcerpt}
                        </p>
                      </div>
                      <div className='article__info'>
                        <p style={{ color: "#000" }}>
                          {nyheter.meta.firstPublishedAt}
                        </p>
                        <Link
                          style={{ color: "#000" }}
                          to={`/blogg/${nyheter.nyheterSlug}`}
                        >
                          Les mer
                        </Link>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  )
}

export default ArticlePreview
/*          */
