import React from "react"
import "./aboutUs.css"
import Logo from "../../images/logo.png"
import cleaner from "../../images/cleaning.svg"
import story from  "../../images/story.svg"

const AboutUs = () => {
  return (
    <section id="about" className="container">
      <div className="content row">
        <div className="title col-md">
          <h2>About Dream Maids</h2>
          <img src={Logo} alt="cleaner" />
        </div>
        <p className="text col-md">
          Dream Maids Cleaning Services LLC has provided high-quality cleaning
          and maintenance services customized to our clients’ needs. Our
          professional cleaning company ensures smooth service transitions due
          to our extensive experience. Dream Maids cares deeply about the
          impression you make on others. We are dedicated to creating clean,
          safe and healthy environments for commercial and residential spaces.
        </p>
      </div>

      <div className="content row box">
        <p className="text col-md">
          After each inquiry from potential clients, we take it upon ourselves
          to look for the upmost precise course of action on how to approach the
          services we will conduct for your property, each step of our process
          is perfectly catered to your needs and wants. Once we receive your
          feedback and a specified time for us to visit your home, we will
          discuss an allotted price for your properties clean up and how often
          you would like for us to continue our services.We aid to develop a
          growing and personable relationship with each and every one of our
          clients!
        </p>
        <div className="title  col-md">
          <h2>How The Magic Happens</h2>
          <img src={cleaner} alt="cleaner" />
        </div>
      </div>

      <div className="content row">
        <div className="title col-md">
          <h2>How we got started</h2>
          <img src={story} alt="cleaner" />
        </div>
        <p className="text col-md">
          Working over 10 years in the business of home care and cleaning
          service, our founder and proud mother of 3, Maria Garzon wanted to
          expand both her knowledge of the industry onto others just like her as
          well as bring her years of expertise in the form of peace and joy into
          the homes of many she could not reach before as a freelance
          housecleaner. Beginning as a solo business as a way to support her
          children she now embraces her first years of experience and uses these
          lessons to teach and train her extraordinary staff. Utilizing the
          support of her staff and children she attempts to satisfy every client
          that comes to her in need and hopes for you to be the next approaching
          client.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
