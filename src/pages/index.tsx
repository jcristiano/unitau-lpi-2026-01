import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Início" description="Linguagem de Programação I - Unitau">
      <main style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Linguagem de Programação I (LPI)</h1>
        <p>Bem-vindos ao repositório de conteúdo da disciplina na <strong>Unitau</strong>.</p>
        
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Compreender os fundamentos da programação estruturada e orientada a objetos.</li>
          <li>Dominar a sintaxe e lógica da linguagem [Java/C++].</li>
          <li>Desenvolver boas práticas de versionamento e documentação.</li>
        </ul>

        <h2>📅 Cronograma Resumido</h2>
        <table>
          <thead>
            <tr><th>Semana</th><th>Tópico</th></tr>
          </thead>
          <tbody>
            <tr><td>01</td><td>Introdução e Ambiente de Desenvolvimento</td></tr>
            <tr><td>02</td><td>Variáveis e Estruturas de Controle</td></tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
