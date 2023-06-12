import React from 'react'
import './about.css';
import prof from './images/about-1.jpg';
 function About() {
  return (
    <div>
      <div className="title-about">
        About Me
      </div>
      <div className="container-about">
          
          <img src={prof} alt="profile" className="prof" />
          <div className="hi"><b>Hi, My Name is Linda</b>
          <br/><br/>
          And Tipcy is my little corner of the internet!<br/><br/>

I'm the voice, author, and creator behind Tipcy. What started as a casual hobby over 10 years ago in 2010 while I was working as a fourth grade teacher has now grown into a full-blown business (!!) that reaches millions of people with fun recipes each month, with content that has been featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.<br/>

I live in Saint Paul, MN with my husband Bjork and our dog Sage. My favorite things in life are a big plate of pad Thai, sunny days, and going to the dog park.</div>
      </div>
    </div>
  )
}
export default About;
