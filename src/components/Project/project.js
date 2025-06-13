import React from "react";
import './project.css'
import flite from '../../images/flite.jpg';
import conve from '../../images/convertor.png';
import country from '../../images/country.jpg';
import weather from '../../images/download.png';
import stress from '../../images/stress.png';

const Project = () => {
    return(
        <div id="wrapper">
  
  <div class="scroll-cards">
    <article class="scroll-cards__item" aria-label="Wie - 1">
      <h2>Airline Booking Page</h2>
      <img src={flite} alt=""></img>
      <p>Developed a user-friendly airline booking page using frontend technologies to streamline flight reservations. Key features include robust flight search, seat selection, and an intuitive booking process with responsive design. Integrated validation, error handling, and payment gateways for secure transactions. Successfully launched, receiving positive user feedback. Collaborated with backend developers for seamless integration. Future plans include enhancing features like fare comparison and conducting usability testing for refinement. GitHub Repository:<a href="https://satyan9.github.io/airlinebooking/">Link</a></p>
    </article>
    <article class="scroll-cards__item" aria-label="Wie - 1">
      <h2>Currency Converter</h2>
      <img src={conve} alt=""></img>
      <p>The Converter link is a dynamic web application seamlessly integrating frontend technologies and APIs to offer real-time currency conversion rates. With features like live exchange rates and an intuitive interface, users can swiftly convert currencies for transactions. The project ensures optimal viewing across devices. Future enhancements include historical exchange rates, user personalization, and currency trend charts, reflecting my expertise in frontend development and API integration, delivering accurate conversions and a user-friendly experience. GitHub Repository:<a href="https://satyan9.github.io/currency-convertor/">Link</a></p>
    </article>
    <article class="scroll-cards__item" aria-label="Wie - 1">
      <h2>Country and it`s Capital</h2>
      <img src={country} alt=""></img>
      <p>This project demonstrates my frontend development and API integration skills. Using HTML, CSS, JavaScript, and AJAX, I created an intuitive interface for seamless country and capital searches. Leveraging the REST Countries API, the app fetches detailed data on population, currency, and language. Responsive design with Bootstrap ensures accessibility on all devices. Future plans include user authentication, interactive maps, and multilingual support, reflecting my commitment to user-friendly solutions and modern practices. GitHub Repository:<a href="https://satyan9.github.io/satyan/">Link</a></p>
    </article>
    <article class="scroll-cards__item" aria-label="Wie - 1">
      <h2>Weather Report</h2>
      <img src={weather} alt=""></img>
      <p>This project is a modern web application utilizing React.js to provide users with real-time weather information globally. Through API integration, it fetches current weather data, including temperature, allowing users to plan activities efficiently. The user-friendly interface features interactive elements and responsive design, ensuring seamless viewing across devices. This project showcases my proficiency in frontend development and API integration, delivering accurate forecasts and a superior user experience while reflecting my commitment to innovation in web development. GitHub Repository:<a href="https://satyan9.github.io/Weather-App/">Link</a></p>
    </article>
    <article class="scroll-cards__item" aria-label="Wie - 1">
      <h2>Stress analysis and care prediction</h2>
      <img src={stress} alt=""></img>
      <p>This project is an innovative application developed with embedded C programming on Arduino Uno. It integrates a control circuit and a heartbeat sensor to analyze real-time heartbeat data and predict stress levels. This project offers users insights into stress levels and provides recommendations for stress management and care. Featuring real-time heartbeat monitoring, stress analysis, and care predictions, it showcases my expertise in embedded systems and commitment to leveraging technology for health and well-being. Future enhancements include data logging, mobile app integration, and machine learning integration to further enhance accuracy and functionality.</p>
    </article>  
  </div>
</div>
    )
}
export default Project