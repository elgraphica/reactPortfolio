import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../pages/variants'

import Img1 from "../assets/Hard-Cover-Book-01.png";
// import Img2 from "";
// import Img3 from "";




const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/*text*/}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum expedita facilis eos, aspernatur nisi rerum veritatis
                fugiat labore. At inventore dolorem id, ullam corporis aliquid
                placeat nobis hic error quos?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1.src}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50"
              >
                <span className="text-3x1 text-white">Project Title</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1.src}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50"
              >
                <span className="text-3x1 text-white">Project Title</span>
              </div>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1.src}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-700 z-50"
              >
                <span className="text-3x1 text-white">Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
