import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <meta name="description" content={`This month's employee of the month is ${employee.name}`} />
        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta property="og:description" content={`This month's employee of the month is ${employee.name}`} />
        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta property="twitter:description" content={`This month's employee of the month is ${employee.name}`} />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Employee Of The Month</h1>
          <div className={styles.employeeOfTheMonth}>
            <h2>{employee.name}</h2>
            <h3>{employee.position}</h3>
            <img src={employee.image} alt="employee" />
            <div onClick={() => window.location.href = 'https://github.com/Airestereo'}>
              <button><p>{employee.description}</p></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    //'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    `https://my-json-server.typicode.com/Airestereo/next-news/employeeOfTheMonth`,
  );
  
  const employee = await apiResponse.json();
  return {
    props: {
      employee,
    },
  };
};

export default EOM;
