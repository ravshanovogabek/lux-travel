import React from "react";
import "./services.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const servicesData = [
  {
    feature: "10 soatlik trening",
    daily: <FaCheck style={{ color: 'green' }} />,
    monthly: <FaCheck style={{ color: 'green' }} />,
    annually: <FaCheck style={{ color: 'green' }} />,
  },
  {
    feature: "Kofe va tushlik",
    daily: <FaTimes style={{ color: 'red' }} />,
    monthly: <FaCheck style={{ color: 'green' }} />,
    annually: <FaCheck style={{ color: 'green' }} />,
  },
  {
    feature: "PDF formatida kurs fayllari",
    daily: <FaCheck style={{ color: 'green' }} />,
    monthly: <FaCheck style={{ color: 'green' }} />,
    annually: <FaCheck style={{ color: 'green' }} />,
  },
  {
    feature: "Shaxsiy maslahat",
    daily: <FaTimes style={{ color: 'red' }} />,
    monthly: <FaCheck style={{ color: 'green' }} />,
    annually: <FaCheck style={{ color: 'green' }} />,
  },
  {
    feature: "Sertifikat",
    daily: <FaTimes style={{ color: 'red' }} />,
    monthly: <FaCheck style={{ color: 'green' }} />,
    annually: <FaCheck style={{ color: 'green' }} />,
  },
];

const Services = () => {
  return (
    <section id="services">
    <div className="services">
      <h1>Xizmatlar va narxlar</h1>
      <p>O'zingizga ma'qul tarifni tanlang</p>
      <div className="services-tables-container">
        <div className="services-table-wrapper">
          <table className="services-table">
            <thead>
              <tr>
                <th>Xususiyatlar</th>
                <th>Kundalik</th>
                <th>Oylik</th>
                <th>Yillik</th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map((service, index) => (
                <tr key={index}>
                  <td>{service.feature}</td>
                  <td>{service.daily}</td>
                  <td>{service.monthly}</td>
                  <td>{service.annually}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td><a className="book-button" href="#faq">Ko'proq</a></td>
                <td><a className="book-button" href="#faq">Ko'proq</a></td>
                <td><a className="book-button" href="#faq">Ko'proq</a></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
