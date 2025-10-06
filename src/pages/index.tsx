import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { SpeedInsights } from "@vercel/speed-insights/next"

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <SpeedInsights />
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      <div className={clsx("container", styles.heroContent)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.titleGradient}>{siteConfig.title}</span>
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--lg", styles.primaryButton)}
              to="/docs/learn/basics/getting-started">
              <span>Get Started</span>
              <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              className={clsx("button button--lg", styles.secondaryButton)}
              to="/docs/develop/compiler/architecture">
              <span>Develop</span>
            </Link>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span> Fast
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>🔒</span> Safe
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>✨</span> Modern
            </span>
          </div>
        </div>
        <div className={styles.heroCode}>
          <div className={styles.codeWindow}>
            <div className={styles.codeWindowHeader}>
              <div className={styles.codeWindowButtons}>
                <span className={styles.codeWindowButton} style={{backgroundColor: '#ff5f56'}}></span>
                <span className={styles.codeWindowButton} style={{backgroundColor: '#ffbd2e'}}></span>
                <span className={styles.codeWindowButton} style={{backgroundColor: '#27c93f'}}></span>
              </div>
              <div className={styles.codeWindowTitle}>example.rive</div>
            </div>
            <pre className={styles.codeBlock}>
              <code>
                <span className={styles.keyword}>fun</span> <span className={styles.function}>main</span>() {'{'}
                {'\n'}    <span className={styles.function}>print</span>(<span className={styles.string}>"Hello, Rive!"</span>)
                {'\n'}{'}'}{'\n'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A modern systems programming language with null safety and expressive syntax">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
