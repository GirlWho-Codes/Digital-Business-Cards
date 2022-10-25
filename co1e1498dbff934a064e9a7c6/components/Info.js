import React from "react"

export default function Info() {
    return (
        <div className = "info-container">
        <header>
        <img src ="./assets/002.jpeg" className = "image-style"/>
        </header>
        <div className="info-bio">
         <h1 className="info-title">Omotoke Okeyemi</h1>
        <p className="info-text">Frontend Developer</p>
        <div className = "info-contacts">
        <a className = "info-links" href="mailto:okeyemiomotoke@gmail.com"><img className="info-icons" src="./assets/Email-logo.png" alt="" /> Email
          </a>
        <a className = "info-links" href="https://www.linkedin.com/in/omotoke-okeyemi-2a3922202"><img className="info-icons" src="./assets/LinkedIn-logo.png" alt="" /> LinkedIn
          </a>
          </div>
        </div>
        </div>
      
    )
}