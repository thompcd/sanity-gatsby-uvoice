import React from "react";
import { graphql } from "gatsby";
import {mapEdgesToNodes} from '../lib/helpers'
import Helmet from "react-helmet";

import Header from "../components/header";
import Layout from '../components/layout';
import GraphQLErrorList from '../components/graphql-error-list'
import Container from '../components/container'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

import pic01 from '../assets/images/pic01.jpg'

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
                            <h2>Lorem ipsum dolor adipiscing<br />
                            amet dolor consequat</h2>
                        </header>
                        <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
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
                            <h2>Lorem ipsum dolor adipiscing<br />
                            amet dolor consequat</h2>
                        </header>
                        <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                        <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
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