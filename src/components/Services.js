import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../pages/variants'

const services = [
  {
    name: "UI/UX Design",
    description: "Here I will be describing what the service has to offer",
    link: "Learn more",
  },
  {
    name: "Development",
    description: "Here I will be describing what the service has to offer",
    link: "Learn more",
  },
  {
    name: "Branding",
    description: "Here I will be describing what the service has to offer",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16"> I am a Freelancer</h3>
            <button className="btn btn-sm"> See My Work</button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*services list*/}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        href="#"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href="#">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
