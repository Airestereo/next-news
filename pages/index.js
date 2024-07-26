import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Script from 'next/script'; // Import the Script component

export default function Home() {
  return (
    <div className='page-container'>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3007525536431255" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3007525536431255"
          crossorigin="anonymous"
        />
      </Head>
      <Toolbar />
      <div className={styles.home}>
        <div className={styles.playerContainer}>
          {/* Centered ReactPlayer */}
          <ReactPlayer url="https://www.twitch.tv/airestereo" />
        </div>
      </div>
      {/* Use the Link component */}
      <Link href="https://www.voices.com/profile/carlos_vazquez" className={styles.main}>
        {/* Add your styles here */}
        <h3 style={{ color: 'black' }}>
        VOICEOVERS
        </h3>

        <Link href="https://unmineable.com/?ref=6ny8-cb8j"style={{ color: 'black' }}>
          Share your XRP referral code to earn 0.25% of your referral's mining rewards, passively!
        </Link>
        
      </Link>

     

    </div>
  );
}
