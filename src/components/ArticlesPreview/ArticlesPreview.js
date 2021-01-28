import React from "react"
import { Link } from "gatsby"

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
                <article className="article__container" key={nyheter.nyheterSlug} >
                  <figure >
                  <Link
                      style={{
                        background: `url(${nyheter.nyheterCoverimage.fluid.src})`,
                      }}
                      className="article__image"
                      to={`/blogg/${nyheter.nyheterSlug}`}
                    ></Link>
                    <figcaption >
                      <h6  className="article__title" >
                        <Link to={`/blogg/${nyheter.nyheterSlug}`}>
                          {nyheter.nyheterTitle}
                        </Link>
                      </h6>
                      <div>
                        <p className="article__short" >{nyheter.nyheterExcerpt}</p>
                      </div>
                      <div className="article__info">
                          <p>{nyheter.meta.firstPublishedAt}</p>
                          <Link to={`/blogg/${nyheter.nyheterSlug}`}>Les mer</Link>
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