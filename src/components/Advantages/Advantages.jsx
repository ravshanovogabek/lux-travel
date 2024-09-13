import React from 'react';
import './advantages.css';

const Advantages = () => {
  return (
    <section id='advantages'>
    <div className='advantages'>
      <div className="advantages-container">
        <h2 className="advantages-title">Nega aynan bizni tanlashingiz kerak?</h2>
        <h3 className="advantages-subtitle">Bizni tanlashingiz uchun 8 ta sabab</h3>
        <div className="advantages-grid">
          <div className="advantage-item">
            
            <h4>Tajriba</h4>
            <p>10 yildan ortiq tajribaga ega jamoa</p>
          </div>
          <div className="advantage-item">
            
            <h4>Qulay narxlar</h4>
            <p>7 kunlik sayohat $100 dan boshlanadi</p>
          </div>
          <div className="advantage-item">
            
            <h4>Keng tanlov</h4>
            <p>Sayohatingiz davomida 10dan ortiq tajribalar</p>
          </div>
          <div className="advantage-item">
            
            <h4>Go'zal shaharlar</h4>
            <p>Sifatli xizmat ko'rsatish va tanlovda yordam beramiz</p>
          </div>
          <div className="advantage-item">
            
            <h4>Xavfsizlik</h4>
            <p>Sayohatingzi xavfsiz bo'lishiga kafolat beramiz</p>
          </div>
          <div className="advantage-item">
            
            <h4>Ishonch</h4>
            <p>Bizning xizmatlarga 2000 dan ortiq mijozlar ishonch bildirgan</p>
          </div>
          <div className="advantage-item">
            
            <h4>Umumiy guruh</h4>
            <p>Safar davomida yeg'ilgan kontentlar bitta umumiy guruhda</p>
          </div>
          <div className="advantage-item">
            
            <h4>Yuqori sifat</h4>
            <p>Sayohatingiz davomida komfort mashinalar va mehmonxonalardan foydalanasiz</p>
          </div>
        </div>
        <a className="book-button" href="#faq">Joyni band qilish</a>
      </div>
    </div>
    </section>
  );
};

export default Advantages;
