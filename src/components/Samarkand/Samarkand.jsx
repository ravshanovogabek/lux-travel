import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./samarkand.css";

const Samarkand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <main className="samarkand">
      <header className="samarkand-head">
        <div className="max ">
          <a
            className="flex"
            href="/"
          >
            <img className='main-logo'
              alt="Logo"
              loading="lazy"
              width="50"
              height="50"
              src="https://luxtravel-astonovb.vercel.app/_next/static/media/logo.7a7ce72f.svg"
            />
          </a>
          <button className="header-button">
            <img className='main-hamburger'
              alt="Menu"
              loading="lazy"
              width="23"
              height="23"
              src="https://luxtravel-astonovb.vercel.app/_next/static/media/burger.7f790a84.svg"
            />
          </button>
        </div>
      </header>
      <section className="main-section">
        <div className="dividir">
          <h1 className="main-text">
            Oilaviy yoki yaqinlaringiz bilan maroqli hordiq chiqaring
          </h1>
          <p className="paragraph">
            Bepul konsultatsiya uchun ro’yxatdan o’ting
          </p>
          <ul className="ul">
            <li className="card">
              <h1 className="text">
                Tajriba
              </h1>
              <p className="paragraph">
                10 yildan ortiq tajribaga ega jamoa
              </p>
            </li>
            <li className="card">
              <h1 className="text">
                Qulay narxlar
              </h1>
              <p className="paragraph">
                7 kunlik sayohat $100 dan boshlanadi
              </p>
            </li>
            <li className="card">
              <h1 className="text">
                Keng tanlov
              </h1>
              <p className="text">
                Sayohatingiz davomida 10dan...
              </p>
            </li>
          </ul>
          <ul className="ul">
            <li className="btn-el ">
              <a className="hero-btn " href="#contact">
                Bepul konsultatsiya
              </a>
            </li>
            <li className="btn-ello ">
              <a className="hero-btn " href="#services">
                Xizmatlar
              </a>
            </li>
          </ul>
          <Slider {...settings} className='Slide'>
            <div>
            <img className='main-img'
                    src="https://c0.wallpaperflare.com/path/949/174/462/shallow-focus-photo-of-decorative-plates-c74762843f966201e5384009651a3c1b.jpg"
                    alt="Slider Image 1"
                  />
            </div>
            <div>
            <img className='main-img'
                    src="https://r4.wallpaperflare.com/wallpaper/619/964/973/uzbekistan-samarkand-gilded-madrasa-madrasah-tillya-kari-wallpaper-63d7a69eebcc03505efe58dc9cc4793e.jpg"
                    alt="Slider Image 2"
                  />
            </div>
            
            <div>
              <img className='main-img'
                src="https://c0.wallpaperflare.com/path/472/671/649/samarqand-uzbekistan-registan-ensemble-ruins-ee0e83fed768dc3642d67b8ed0731e97.jpg"
                alt="Slider Image 3"
              />
            </div>
            <div>
              <img className='main-img'
                src="https://r4.wallpaperflare.com/wallpaper/821/402/330/food-meat-the-dough-cuisine-wallpaper-034bd6fbe3a90ac03ab02b58af3289fb.jpg"
                alt="Slider Image 4"
              />
            </div>
            <div>
              <img className='main-img'
                src="https://r4.wallpaperflare.com/wallpaper/591/471/826/pilaf-uzbek-dish-dish-food-wallpaper-35d3e79d9ce7220ba21c1b752aec3bc8.jpg"
                alt="Slider Image 5"
              />
            </div>
            <div>
              <img className='main-img'
                src="https://c0.wallpaperflare.com/path/871/565/94/uzbekistan-samarkand-29caab74ec65b6eb10ddf8089acc4d4c.jpg"
                alt="Slider Image 6"
              />
            </div>
            <div>
              <img className='main-img'
                src="https://r4.wallpaperflare.com/wallpaper/283/698/409/sky-mo-ynoq-cloud-boat-wallpaper-d9f0c85d217afdebe6c7e80f8001566d.jpg"
                alt="Slider Image 7"
              />
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Samarkand;

                