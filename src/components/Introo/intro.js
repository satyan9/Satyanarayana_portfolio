import React from "react";
import './intro.css';

const Intro = () => {
const onButtonClick = () => {
    const timestamp = new Date().getTime();
    const pdfUrl = `/satyanarayanareddy_gcpdataengineering.pdf?t=${timestamp}`; // bust cache
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "satyanarayanareddy_gcpdataengineering.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


    return (
        <section id="intro">
            <div className="introcontent">
                <span className="name">SATYANARAYAN REDDY KOLAGATLA</span>
                <span className="s2">Data Engineering</span>
                <span className="s3">
                    Python, ETL Developer, PL/SQL, BigQuery, GCS, Dataplex
                </span>
                <button className="Btn" onClick={onButtonClick}>
                    Resume
                </button>
            </div>
        </section>
    );
};

export default Intro;
