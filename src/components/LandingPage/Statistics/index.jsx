import React from 'react';
import { FeatureContainer, FeatureButton } from './StatsElements';
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>🏆 我们的历史 🏆 </h1>
      <p>10+ 课程 | 100+ 学习 | 60+ DAO </p>
      <Link to="/signup"> 
      {/* <FeatureButton>Register Now</FeatureButton>  */}
      </Link>
    </FeatureContainer>
  );
};

export default Feature;
