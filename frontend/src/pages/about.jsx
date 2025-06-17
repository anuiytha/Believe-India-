import React, { useEffect, useState } from "react";
import "./styles.css";
import useContentful from '../../../backend/contentful/useContentful';

const About = () => {
    const { getAboutUsPhilosophy, getAboutUsTeam, getAboutUsGetInTouch, getAboutUsTeamMembers } = useContentful();
    const [aboutSections, setAboutSections] = useState([]);
    const [aboutTeam, setAboutTeam] = useState([]);
    const [aboutGetInTouch, setAboutGetInTouch] = useState([]);
    const [aboutTeamUsMembers, setAboutTeamMembers] = useState([]);
    useEffect(() => {
        getAboutUsPhilosophy().then((data) => {
            console.log("Fetched About Us Philosophy:", data);
            setAboutSections(data);
        }).catch((error) => {
            console.error("Error fetching About Us Philosophy:", error);
        });
        getAboutUsTeam().then((data) => {
            console.log("Fetched About Us Team:", data);
            setAboutTeam(data);
        }).catch((error) => {
            console.error("Error fetching About Us Team:", error);
        });
        getAboutUsGetInTouch().then((data) => {
            console.log("Fetched About Us Get In Touch:", data);
            setAboutGetInTouch(data);
        }).catch((error) => {
            console.error("Error fetching About Us Get In Touch:", error);
        });
        getAboutUsTeamMembers().then((data) => {
            console.log("Fetched About Us Team Members:", data);
            setAboutTeamMembers(data);
        }).catch((error) => {
            console.error("Error fetching About Us Team Members:", error);
        });
    }, []);
    return (
        <div className="about-container">
            {aboutSections.map((section, index) => (
                <div key={index} className="about-hero">
                    <div className="about-hero-content">
                        {/* <img src={section.image} alt={section.name} className="about-image-philosophy" /> */}
                        <div>
                            <h2>Philosophy</h2>
                            <p>Believe India has been set up to build a platform for social enterprises and change makers. Technology is the catalyst for social change enabling people to share, communicate build together and challenge established mindsets that hold little value in the current space. This website is an endeavor for us to share the change happening all around our country:
                                <li>	We believe in being the Change </li>
                                <li>We believe in Connecting the Change Agents</li>
                                <li>We believe in sharing the Change Knowledge</li>
                                So, as to connect with more and more, we need to stay connected!
                                <br />
                                <br />
                                {/* <h3>Vision</h3>
                                A self-reliant, awakened, empowered India
                                <br />
                                <br />
                                <h3>Mission</h3> */}
                                {/* To provide a platform for dreamers, believers and doers of social actions.
                                <br />
                                <br />
                                <h3>Objectives: To</h3>
                                <li>	Establish, Incubate and Scale-up social enterprises in education, health and  livelihood sectors</li>
                                <li>	Empower vulnerable groups, economically weaker sections through market access initiatives</li>
                                <li>	Activate youth groups, sensitize children and educational institutions</li>
                                <br />
                                <h3>Approach to take up projects</h3>
                                <br />
                                <li>	Need based work. Believe India will focus to work with each community, enterprise to understand the requirements and our experience in the field</li>
                                <li>	Market based solutions. Believe India will come up with the best working solution that can be implemented on ground rather than following the has always been done this way approach</li>
                                <li>	Accountability towards Time, People and Cost</li>
                                <li>	Leave it better than you got- at every step of decision making it is important to assess how the actions of the team make it better living conditions for the community</li> */}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* About Us Team Section */}                {aboutTeam.map((section, index) => (
                <div key={index} className={`about-box ${section.align}`}>
                    {/* <img src={section.image} alt={section.name} className="about-image" /> */}
                    <div key={index} className="about-content">
                        <h2>{section.name}</h2>
                        {/* <p>{section.description}</p> */}
                        <p>Believe India is a platform set up for supporting and up-scaling of social enterprises. Believe India social enterprise model is a joint initiative of Foresight Society of Human Resource Development(FSHRD) and Society for Environmental Awareness, Rehabilitation of Child and Handicapped (SEARCH). The team has immense experience in different fields of development work such as skill development, livelihoods, craft based urban luxury products, rural utility products, crafts, health, education, agriculture, community development, rehabilitation, fair trade. It is this vast pool of ground and board room experience that has led to the start of Believe India.
                            <br />
                            <br />

                            The team works closely with rural and urban social ventures to help them upscale their projects, draw out business plans, embark into new markets, training of trainers, capacity building of producer & self help groups, marketing, design and product development support to name a few services. At the other end of the spectrum we create access to good quality products and services provided by small enterprises that customers are unaware of due to lack of branding and promotional efforts.
                        </p>

                        {/* Team Members Grid Under Section Description */}
                        <div className="team-grid">
                            {aboutTeamUsMembers.map((member, memberIndex) => (
                                <div key={memberIndex} className="team-card">
                                    <img src={member.photo} alt={member.name} className="team-photo" />
                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                    <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                                        View LinkedIn
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}




            {/* About Us Get In Touch Section */}
            <div className="about-contact">
                {aboutGetInTouch.map((getInTouch, index) => (
                    <div key={index} className={`about-box ${getInTouch.align}`}>
                        <img src={getInTouch.image} alt={getInTouch.name} className="about-image" />
                        <div className="about-content">
                            <h2>{getInTouch.name}</h2>
                            <p>{getInTouch.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default About;
