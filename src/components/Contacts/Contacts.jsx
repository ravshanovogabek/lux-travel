import React, { useState } from 'react';
import './contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        question: '',
        termsAgreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, question, termsAgreed } = formData;
        if (!name || !phone || !question || !termsAgreed) {
            alert('Please fill in all fields and agree to the terms.');
            return;
        }

        // Telefon raqami uchun to'g'ri formatni tekshirish
        const phoneRegex = /^\+998\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert('Iltimos, to‘g‘ri telefon raqamini kiriting. Masalan, +998123456789.');
            return;
        }

        const message = `Ism: ${name}\nTelefon: ${phone}\nSavol: ${question}`;

        // Telegram bot token va chat ID
        const telegramBotToken = '7255317893:AAGkXe1Dy4kcq6xeUXM9ISSeX71BL0brrk8';
        const telegramChatId = '7251438309';

        const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: message,
                }),
            });

            if (response.ok) {
                alert('Sizning xabaringiz yuborildi!');
                setFormData({
                    name: '',
                    phone: '',
                    question: '',
                    termsAgreed: false,
                });
            } else {
                alert('Xabar yuborishda xatolik yuz berdi.');
            }
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
            alert('Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.');
        }
    };

    return (
        <section id='contacts'>
        <div className="contacts-container">
            <div className="contact-form">
                <h2 className="contact-title">Savollaringiz qoldimi?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ismingiz"
                        className="input-field"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="+998"
                        className="input-field"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="question"
                        placeholder="Savolingiz..."
                        className="textarea-field"
                        value={formData.question}
                        onChange={handleChange}
                    ></textarea>
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="terms"
                            name="termsAgreed"
                            checked={formData.termsAgreed}
                            onChange={handleChange}
                        />
                        <label htmlFor="terms">Men shartlarga roziman</label>
                    </div>
                    <button type="submit" className="submit-btn">Yuborish</button>
                </form>
            </div>
            <div className="contact-info">
                <p>Agar barcha savollaringizga mutaxassislarimizdan javob olishni istasangiz, quyidagi manzilga tashrif buyuring yoki bizga qo'ng'iroq qiling</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.793172858352!2d69.26231461572827!3d41.29949597927098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef504a87e78c1%3A0x7f858bdf64a2d61f!2sTashkent%20City!5e0!3m2!1sen!2s!4v1613983493946!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                ></iframe>
                <ul className="contact-details">
                    <li>Toshkent shahar, Manzil ko'chasi 1a</li>
                    <li>+9981234567</li>
                    <li>company.name@gmail.com</li>
                </ul>
            </div>
        </div>
        </section>
    );
};

export default Contacts;
