import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

const linkStyle = {
   marginRight: 15
 }
export default () => (
	<Layout>
       <Image className="img" src="/static/images/ITPic.jpeg/" thumbnail  />
	    <h1>Home</h1>
       <p>Welcome to my Portfolio,<br />
       Here you will find some of my latest projects and history about my work as Web Developer. </p>
       <Link href="/about">
          <a style={linkStyle}>Click here to find out more About Me.</a>
        </Link>
        
         <style jsx>{`
        p {
         font-weight: 700
        }
      `}</style>
      <style jsx global>{`
        h1 {
          color: black;
        }
        p {
         color: black;
         background: #E5E5E5
        }
       
        body {
          background: #E5E5E5; 
          text-align: center;
        }
        .img {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
      }
        `}</style>

  </Layout>
)