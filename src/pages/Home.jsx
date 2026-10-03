import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../assets/motion";

import logo from "../assets/logo.png";
import heroImage from "../assets/hero.png";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
        >
          {/* HEADER */}
          <motion.header>
            <img
              src={logo}
              alt="Elements Wellness"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          {/* HERO */}
          <motion.div
            className="home-content"
            {...headContainerAnimation}
          >
            {/* TEXT */}
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                <span className="text-gradient">
                  Elements Wellness
                </span>
              </h1>

              <p className="max-w-md font-normal text-gray-600 text-base">
                Welcome to Elements Wellness, your ultimate destination
                for holistic health and wellness solutions. Explore our
                range of services and products designed to enhance your
                well-being.
              </p>
            </motion.div>

            {/* PRODUCT IMAGE */}
            <motion.div {...headContentAnimation}>
              <img
                src={heroImage}
                alt="Elements Wellness Products"
                className="hero-image"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;