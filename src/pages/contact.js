import React, {useState} from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {

    const [contact, setContact] = useState('View email address')

   return (
     <>
        <Head title="Contact" lang="en" canonical="https://www.codanv.com/contact/" />
        <Layout>
            <h1>Contact</h1>
            <div>
                For business inquires: {" "}
                <button onClick={() => {setContact("avinash@codanv.com")}}>{contact}           
                </button>
            </div>
        </Layout>
    </>
   )
}

export default Contact;