import React from "react";
import './skills.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SiMysql } from "react-icons/si";
import { SiGoogledataflow } from "react-icons/si";
import { PiPipeLight } from "react-icons/pi";
import { SiGoogledataproc } from "react-icons/si";
import { BiTransfer } from "react-icons/bi";
import { FaRegSnowflake } from "react-icons/fa";
import { SiGooglebigquery } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiOracle } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";
import { SiLooker } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";



const Skills = () => {
    return(
        <div>
            
            <div id="skills">
        <span className="skilltitle" > Hello, I'm <span style={{color: "blue"}}>Satya,</span><br></br>
I'm a <span style={{color: "blue"}}>Data Engenerring</span> with a passion for <span style={{color: "blue"}}>cloud computing data pipelines, and scalability. </span>
                </span>
               
                <span className="skilldesc">
                I am currently working as an Associate Data Engineer at FIS Cloud, Hyderabad. Most of my experience is in ETL development, maintaining data pipelines and solving problems related to ETL pipelines and data warehousing.<br></br><br></br>
                In my free time, I enjoy learning new technologies and staying up to date with advancements in Data Engineering. Outside of programming, I love reading stories and watching science fiction movies. One of my all-time favorite movies is Lucy, as I find there's a lot to learn from films like it
                </span>
                </div>
        <section id="skill">
            <p className="main">Skills</p>
            <div className="skillsbars">
                <div className="skillbar"><span className="set" style={{color: "blue"}}>ETL/ ELT/ EL</span>
                    <div className="skillbarpoints">
                       <ul>
                        <span><PiPipeLight size="40px" />Data Fusion</span>
                        <span><SiGoogledataflow size="40px" />Dataflow</span>
                        <span><SiGoogledataproc size="40px" />Dataproc</span>
                        {/* <span><BiTransfer size="40px" />DataPrep</span> */}
                        </ul> 
                    </div>
                </div>
                <div className="skillbar"><span className="set" style={{color: "blue"}}>Warehouse</span>
                    <div className="skillbarpoints">
                    <ul>
                        <span><SiGooglebigquery size="40px" />BigQuery</span>
                        <span><FaRegSnowflake size="40px" />SnowFlake</span>
                        <span>Dataform</span>
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set" style={{color: "blue"}}>DashBoards</span>
                    <div className="skillbarpoints">
                    <ul>
                        <span><SiLooker size="40px" />Looker</span>
                        <span><IoLogoTableau size="40px" />Tableau</span>
                        
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set" style={{color: "blue"}}>Data Bases</span>
                    <div className="skillbarpoints">
                    <ul>
                        <span><SiMysql size="40px" />MYSQL</span>
                        <span><SiOracle size="40px" />ORACLE</span>
                        <span><BiLogoPostgresql size="40px" />POSTGRESSQL</span>
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set" style={{color: "blue"}}>programming</span>
                    <div className="skillbarpoints">
                    <ul>
                        <span><FaPython size="40px" />Python</span>
                        <span><FaJava size="40px" />JAVA</span>
                        <span><AiOutlineConsoleSql size="40px" />SQL</span>
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set" style={{color: "blue"}}> Others</span>
                    <div className="skillbarpoints">
                    <ul>
                        <span><FaGithub size="40px" />Github</span>
                        <span><FaBitbucket  size="40px" />Bit Bucket</span>
                        </ul>
                    </div>
                </div>
            </div>
      
      </section>
      </div>
  );
};
    

export default Skills