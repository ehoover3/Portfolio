import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("left", "spring", index * 0.25, 0.5)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Certifications = () => {
  return (
    <div>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>Industry Recognized</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {/* {certifications
          .filter((certification) => certification.title.startsWith("AWS"))
          .map((certification, index) => (
            <CertificationCard key={certification.title} index={index} {...certification} /> */}
        {/* ))} */}
        {certifications
          // .filter((certification) => !certification.title.startsWith("AWS"))
          .map((certification, index) => (
            <CertificationCard key={certification.title} index={index} {...certification} />
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
