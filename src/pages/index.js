import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi... Saya Muhammad Shabir</h1>
    <p>Saya Bayi berumur 7 bulan dan masih minum susu.</p>
    <p>Ini adalah website yang disiapkan untuk saya untuk dikelola dikemudian waktu :)</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
