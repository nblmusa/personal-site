import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Work.module.scss'
import editorImage from '../public/editor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from "@fortawesome/free-brands-svg-icons"
import {  faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout page="work">
        
        <div className={styles.main}>
          <h1>Some Things I’ve Built</h1>

          <div className={styles.card}>
            <h2>Editor</h2>
            <p>A minimal, dark editor designed to quickly visualize HTML template.</p>
            <Image src={editorImage} alt="Editor"/>
            <div className={styles.footer}>
              <span>Angular / Sass / VS Code</span>
              <span className={styles.icons}>
                <a href="https://github.com/nblmusa/editor" target='_blank' rel="noopener noreferrer" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://editor.nabilmusa.com/" target='_blank' rel="noopener noreferrer" title="Editor"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </span>
              </div>
          </div>
        </div>
        
      </Layout>
    </>
  )
}

export default Home
