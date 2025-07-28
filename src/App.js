import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import HealthPackages from './components/HealthPackages';
import Header from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeVisitAndTiming from './components/HomeVisitAndTiming';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  return (
    <div className="bg-light" data-aos="fade-up">
      {/* HEADER SECTION */}
      <Header />
      {/* HERO SECTION */}
      <Hero />
      {/* HOME VISIT AND TIMING SECTION */}
      <HomeVisitAndTiming />
      {/* HEALTH PACKAGES SECTION */}
      <HealthPackages />      
      {/* CONTACT SECTION */}
      <Contact />
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

const packages = [
  {
    title: '₹699/- Basic Body Check Up',
    tests: [
      'CBC MP',
      'Urine',
      'Lipid Profile',
      'SGPT',
      'Calcium',
      'FBS',
      'Creatinine'
    ]
  },
  {
    title: '₹350/- Diabetic Profile',
    tests: [
      'FBS',
      'HBA1C',
      'Avg Glucose',
      'Creatinine',
      'Urine (Glucose & Acetone)'
    ]
  },
  {
    title: '₹999/- Routine Profile',
    tests: [
      'CBC MP ESR (17)',
      'Urine R/M (16)',
      'Lipid Profile (8)',
      'Liver Profile (SGPT, Bilirubin)(4)',
      'Blood Group',
      'Calcium',
      'FBS',
      'Creatinine',
      'Uric Acid',
      'TSH'
    ]
  },
  {
    title: '₹1899/- Body Check Up',
    tests: [
      'CBC MP ESR (17)',
      'Urine R/M (16)',
      'Lipid Profile (8)',
      'Liver Profile (10)',
      'Kidney Profile (4)',
      'Arthritis Panel (uric acid, calcium, RA)',
      'Blood Group',
      'FBS',
      'TSH',
      'HIV',
      'HBsAg'
    ]
  },
  {
    title: '₹2999/- Full Body Check Up',
    tests: [
      'CBC MP ESR (17)',
      'Urine R/M (16)',
      'Lipid Profile (8)',
      'Liver Profile (10)',
      'Kidney Profile (4)',
      'Arthritis Panel (uric acid, calcium, RA)',
      'Vitamin B-12',
      'Vitamin D-3',
      'T3 T4 TSH',
      'Blood Group',
      'FBS',
      'HIV',
      'HBsAg',
      'HBA1C'
    ]
  }
];


export default App;
