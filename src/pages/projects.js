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
          <a
            href="https://github.com/Codanv/codanv.com.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className={projectStyles.project}>
          <p>
            codanv.com
          </p>
        </li>
          </a>

          <a href="https://github.com/Codanv/codanv.github.io.git"
            target="_blank"
            rel="noopener noreferrer"
          >
        <li className={projectStyles.project}>
          <p>
            codanv.github.io
          </p>
        </li>
          </a>
      </ol>
    </Layout>
  )
}

export default ProjectPage
