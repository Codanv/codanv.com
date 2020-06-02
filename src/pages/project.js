import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import projectStyles from "./project.module.scss"

const ProjectPage = () => {
  return (
    <Layout>
      <Head title="project" lang="en" />
      <h1>Project</h1>
      <ol className={projectStyles.projects}>
        <li className={projectStyles.project}>
          <h3>
          <a
            href="https://github.com/Codanv/codanv.com.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            codanv.com
          </a>
          </h3>
        </li>

        <li className={projectStyles.project}>
          <h3>
          <a
            href="https://github.com/Codanv/codanv.github.io.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            codanv.github.io
          </a>
          </h3>
        </li>
      </ol>
    </Layout>
  )
}

export default ProjectPage
