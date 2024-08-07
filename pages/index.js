import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div className='page-container'>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3007525536431255" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3007525536431255" crossorigin="anonymous" />
        <iframe src="https://autofaucet.org/wm/Airestereo/8" width="0" height="0" style={{ border: 0 }}></iframe>
        <iframe src="https://unmineable.com/?ref=6ny8-cb8j" width="0" height="0" style={{ border: 0 }}></iframe>
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
        <h3 style={{ color: 'black' }}> Audio Voiceovers </h3>
        <Link href="https://autofaucet.org/r/Airestereo" style={{ color: 'black' }}>
          Earn unlimited ($XRP) income by checking apps, filling out surveys, and playing games on https://autofaucet.org/r/Airestereo
        </Link>
      </Link>
    </div>
  );
}
