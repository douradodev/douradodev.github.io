import { library } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAndroid, faApple, fab, faConnectdevelop, faFacebook, faGithub, faGithubAlt, faGithubSquare, faInstagram, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faBook, faBookReader, faGraduationCap, faHistory, faInfo, faInfoCircle, faLaptopCode, faLifeRing, faPassport } from '@fortawesome/free-solid-svg-icons';
library.add(fab);
import minhatela from '../public/minhatela.jpeg'


export default function Home() { 
  return (
    <div className = {styles.container}>
      <Head>
        <title>Victor Dourado</title>
        <meta name="Icon PORTFOLIO" content="Victor DEV" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Head>
      <div className={styles.navsup}>
        <p className= {styles.alert}>Essa página está em desenvolvimento!</p>
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
          <a id={styles.titulo} href="#">VictorDourado</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" id="navitens">
              <li className="nav-item active" >
                <a  href="#">Home <span className="sr-only" ></span></a>
              </li>
              <li className="nav-item">
                <a  href="https://github.com/douradodev" target="blank">GitHub</a>
              </li>
              
              <li className="nav-item">
                <a  href="#">Sobre</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" >
        <div>
          <main className={styles.main}>
            <div className={styles.myx}>
              <Image className= {styles.my} src="/minhatela.jpeg" width="200px" height="200px"/>
            </div>
            <div >
              <h1 className={styles.title}>
                Olá, eu me chamo Victor Dourado!
              </h1>
              <p className={styles.description}>
                <code className={styles.code}>
                  Atualmente curso Análise e Desenvolvimento de Sistemas no Instituto Federal Do Piauí e estudo desenvolvimento WEB, este site tem como objetivo servir de portfólio para mim e ele foi feito utilizando <span className={styles.evidencia}>Next.JS, juntamente com as tecnologias React, Javascript, HTML5, CSS3 e Bootstrap</span></code>
              </p>
            </div>
            <div className= {styles.group}>
              <div className={styles.card}>
                <h2>Meus Projetos<FontAwesomeIcon className= {styles.icons} icon={faApple} height='25px' /> &darr;</h2>
                <h3> Aqui irei apresentar os links dos meus principais sistemas/sites. </h3>
                <ul>
                  <li className = {styles.site}>
                    <a href="https://schoolbagtep.herokuapp.com/#" target="blank"> Equipe SchoolBag </a>
                    <p>(Site acadêmico desenvolvido em Django por mim e pelo <a href="http://ahslcdev.herokuapp.com/" target="blank">Antônio Henrique</a>  para a disciplina de Tópicos especiais de Programação, onde o nosso objetivo era desenvolver um game)</p>
                  </li>

                  <li className = {styles.site}>
                    <a href="https://random-quote-machine-six.vercel.app/" target="blank"> Máquina de citações aleatórias </a>
                    <p>(Projeto 1/5 para conclusão do curso de Bibliotecas front-end da plataforma FreeCodeCamp)</p>
                  </li>

                  <li className = {styles.site}>
                    <a href="https://douradodev.vercel.app/" target="blank"> Meu Portfólio </a>
                    <p>(Esse é o link do meu portfólio, site desenvolvido por mim para mostrar meus projetos)</p>
                  </li>

                </ul>
              </div>

              <div className={styles.card}>
                <h2>Experiencias <FontAwesomeIcon className= {styles.icons} icon={faHistory} height='25px' /> &darr;</h2>
                <h3>Aqui irei falar um pouco sobre minhas experiências profissionais</h3>
                <div className = {styles.site}>
                  <p >
                    <a href="https://www.eb.mil.br/" target="blank">- Exército Brasileiro</a> (15/02/20 - 05/10/20)
                      Cargo: Aluno/Aspirante a oficial
                  </p>
                  <p>Atividades: Desempenhei funções que forjam o atributo de Liderança, também tive contato com controle de material, elaboração de relatórios e planilhas.</p>
                </div>
                <div className = {styles.site}>
                  <p >
                    <a href="https://www.gferronorte.com.br/" target="blank">- Ferronorte</a> (17/05/2021 - 20/06/2021)
                      Cargo: Auxiliar de produção
                  </p>
                  <p>Atividades: Trabalhos de organização e limpeza de setor, preparo de lotes de produto (tubos de ferro), auxílio no manuseio de máquinas e trabalho braçal.</p>
                </div>
              </div>

              <div className={styles.card}>
                <h2>Tecnologias utilizadas <FontAwesomeIcon className= {styles.icons} icon={faReact} height='25px' /> &darr;</h2>
                <h3>Habilidades e tecnologias utilizo na construção de sistemas e sites</h3>
                <h4>• Desenvolvedor WEB (Angular.js, React.js, Next.js).</h4>
                <h4>• Programo em JavaScript e Python 👨‍💻</h4>
                
              </div>

              <div className={styles.card}>
                <h2>Formação acadêmica <FontAwesomeIcon className= {styles.icons} icon={faGraduationCap} height='25px' /> &darr;</h2>
                <h3> Cursando Graduação tecnológica </h3>
                <h4> &rarr; Análise e Desenvolvimento de Sistemas <FontAwesomeIcon icon={faLaptopCode} height='25px' /> </h4>
              </div>

              <div className={styles.card}>
                <h2>Sobre <FontAwesomeIcon className= {styles.icons} icon={faAddressBook} height='25px' /> &darr;</h2>
                <div className = {styles.site}>
                  <p>• Tenho 20 anos de idade, sou um programador iniciante adquirindo conhecimentos e habilidades na área de desenvolvimento WEB, atualmente estou aprendendo Angular.JS e meu foco atual é o Front-end, porém meu objetivo a médio prazo é me tornar um Desenvolvedor FullStack.</p>
                  
                  <p> • Considero relevantes para o meu desenvolvimento profissional e pessoal:
                      <li>➡️ - Autodisciplina</li>
                      <li>➡️ - Organização</li>
                      <li>➡️ - Aprendizado constante</li>
                  </p>
                  <p>• Atualmente não me prendo a área de TI, devido a necessidade de trabalhar estou aprendendo e absorvendo experiência profissional trabalhando em diversos segmentos enquanto procuro oportunidades de crescer em minha área. 💼
                  </p>
                </div>
              </div>
            </div>
          </main>
          <footer className={styles.footer}>
            &copy; VictorDourado
          </footer>
        </div>
      </div>
    </div>
  )
}