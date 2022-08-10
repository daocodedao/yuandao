import React from 'react';
import Navbar from '../../nav/Nav';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const sm = useMediaQuery('(min-width:425px)')
    return (
    <HeroContainer>
      
      <HeroContent>
        <HeroItems>
          <HeroH1>欢迎来到 <br/> 元学院</HeroH1>
        { sm ? (<HeroP>一起 WEB3, <br /> 一起 元宇宙,<br /> 一起 DAO.</HeroP>) : <HeroP><br/><br/><br/><br/></HeroP>}
          {/* <HeroBtn ><Link to="/dashboard" className='HeroBtnLink' style={{textDecoration:"none",color:"#339C97"}}>Dashboard </Link></HeroBtn> */}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
