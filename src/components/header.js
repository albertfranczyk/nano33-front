import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header style={{
    backgroundColor: `#ededed`,
    textAlign: `center`,
    fontSize: `1.3rem`,
    padding: `0.5rem`,
    }}>
    <Link style={{
    color: `#010101`,
    padding: `1rem`,
    }} to="/"
      >Home
    </Link>
    <Link  style={{
    color: `#010101`,
    padding: `1rem`,
    }}to="/blog"
      >Blog
    </Link>
  </header>  
)

export default Header
