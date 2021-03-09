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


      <ReactPlayer url="https://www.youtube.com/watch?v=xcLOVyKaMgk"/>
        

    </div>


<div className={styles.main}>



<h1>Next.Js Network App</h1>
<h3>Your One Stop Shop For Entertainment and The Latest News Articles</h3>
</div>
</div>


);
   
}












