import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../pages/variants';



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/*img*/}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/*text*/}
          <div>
            <h2>About Me</h2>
            <h3>I am a Freelancer Front-end Developer</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              eligendi quas minima quia neque aperiam praesentium a deserunt et
              enim odit voluptatum, soluta quisquam. Voluptatem suscipit facere
              impedit velit autem!
            </p>
            {/*stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[30px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={10} /> : null}
                </div>
                <div className="text-sm tracking-[2px]">
                  Months of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[30px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={10} /> : null}{" "}
                  +
                </div>
                <div className="text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
