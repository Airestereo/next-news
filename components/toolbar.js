import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
const router = useRouter();

return(
<div className={styles.main}>
  <div onClick={()=> router.push('/')}>HOME</div>
  <div onClick={()=> router.push('/feed/1')}>NEWS</div>
  <div onClick={()=> router.push('/eom')}>EOM</div>
  <div onClick={()=> window.location.href= 'https://www.youtube.com/airestereo'}>VIDEOS</div>

</div>
);

};