import React from "react";
import { graphql } from "gatsby";
import {mapEdgesToNodes} from '../lib/helpers'
import Helmet from "react-helmet";

import Header from "../components/header";
import Layout from '../components/layout';
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

export const query = graphql`
  query BlogPreviewQuery {
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    images: allSanityImageAsset(limit: 1) {
        edges {
          node {
            url
          }
        }
      }
  }
`

const HomePage = props => {
    const {data, errors} = props

    console.log("raw data", data)
    if (errors) {
        return (
          <Layout>
            <GraphQLErrorList errors={errors} />
          </Layout>
        )
      }

      const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
      const section1ImgURL = data && data.images && mapEdgesToNodes(data.images)[0].url
      console.log("image", section1ImgURL)
      const siteTitle = "Home | UVoice Consulting";

      return (
        <div>
        <Header />
        <Layout>
            <Helmet title={siteTitle} />

            <section id="one" className="main style1">
                <div className="grid-wrapper">
                    <div className="col-6">
                        <header className="major">
                            <h2>UVOICE builds growth through marketing, technology and sales enablement strategies, backed by implementation and concurrent processes. </h2>
                        </header>
                        <p>UVOICE builds growth through marketing, technology and sales enablement strategies, backed by implementation and concurrent processes.</p>
                    </div>
                    <div className="col-6">
                        <span className="image fit"><img src={section1ImgURL} alt="" /></span>
                    </div>
                </div>
            </section>

            <section id="two" className="main style2">
                <div className="grid-wrapper">
                    <div className="col-6">
                        <ul className="major-icons">
                            <li><span className="icon style1 major fa-code"></span></li>
                            <li><span className="icon style2 major fa-bolt"></span></li>
                            <li><span className="icon style3 major fa-camera-retro"></span></li>
                            <li><span className="icon style4 major fa-cog"></span></li>
                            <li><span className="icon style5 major fa-desktop"></span></li>
                            <li><span className="icon style6 major fa-calendar"></span></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <header className="major">
                            <h2>Services with consistent returns.</h2>
                        </header>
                        <p>We build a plan to be the best forward-facing company you can be while making it easier on your sales employees. With over 8 years of brand development and marketing best practices, UVOICE brings a unique marketing approach to our clients through strategies that use cutting edge technology and forward thinking mind-sets. </p>
                        <p>Technology is important to every business. Using the right ones at the right times with the right utilities is of utmost importance to UVOICE. We build road maps and plans through analysis and stack development according to business needs. Here at UVOICE - we want your technology to be efficient and not overlapping.</p>
                        <p>Every business needs sales in order to grow. We focus on how to develop sales teams and processes that are sustainable as your business grows. UVOICE has over 7 years of experience building product, sales and product development.</p>
                    </div>
                </div>
            </section>

            <section id="three" className="main style1 special blog">
                    <div className="col-12">
                        <header className="major">
                            <h2>Top Blog Posts</h2>
                        </header>
                        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
                        <a href="./archive" className="button">Show More</a>
                    </div>
            </section>

            <section id="four" className="main style2 special">
                <div className="container">
                    <header className="major">
                        <h2>Let's Get In Touch</h2>
                    </header>
                    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  
                        <input type="hidden" name="bot-field" />  
                        <input type="hidden" name="form-name" value="contact" />
                    <ul className="actions uniform">
                        <li><input type="text" name="name" placeholder="name"></input></li>
                        <li><input type="email" name="email" placeholder="name@email.com"></input></li>
                        <li><button type="submit">Send</button></li>
                    </ul>
                    </form>
                </div>
            </section>
        </Layout>
        </div>
    );

}


export default HomePage;