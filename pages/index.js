import Head from 'next/head'
import { Toolbar } from '../components/toolbar';
//import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (

  <div className='page-container' >

<Toolbar/>


<div className={styles.main}>
<h1>Next.Js Network App</h1>
<h3>Your One Stop Shop For Entertainment and The Latest News Articles</h3>
</div>
</div>



);
   
}












