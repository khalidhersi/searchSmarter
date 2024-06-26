import React from "react";
import "../styles/AnimatedCard.css";
import { motion } from "framer-motion";

const AnimatedCard = (props) => {
  const { image, content, title, isExpanded, onClick } = props;

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <div className="card__list">
      <motion.div 
        className={`card ${isExpanded ? "expanded" : ""}`}
        layout
        onClick={onClick}
      >
        <motion.h3 layout="position">{title}</motion.h3>
        <motion.img {...animated} src={image} alt="demo image" />

        {isExpanded && (
          <>
            <motion.p {...animated}>
              {content}
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
