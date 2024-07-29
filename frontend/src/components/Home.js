import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import InfoSection from './InfoSection';
import Companies from './Companies';
import FormButton from './FormButton';


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <InfoSection />
      <Companies />
      <FormButton />
    </div>
  );
}

export default Home;
