import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <div className="nav">

      <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link> 
      </div>
   
        

        <style jsx global>{`
        .nav {
          text-indent: 60px;
          width: 100%;
          margin: 5px;
          padding: 0;
          color: white;
          background: #61A4D0;
        }
        h1 {
          text-align: center;
          margin: 7px;
        }
        p {
          text-align: center;
        }

        a:link {
          color: #ccc;
        }
        /* visited link */
        a:visited {
          color: #095484;
        }
        /* mouse over link */
        a:hover {
          color: #8ebf42;
        }
        /* selected link */
        a:active {
          color: #800000;
        }      
        `}</style>
    </div>
)

export default Header