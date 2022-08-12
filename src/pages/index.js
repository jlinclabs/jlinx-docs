import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.stage)}>
          <div className={styles.stageLeft}>
            <img className={styles.logo} src="img/jlinx-looking.svg"/>
          </div>
          <div className={styles.stageRight}>
            <h1 className="hero__title">JLINX</h1>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Documentation
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/building-an-app/tutorial">
                Tutorial
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
      </main>
    </Layout>
  )
}
