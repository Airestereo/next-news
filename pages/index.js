import Head from 'next/head'
import { Toolbar } from '../components/toolbar';
//import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player';
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

  <div className='page-container' >



<Toolbar/>

<div className={styles.home}>


      <ReactPlayer url="https://www.youtube.com/watch?v=21X5lGlDOfg"/>
        

    </div>


<div className={styles.main}>



<h1>AIRESTEREO TV</h1>
<h3>Live Entertainment With The Latest News Articles</h3>
</div>
</div>


);
   
}












