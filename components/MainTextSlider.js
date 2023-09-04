import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

export default function Footer() {
  
  const texts = ["community", "dignity", "curiosity",  "passion", "agency",];
  const variants = {
    enter: (direction) => {
      return {
        y: 0,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        y: 0,
        opacity: 0
      };
    }
  };
  
  const LoopWrap = styled.div`
    
  `;

  const TextLoop = () => {
    const [index, setIndex] = useState(0);
    const [randomIndex, setRandomIndex] = useState(0);
  

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setIndex(randomIndex);
      setRandomIndex(randomIndex);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(Math.floor(Math.random() * texts.length));
      }, 2 * 1000);
    
      return () => clearInterval(interval);
    }, [randomIndex]);
  
    return (
      <LoopWrap>
       
        <AnimatePresence>
          <motion.span
            style={{ position: "absolute" }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 200, damping: 10 },
              opacity: { duration: 2 }
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </LoopWrap>
    );
  };
  
  
  return (
    <div className=""> <TextLoop /></div>
  );
}