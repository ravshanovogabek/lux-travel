import React from 'react';
import './about.css'

// Replace these URLs with the URLs of your customer images
const customerImages = [
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-1.92e41e7c.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-4.d5deb143.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-5.926dcab8.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-6.a48a032a.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-7.98626f45.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-8.213626b8.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-9.e274dba9.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-10.4dbc9984.png&w=256&q=75',
  'https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollage-11.fbb9e366.png&w=256&q=75',
  'https://www.bruisedpassports.com/wp-content/uploads/2023/07/Couple-travel-guide-from-India-to-Uzbekistan-itinerary-bruised-passports-16.jpg',
];

const About = () => {
  return (
    <section id='about'>
    <div className="about-section">
      <h1>Biz haqimizda quyidagi video orqali batafsil bilib oling</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/48PSJqwZVIc"  // Updated URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1>
      2,000 dan ortiq mijozlarimiz bizning xizmatlarimizdan mamnun
      </h1>

      <h3>Bizga ishonch bildirgan mijozlarimizning suratlaridan namunalar</h3>
      
      <div className="customer-photos">
        {customerImages.map((image, index) => (
          <img key={index} src={image} alt={`Customer ${index + 1}`} className="customer-photo" />
        ))}
      </div>
    </div>
    </section>
  );
};

export default About;
