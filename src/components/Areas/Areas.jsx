import React from "react";
import "./areas.css";
import { FaUsers, FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const areasData = [
    {
        title: "Sherwood Resort",
        days: "2 kun",
        people: "20 ta odam",
        location: "O'zbekiston",
        oldPrice: "$1,200",
        newPrice: "$1,000",
        description: "Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.",
        imgUrl: "https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frest-card1.2d77f2e6.jpeg&w=384&q=75",
        rating: 4 // Assuming a rating out of 5
    },
    {
        title: "Wellmore Resort",
        days: "2 kun",
        people: "20 ta odam",
        location: "O'zbekiston",
        oldPrice: "$1,200",
        newPrice: "$1,000",
        description: "Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.",
        imgUrl: "https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frest-card2.38f43817.png&w=384&q=75",
        rating: 5 // Assuming a rating out of 5
    },
    {
        title: "Parkent ijod uyi",
        days: "2 kun",
        people: "20 ta odam",
        location: "O'zbekiston",
        oldPrice: "$1,200",
        newPrice: "$1,000",
        description: "Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.",
        imgUrl: "https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frest-card3.b821677e.jpeg&w=384&q=75",
        rating: 5 // Assuming a rating out of 5
    }
];

const Areas = () => {
    return (
        <div className="areas">
            <div className="areas-header">
                <h1>Dam olish maskanlarimiz</h1>
                <p>Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing</p>
            </div>
            <div className="areas-container">
                {areasData.map((area, index) => (
                    <div className="area-card" key={index}>
                        <img src={area.imgUrl} alt={area.title} className="area-image" />
                        <div className="area-content">
                            <h3 className="area-title">{area.title}</h3>
                            <div className="area-details">
                                <span><FaClock /> {area.days}</span>
                                <span><FaUsers /> {area.people}</span>
                                <span><FaMapMarkerAlt /> {area.location}</span>
                            </div>
                            <div className="area-rating">
                                {[...Array(5)].map((_, starIndex) => (
                                    <FaStar
                                        key={starIndex}
                                        className={`star ${starIndex < area.rating ? 'filled' : ''}`}
                                    />
                                ))}
                            </div>
                            <p className="area-description">{area.description}</p>
                            <div className="area-pricing">
                                <span className="new-price">{area.newPrice}</span>
                                <span className="old-price">{area.oldPrice}</span>
                            </div>
                            <a className="book-button" href="#faq">Ko'proq bilib oling</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Areas;
