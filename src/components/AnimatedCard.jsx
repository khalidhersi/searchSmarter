import React, { useState } from "react";
import "../styles/AnimatedCard.css";
import { motion } from "framer-motion";
import svg1 from "../assets/images/cloud_audit_logs.png"
import svg2 from "../assets/images/cloud_for_marketing.png"
import svg3 from "../assets/images/cloud_optimization_ai.png"
import svg4 from "../assets/images/filestore.png"
import svg5 from "../assets/images/my_cloud.png"
import svg6 from "../assets/images/cloud_test_lab.png"
import avatar3 from '../assets/images/avatar-3.png';
import Avatar from './Avatar.js';

const AnimatedCard = (props) => {
  const [isExpaned, setIsExpaned] = useState(false);

  const {image, content, title} = props;

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <div className="card__list">
    <motion.div 
      className={`card ${isExpaned ? "expanded" : ""}`}
      layout
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}
    >
      <motion.h3 layout="position">{title} </motion.h3>
        <motion.img {...animated} src={image} alt="demo image" />

      {isExpaned && (
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