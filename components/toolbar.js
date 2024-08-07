import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css';


export const Toolbar = () => {
const router = useRouter();

return(

<div className={styles.main}>
<div onClick={()=> router.push('/')}>HOME</div>
  <div onClick={()=> router.push('/feed/1')}>MUSIC</div>
  <div onClick={()=> router.push('/#')}>TV</div>
  <div onClick={()=> router.push('/eom')}>EOM</div>
  <div onClick={()=> window.location.href= 'https://www.linkedin.com/in/carlos-vazquez-34b043a9/'}>LinkedIn</div>

  </div>





);

};






