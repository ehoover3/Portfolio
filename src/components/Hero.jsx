import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <img src={profileImg} alt='profile image' style={{ zIndex: 20 }} />
          </div>

          <div>
            <h1 style={{ textAlign: "center" }} className={`${styles.heroHeadText} text-white text-center`}>
              Hi, I'm <span className='text-[#2b71c9]'>Eric Hoover</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>I develop full stack cloud applications</p>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
