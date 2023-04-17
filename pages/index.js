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


<Toolbar />

      
<div className={styles.home}>

        <ReactPlayer url="https://www.twitch.tv/airestereo" />

        


      </div>


      <div className={styles.main}>


      <h1>AIRESTEREO TV 
         
  </h1>

  





</div>

    </div>




  );

}





<Html>

  <body>
    <Main />

    <NextScript />

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3007525536431255"
     crossorigin="anonymous"></script>
  </body>
</Html>




















