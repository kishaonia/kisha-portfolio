
import React from 'react';
import "./portfolio.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import wedding1 from "../images/wedding1.jpeg"
import wedding2 from "../images/wedding2.jpeg"
import wedding3 from "../images/wedding3.jpeg"
import homecooked1 from "../images/homecooked1.jpeg"
import homecooked2 from "../images/homecooked2.jpeg"
import homecooked3 from "../images/homecooked3.jpeg"
import spork1 from "../images/spork1.jpeg"
import spork2 from "../images/spork2.jpeg"
import spork3 from "../images/spork3.jpeg"
import spork4 from "../images/spork4.jpeg"
import capstone1 from "../images/capstone1.jpeg"
import capstone2 from "../images/capstone2.jpeg"
import capstone3 from "../images/capstone3.jpeg"
import { useState } from 'react';

function Portfolio() {


  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray('img');
  const updateProgress = (instance) =>
    loader = `${Math.round(instance.progressedCount * 100 / images.length)}`;

  let loader = document.querySelector('.loader--text');


  const showDemo = () => {
    document.body.style.overflow = 'auto';
    // document.scrollingElement.scrollTo(0, 0);
    // gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

    gsap.utils.toArray('section').forEach((section, index) => {
      const w = section.querySelector('.wrapper');
      const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5
        }
      });


    });
  };

  imagesLoaded(images).on
    ('progress', updateProgress).on
    ('always', showDemo);

  // about me
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);

  const handleOptionClick = (index) => {
    setActiveOptionIndex(index);
  };

  return (


    <div className='demo-wrapper'>
      <header className='df aic jcc'>
        <div>
          <h1>Kisha Onia</h1>
          <h2>Software Engineer | Frontend Developer</h2>
        </div>
      </header>
      <section className='demo-text'>
        <div className='wrapper text'>
          About me
        </div>
        </section>
        <div className='about-me-stuff'>
          <div className="body-about-me">
            <div className="options-about-me">
              {['Background', 'Languages', 'Hobbies', 'Playlist'].map((option, index) => (
                <div
                  className={`option-about-me ${index === activeOptionIndex ? 'active' : ''}`}
                  onClick={() => handleOptionClick(index)}
                >

                  <div className="shadow-about-me"></div>
                  <div className="label-about-me">



                    <div className="info-about-me">
                      <div className='icon-and-ab'>
                        <div className="icon-about-me">
                          <i className={["fas fa-globe-asia", "fas fa-desktop", "fas fa-puzzle-piece", "fab fa-spotify", "fa fa-heart"][index]}></i>
                        </div>
                        <div className="main-about-me">{option}</div>
                      </div>

                      <div className='about-me-contents'>
                        {[
                          <span className='ab1'> Born and raised in Manila, Philippines.

                            <br>
                            </br> I love the ocean, the sun, and the beach
                            <br>
                            </br> A dreamer and a believer
                            <br></br>
                            <br></br>Always found home wherever life takes her.
                          </span>,
                          <span className='ab2'>
                            <p className='ab2-title'>Non-technical</p>
                            English & Tagalog
                            <br></br>
                            <p className='ab2-title'>Programming</p>
                            <ul className='ab2-title-lang'>
                              <li className='lang-ab'>React.js</li>
                              <li className='lang-ab'>React Native</li>
                              <li className='lang-ab'>Redux</li>
                              <li className='lang-ab'>JavaScript</li>
                              <li className='lang-ab'>HTML</li>
                              <li className='lang-ab'>CSS</li>
                              <li className='lang-ab'>Node.js</li>
                              <li className='lang-ab'>Express</li>
                              <li className='lang-ab'>SQL</li>
                              <li className='lang-ab'>PostgreSQL</li>
                              <li className='lang-ab'>Python</li>
                            </ul>
                          </span>,

                          <span className='ab3'>
                            <ul className='ab3-hobbies'>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-person-snowboarding"></i>
                                <p className='ab3-hobbies-title'>Surfing</p>

                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-plane-departure"></i>
                                <p className='ab3-hobbies-title'>Exploring</p>


                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-music"></i>
                                <p className='ab3-hobbies-title'>Music & Concert</p>


                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-laptop-code"></i>
                                <p className='ab3-hobbies-title'>Coding</p>


                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-mug-hot"></i>
                                <p className='ab3-hobbies-title'>Coffee tasting</p>


                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-utensils"></i>
                                <p className='ab3-hobbies-title'>Foodtrip</p>


                              </li>
                              <li className='ab3-hobbies-li'>
                                <i class="fa-solid fa-book-open-reader"></i>
                                <p className='ab3-hobbies-title'>Overanalyze</p>


                              </li>


                            </ul>
                          </span>,
                          <span className='ab4'>
                            Am I really a Filipino if I don't love singing?
                            <div className='ab4-playlist'>

                              <iframe src="https://open.spotify.com/embed/playlist/6HElUH31dLlc3XfLDwyje0?utm_source=generator" width="375" height="350" frameBorder="0" allowfullscreen="no"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                          </span>,
                          <span className='ab5'>
                            "hi2", </span>
                        ][index]}
                      </div>
                      <div className="sub-about-me"> </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
    
      <div className='project-title-ab'>From surfing the waves in the Philippines to riding the tides of technology, my journey has taken me from Manila to here.</div>

      <div className='project-description-ab'>I embraced my immigrant roots and my curiosity by solo traveling at a young age. I learned to surf by the ocean, and Moana's words rang true when I saw the line where the sky meets the sea, calling me to explore new places. I've always wondered about what it's like to live in a different place. I moved to the US when I was 18. I learned to adapt to a new environment and live with different customs. I picked up a few sentences of a new language because It’s fascinating how people can communicate differently and still say the same thing. I lived in Miami and Las Vegas, which are like live music central. I love attending concerts and meeting people, which led me here. As I venture into the tech industry, I realized that there was an invisible string tying me to where I am now all along. I will continue to move to places where my career can thrive, and I will most likely have to adapt to a new culture. I will continue to grow with an open mind and learn new languages, this time coding languages. I will continue to listen to the art of others through words, whether it be my favorite singers or developers speaking about their new products. Lining up for merch? I'm still lining up years later, but for free swag. It's different, but it's also the same.</div>

      <section className='demo-text'>
        <div className='wrapper text'>
          Projects
        </div>
      </section>
      <section className='demo-gallery'>
        <div className='project-title'>Kim & Kristine's RSVP</div>
        <div className='links-git-repo'>
          <div>
            <button href="https://www.kimkristine.com/" target="_blank" >Live Link</button>

          </div>
        </div>
        <div className='project-description'>As a final output of what I have been preparing for, the official website of my sister and my brother in law. Used API to RSVP using that will be redirected to the designated email to receive. Will also implement QR scanning for users to upload during the reception. And guests can view their photos in this website even after the event.</div>

        <ul className='wrapper'>
          <li>
            <img src={wedding3} width='1240' height='874' />
          </li>
          <li>
            <img src={wedding1} width='1240' height='874' />
          </li>
          <li>
            <img src={wedding2} width='1240' height='874' />
          </li>
        </ul>
      </section>


      <section className='demo-gallery'>
        <div className='project-title'>Homecooked!</div>
        <div className='project-description'>
          This is a project I have created similar to UberEats but with a twist, but instead of fast-food chains, it will be created by locals of that cuisine near your area. We have added a message feature to message the chefs and buyer. Message me for more details </div>
        <ul className='wrapper'>
          <li>
            <img src={homecooked1} width='1240' height='874' />
          </li>
          <li>
            <img src={homecooked2} width='1240' height='874' />
          </li>
          <li>
            <img src={homecooked3} width='1240' height='874' />
          </li>
        </ul>
      </section>


      <section className='demo-gallery'>
        <div className='project-title'>Spork!</div>
        <div className='links-git-repo'>

          <div>
            <button href="https://spork-group-project.onrender.com/" target="_blank">Live Link</button>

          </div>
          <div>
            <button href="https://github.com/Miketuazon/Spork" target="_blank">Repository</button>

          </div>
        </div>
        <div className='project-description'>Inspired by Tumblr, my team developed Spork, a user-friendly social blogging clone. We used, Node, React, Flask, SQL & PostgreSQL for this project. This platform provides users with a creative outlet to share their thoughts and express themselves through personalized posts. Users can enjoy features like post creation, customization options, social interactions, and media uploads. Spork fosters a vibrant and engaging community, allowing users to connect and interact with each other's content in a seamless and intuitive manner</div>
        <ul className='wrapper'>
          <li>
            <img src={spork4} width='1240' height='874' />
          </li>
          <li>
            <img src={spork2} width='1240' height='874' />
          </li>
          <li>
            <img src={spork1} width='1240' height='874' />
          </li>
          <li>
            <img src={spork3} width='1240' height='874' />
          </li>
        </ul>
      </section>
      <section className='demo-gallery'>
        <div className='project-title'>Capstone</div>
        <div className='links-git-repo'>
          <div>
            <button href="https://kk-em38.onrender.com" target="_blank">Live Link</button>

          </div>
          <div>
            <button href="https://github.com/kishaonia/WeddingCapstone" target="_blank">Repository</button>

          </div>
        </div>
        <div className='project-description'>For this project, I developed a sophisticated website clone dedicated to wedding planning. I used the technologies, React, Node.js, and SQL. The platform offers comprehensive functionality for managing various aspects of weddings. Users can create and manage guestlists, registries, and comments. Additionally, they can make song requests and upload photos to capture memorable moments. Robust user registration, login, and profile update features ensure a personalized experience for every user.</div>

        <ul className='wrapper'>
          <li>
            <img src={capstone2} width='1240' height='874' />
          </li>
          <li>
            <img src={capstone1} width='1240' height='874' />
          </li>
          <li>
            <img src={capstone3} width='1240' height='874' />
          </li>

        </ul>
      </section>
      <div className='links-end'>
        <section className='demo-text-links'>
          <div className='wrapper text'>
           CONNECT WITH ME
          </div>
          </section>
          <ul className="demo-text-links-12345">
            <a className="wrapper-text1" href="https://www.linkedin.com/in/kisha-onia-63bb35182/" target="_blank">
              <div className='links-social'> <i class="fa fa-linkedin-square"></i>
                <p className='rah-social'>LinkedIn</p>
              </div>
            </a>
            <a className="wrapper-text2" href="https://github.com/kishaonia" target="_blank">
              <div className='links-social'> <i class="fa fa-github"></i>
                <p className='rah-social'>
                  Github</p></div>
            </a>
            <a className="wrapper-text3" href="mailto:workwithkisha@gmail.com" target="_blank">
              <div className='links-social'> <i class="fa fa-envelope"></i>
                <p className='rah-social'>Email</p>
              </div>
            </a>
          </ul>
      
      </div>
    </div>

  )
}

export default Portfolio;
