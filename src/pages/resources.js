import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ResourcePage = () => {
  return (
    <Layout>
      <Head title="Resources" lang="en" />
      <h1>Resources</h1>
      <ul>
        <li>
          <a
            href="https://github.com/Codanv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github (source code)
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCwbQQu92VNMhcidYbOArJYg/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video resources
          </a>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwbQQu92VNMhcidYbOArJYg/playlists?view=50&sort=dd&shelf_id=9"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML, JS, JQuery, CSS, Sass, Bootstrap, etc. (must have basics)
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLXHlx1m2cY0aUnW63FSu9Pve8UyHy1BLM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js (server-side)
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCwbQQu92VNMhcidYbOArJYg/playlists?view=50&sort=dd&shelf_id=17"
                target="_blank"
                rel="noopener noreferrer"
              >
                React (user interface)
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLXHlx1m2cY0bjzuWXsPVuMxMStyEu2859"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java Basics
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLXHlx1m2cY0bhekZP68xvjOAhyl7GS4q_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Basics
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLXHlx1m2cY0bhekZP68xvjOAhyl7GS4q_"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL Basics (RDBM)
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLXHlx1m2cY0aB4SdxEfJ-TNWI_yHKgzZg"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB Basics (Non-relational Database)
              </a>
            </li>

          </ul>
        </li>

        <li>
          <a
            href="https://instagram.com/thecodanv"
            target="_blank"
            rel="noopener noreferrer"
            title="Codanv Instagram Posts"
          >
            Data Science & Machine Learning Libraries(example programs)
          </a>
          <p style={{color: "red"}}>Topics(below) point only one of related instagram posts</p>
          <ul>
            <li>
            <a 
            href="https://www.instagram.com/p/B21AgOknEG-/"
            target="_blank"
            rel="noopener noreferrer"
            >    
                Python Basics (a quick look)
            </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/B4IBvABjpx4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Statistics Basics
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p/B4hLQI2gaWK/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`NumPy (arrays and matrices)`}
              </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/p/B4pdeo-gDNM/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pandas (data manipulation and analysis)
            </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/p/B49k6zpAxJv/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Matplotlib (data visualization)
            </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/p/B5cbiC4ATo0/"
                target="_blank"
                rel="noopener noreferrer"
            >
                SciPy (scientific computing)
            </a>
            </li>
            <li>
            <a
                href="https://www.instagram.com/p/B8-sXRhAV4k/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Seaborn (statistical data visualization)
            </a>    
            </li>
            <li>
            <a
            href="https://www.instagram.com/p/B3zSWTzApAk/"
            target="_blank"
            rel="noopener noreferrer"
            >
              Additional
              </a>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/p/B3zSWTzApAk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MySQL (relational database)
                  </a>
                </li>
                <li>
                <a
                href="https://www.instagram.com/p/B_hLuYIjvf7/"
                target="_blank"
                rel="noopener noreferrer"
            >
                    Flask (web framework)
                </a>
                </li>
                <li>
                <a 
                href="https://www.instagram.com/p/B-gpKhlgD5a/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Other Stuff
                </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default ResourcePage
