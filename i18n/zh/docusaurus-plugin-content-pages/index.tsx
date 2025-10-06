import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import featureStyles from '@site/src/components/HomepageFeatures/styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '内置空安全',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Rive 通过 <code>T?</code> 类型、Elvis 操作符和安全调用链提供一流的空安全支持。
        在编译时而非运行时捕获空值相关的错误。
      </>
    ),
  },
  {
    title: '表达性控制流',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        现代化的控制流，包括模式匹配、范围模式、标签化循环和基于表达式的语法。
        编写更简洁、更易维护的代码。
      </>
    ),
  },
  {
    title: 'Rust 级别的性能',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Rive 编译为优化的 Rust 代码，为您提供 Rust 的性能和安全性，
        同时拥有更易访问和更具表达性的语法。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', featureStyles.feature)}>
      <div className="text--center">
        <Svg className={featureStyles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={featureStyles.features}>
      <div className="container">
        <div className={clsx("row", featureStyles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
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
          <p className={styles.heroSubtitle}>一个现代的系统编程语言</p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--lg", styles.primaryButton)}
              to="/docs/learn/basics/getting-started">
              <span>快速开始</span>
              <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              className={clsx("button button--lg", styles.secondaryButton)}
              to="/docs/develop/compiler/architecture">
              <span>开发文档</span>
            </Link>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span> 快速
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>🔒</span> 安全
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIcon}>✨</span> 现代
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
      title={`欢迎访问 ${siteConfig.title}`}
      description="一个具有空安全和表达性语法的现代系统编程语言">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

