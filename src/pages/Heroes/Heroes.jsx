import styles from './styles.module.css';
import { Header } from '../../shared/ui/Header/Header';
import { Footer } from '../../shared/ui/Footer/Footer';
import { useEffect, useState } from 'react';


export function Heroes() {

  const [heroes, setHeroes] = useState([]);
  const url = 'http://127.0.0.1:8000/api'

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/heroes')
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json()
    })
    .then(data => {
      setHeroes(data.data)
    })
    .catch(error => console.error(error))
  }, [])

  


  return (
    <>
      <Header />

      {heroes.map((hero) => (
        <section key={hero.id} className={styles.niznekamsk}>
          <div className={styles.niznekamsk_text}>
            <img src={url+hero.photo} alt={hero.name} />
            <div className={styles.niznekamsk_yacheika_text}>
              <p>
                <b className={styles.hero_name}>{hero.name}.</b> {hero.description}
              </p>
            </div>
            <img src={url+hero.map} alt="" />
          </div>
        </section>
      ))}

      <Footer />
    </>
  );
}