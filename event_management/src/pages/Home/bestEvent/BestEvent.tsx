// import React from 'react';
import './BestEvent.css'
import { motion } from 'framer-motion'

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
}; 

const introChildren = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const BestEvent = () => {
  const name = "Best Event Management Firm";
  const nameArray = name.split('');
    return (
      <motion.div
        className="bg-[#F5F6F7] pt-[33px]"
        variants={intro}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1220px] mx-auto grid grid-cols-2 items-start pb-12">
          <motion.div variants={introChildren}>
            <div className="text-[60px] font-bold uppercase stagger">
              {
                nameArray.map((item, i) => <span key={i} style={{transitionDelay:`${i * 50}ms`}} className='alphabet'>{item}</span>)
              }
            </div>
            <button className="bg-[#0B63E5] mt-8 px-[66px] py-[24px]">
              <span style={{ fontWeight: 700 }} className="text-xl text-white">
                Explore
              </span>
            </button>
          </motion.div>
          <motion.div
            variants={introChildren}
            className="text-xl ml-[140px] text-justify"
          >
            One standout firm that consistently excels in these areas is
            EventSphere. EventSphere seamlessly blends meticulous organization
            with imaginative concepts to deliver unforgettable experiences.
          </motion.div>
        </div>
        <div className="main max-w-[1220px] mx-auto flex items-center justify-center">
          <div className="glass flex items-center justify-center">
            <div className="circle flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7793 10.7198L8.28223 2.47125C8.05488 2.33223 7.79461 2.25629 7.52817 2.25125C7.26174 2.2462 6.99878 2.31224 6.76634 2.44256C6.5339 2.57288 6.34038 2.76277 6.20568 2.99271C6.07099 3.22264 6 3.48431 6 3.75079V20.2493C6.00022 20.5157 6.07135 20.7772 6.20609 21.0071C6.34083 21.2369 6.53433 21.4266 6.76669 21.5569C6.99906 21.6872 7.26192 21.7533 7.52826 21.7483C7.79461 21.7434 8.05484 21.6677 8.28223 21.5289L21.7793 13.2803C21.9986 13.1462 22.1797 12.9581 22.3054 12.7339C22.4311 12.5098 22.4971 12.2571 22.4971 12.0001C22.4971 11.7431 22.4311 11.4904 22.3054 11.2662C22.1797 11.042 21.9986 10.8539 21.7793 10.7198Z"
                  fill="#0B63E5"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default BestEvent;