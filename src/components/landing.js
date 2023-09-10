
import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./landing.css"
import { NavLink } from 'react-router-dom';



const Landing = () => {
  
  useEffect(() => {
    let linkAnimated = false;

    const xTo = gsap.quickTo(".hidden-content", "--x", {
      duration: 0.4,
      ease: "power4.out"
    });
    
    const yTo = gsap.quickTo(".hidden-content", "--y", {
      duration: 0.4,
      ease: "power4.out"
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(".hidden-content", {
      "--size": 250,
      duration: 0.75,
      ease: "back.out(1.7)"
    });

    const btnTl = gsap.timeline({ paused: true });
    btnTl.to(".hidden-content", {
      "--size": 20,
      duration: 0.75,
      ease: "back.out(1.7)"
    });

    const hoveringContent = gsap.utils.toArray("p");

    hoveringContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        tl.restart();
      });
      el.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });

    const link = document.querySelector("a");
    const linkIcon = document.querySelector(".btn-icon");

    link.addEventListener("mouseenter", (e) => {
      linkAnimated = true;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const iconRect = linkIcon.getBoundingClientRect();
      const centerX = iconRect.left + iconRect.width / 2;
      const centerY = iconRect.top + iconRect.height / 2 + scrollTop;
      yTo(centerY);
      xTo(centerX);
      btnTl.restart();
    });

    link.addEventListener("mouseleave", (e) => {
      linkAnimated = false;
      btnTl.reverse();
    });

    const onFirstMove = (e) => {
      window.removeEventListener("mousemove", onFirstMove);
      gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });

      window.addEventListener("mousemove", (e) => {
        if (!linkAnimated) {
          yTo(e.pageY);
          xTo(e.pageX);
        }
      });
    };

    window.addEventListener("mousemove", onFirstMove);

    return () => {
      // Cleanup event listeners
      hoveringContent.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
      link.removeEventListener("mouseenter", () => {});
      link.removeEventListener("mouseleave", () => {});
      window.removeEventListener("mousemove", onFirstMove);
    };

  }, []);

  return (
    <div className='landing-wrapper'>
    <div className="bg position-relative pb-5">
      <div className="content-landing">
        <div className="container-landing">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="display-3 fw-bold text-center">
               {/* Welcome to Kisha Onia's portfolio! */}
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="display-3 fw-bold text-center">
              This information is in the 'preview stage.'
              <br>
              </br> Exciting, yes, but the best is yet to come.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a className="d-inline-flex justify-content-center align-items-center p-3" href="/1">
                
            
              <span className='discover-link'>Discover more of Kisha's experiences</span>
              <i className="btn-icon bi bi-arrow-right-short fs-4"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden-content">
        <div className="container-landing-hidden">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-md-10 col-lg-8">
              <p className="display-3 fw-bold text-center">Welcome to Kisha's portfolio! <br></br>  Hover and click below to access!</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center min-vh-100">
           
          </div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;
