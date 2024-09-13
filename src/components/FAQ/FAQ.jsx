import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const faqs = [
        {
            question: "Mahsulotlaringizning yaroqlilik muddati qancha?",
            answer: "Biz zamonaviy Yevropa texnologiyalari va uskunalaridan foydalanamiz, bu esa mahsulotlarimizning yuqori sifatini ta'minlaydi."
        },
        {
            question: "Ishlab chiqarishda qanday texnologiyalar qo'llaniladi?",
            answer: "Biz zamonaviy Yevropa texnologiyalari va uskunalaridan foydalanamiz, bu esa mahsulotlarimizning yuqori sifatini ta'minlaydi."
        },
        {
            question: "Qanday komponentlar ishlatiladi?",
            answer: "Biz zamonaviy Yevropa texnologiyalari va uskunalaridan foydalanamiz, bu esa mahsulotlarimizning yuqori sifatini ta'minlaydi."
        },
        {
            question: "Mahsulotlaringizni qayerdan sotib olishim mumkin?",
            answer: "Biz zamonaviy Yevropa texnologiyalari va uskunalaridan foydalanamiz, bu esa mahsulotlarimizning yuqori sifatini ta'minlaydi."
        },
    ];

    return (
        <section id='faq'>
            <div className="faq-container">
                <h2 className="faq-title">Mijozlarimizdan kelgan savollar</h2>
                <div className="faq-content">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <span className="faq-toggle">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
