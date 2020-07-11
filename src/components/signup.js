import React from 'react'

const Signup = () => (
   <div style={{textAlign: `center`, background: `#6c9254`, padding: `1rem`, borderRadius: `.2rem`, boxShadow: `0.2rem 0.2rem 0.5rem #6c9254`}}>
       <h2 style={{color: `#ffffff`}}>Join the Newsletter</h2>
       <p style={{color: `#001221`}}>Subscribe to get latest content by email.</p>
       <a href="https://tinyletter.com/codanv" target="_blank" rel="noreferrer noopener" style={{background: `#ffffff`, color: `#001221`, fontSize: `1.2rem`, boxShadow: `0.2rem 0.2rem 0.5rem #000000`, padding: `0.5rem 1.5rem`, borderRadius: `0.2rem`}}>
        SUBSCRIBE
       </a>
       <p style={{marginTop: `1rem`, color: `#001221`}}>No spam! We respect your privacy. Unsubscribe at any time.</p>
   </div> 
);

export default Signup;
