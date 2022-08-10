import React from 'react';
import Hero from '../Hero';
import Products from '../Products';
import {productDataTwo } from '../Products/data';
import Statistics from '../Statistics';
import Features from '../Features';
import {productData } from '../Features/data';
import SimpleForm from "./SimpleForm"

export default function LandingPage() {
    return (
        <div>
      <Hero />
      <Products heading='加入我们元学DAO!' data={productDataTwo} />
      <Statistics />
      <Features heading='都有什么?' data={productData} />
      {/* <SimpleForm/> */}
      </div>
    );
}