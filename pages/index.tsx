import { library } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAndroid, faApple, fab, faConnectdevelop, faFacebook, faGithub, faGithubAlt, faGithubSquare, faInstagram, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faBook, faBookReader, faGraduationCap, faHistory, faInfo, faInfoCircle, faLaptopCode, faLifeRing, faPassport } from '@fortawesome/free-solid-svg-icons';
import image from 'next/image';
library.add(fab)
export default function Home() {
  return (
    <div className = {styles.container}>
      <Head>
        <title>Sistema Dourado</title>
        <meta name="Icon PORTFOLIO" content="Victor DEV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navsup}>
        <ul className={styles.listsup}>
          <a className={styles.icons} href="https://github.com/douradodev" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} width='1.5rem' />
          </a>
          <a className={styles.icons} href="https://www.instagram.com/douradoxx/?hl=pt-br" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faInstagram} width='1.5rem'/>
          </a>
          <a className={styles.icons} href="https://www.linkedin.com/in/victor-dourado-610477207/" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} width='1.5rem'/>
          </a>
          <a className={styles.icons} href="https://www.facebook.com/victor.dourado.376/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} width='1.5rem' />
          </a>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container">
          <a id={styles.titulo} href="#">SistemaDourado</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" id="navitens">
              <li className="nav-item active" >
                <a  href="#">Início <span className="sr-only" ></span></a>
              </li>
              <li className="nav-item">
                <a  href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mais
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Ir para</a>
                  <a className="dropdown-item" href="#">WebSite</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Youtube</a>
                </div>
              </li>
              <li className="nav-item">
                <a  href="#">Sobre</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" >
        <div className={styles.containe}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Olá, eu me chamo Victor Dourado!
            </h1>
            <p className={styles.description}>
              <code className={styles.code}>
                Atualmente curso Análise e Desenvolvimento de Sistemas no Instituto Federal Do Piauí e estudo desenvolvimento WEB, este site tem como objetivo servir de portfólio para mim e ele foi feito utilizando <span className={styles.evidencia}>Next.JS, juntamente com as tecnologias React, Javascript, HTML5, CSS3 e Bootstrap</span></code>
            </p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>Aplicações <FontAwesomeIcon className= {styles.icons} icon={faApple} height='25px' /> &darr;</h2>
                <p>Aqui irei apresentar meus principais programas e disponibilizar os repositórios dos mesmos no GitHub </p>
              </div>
              <div className={styles.card}>
                <h2>Experiencias <FontAwesomeIcon className= {styles.icons} icon={faHistory} height='25px' /> &darr;</h2>
                <p>Aqui irei falar um pouco sobre minha vida profissional</p>
              </div>
              <div className={styles.card}>
                <h2>Tecnologias utilizadas <FontAwesomeIcon className= {styles.icons} icon={faReact} height='25px' /> &darr;</h2>
                <p>Habilidades e tecnologias que já utilizei e atualmente faço uso na construção dos sistemas e aplicações</p>
              </div>
              <div className={styles.card}>
                <h2>Formação acadêmica <FontAwesomeIcon className= {styles.icons} icon={faGraduationCap} height='25px' /> &darr;</h2>
                <h3>Graduação tecnológica(incompleto) </h3>
                <h4> &rarr; Análise e Desenvolvimento de Sistemas <FontAwesomeIcon icon={faLaptopCode} height='25px' /> </h4>
              </div>
              <div className={styles.card}>
                <h2>Sobre <FontAwesomeIcon className= {styles.icons} icon={faAddressBook} height='25px' /> &darr;</h2>
                <p>   Tenho 19 anos e ultimamente tenho estudado as tecnologias que utilizei pra fazer este site, meu objetivo é obter habilidades notáveis em Next.JS e minha próxima meta é aprender conhecimentos sobre TypeScript. Também preciso obter habilidades para integrar as frontpages a APIS e a manipular bancos de dados, em breve estudarei disciplinas relacionadas a esses conhecimentos no curso de ADS no IFPI.
                </p>
                <p> Atualmente realizo trabalhos de construção de páginas ou estilização das mesmas, porém trabalho apenas com front-pages no momento.</p>
              </div>
            </div>
          </main>
          <footer className={styles.footer}>
            &copy; SistemaDourado
          </footer>
        </div>
            </div>
      </div>
  )
}
