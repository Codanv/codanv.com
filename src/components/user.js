import React from "react"
import styles from "./user.module.css"

const User = props => (

    <div className={styles.user}>
      {/* <img src={props.avatar} className={styles.avatar} alt="Written by" /> */}
      <span>Written by</span>
      <div className={styles.description}>
        <a href={props.handle} target="_blank" rel="noopener noreferrer">
          <h2 className={styles.user}>{props.writer}</h2>
        </a>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
)

export default User
