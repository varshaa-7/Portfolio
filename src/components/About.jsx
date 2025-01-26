import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
};

const hoverEffect = {
  whileHover: { scale: 1.1, rotate: 2 },
  whileTap: { scale: 0.95 },
};

const ServiceCard = ({ service }) => (
  <motion.div
    className="sm:w-[250px] w-full"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Trigger animation when in view
  >
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      {...hoverEffect} // Apply hover effect to the card
    >
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <motion.div
          className="flex flex-col justify-around"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="sm:px-16 px-2">
            <motion.h2
              className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Introduction
            </motion.h2>
            <motion.p
              className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              👨‍💻 Hi, I'm Varsha Awasthi, a third-year Computer Science and
              Engineering student🎓 with a passion for crafting robust systems
              and captivating web applications. As a seasoned{' '}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/nithin-manda-728019214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Software developer
              </a>{' '}
              I specialize in MERN stack🚀.
            </motion.p>
            <br />
            <ButtonLink
              url="https://drive.google.com/file/d/1_cqKFfinJC1ZoQweGRVy-z_YYX0iC5tI/view?usp=sharing"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <motion.div
            className="mt-20 flex justify-center flex-wrap gap-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
