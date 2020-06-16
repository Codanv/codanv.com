import React from "react"
import {Link} from "gatsby"
import styles from "./user.module.css"

const User = props => (

    <div className={styles.user}>
      {/* <img src={props.avatar} className={styles.avatar} alt="Written by" /> */}
      <span>Written by</span>
      <div className={styles.description}>
        <Link to={props.handle}>
          <h2 className={styles.username}>{props.username}</h2>
        </Link>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
)

export default User
