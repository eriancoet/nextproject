import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'


const linkStyle = {
  aligntext: 'center'
}
export default () => (
	<Layout>

    
    <Image src="/static/images/ITPic.jpeg/" thumbnail />

	    <h1>Projects</h1>

       <Link href="https://fast-earth-93423.herokuapp.com/" >
          <a  style={linkStyle} target="blank">Itunes API</a>
        </Link>
<br />
        <Link href="https://protected-badlands-68828.herokuapp.com/" >
          <a  style={linkStyle} target="blank">Memory Game</a>
        </Link>
<br />
        <Link href="https://github.com/eriancoet?tab=repositories" >
          <a  style={linkStyle} target="blank">My gitHub Account</a>
        </Link> 
<br />
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