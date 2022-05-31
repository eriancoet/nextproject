import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7XF7DGJ7JB');
  
export default () => (
	<Layout>
       <h2>
        Contact
      </h2>
       <p>
        eriancoet@gmail.com
      </p>
      <p>
        0799533275
      </p>
      <p>
        75 Nelson Str, Sabie, Mpumalanga, South Africa
      </p>
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