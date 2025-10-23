import React from 'react';
import Carousel from 'react-material-ui-carousel'
import devweek from '../../Assets/Images/devweek.png'
import techxp from '../../Assets/Images/techx-p.png'
import techxc from '../../Assets/Images/techx-c.png'
import techxi from '../../Assets/Images/techx-i.png'
import qickstart from '../../Assets/Images/qickstart.jpg'
import createfornsut from '../../Assets/Images/createfornsut.png'
import codecharades from '../../Assets/Images/codecharades.png'
import codecombat from '../../Assets/Images/code-combat.png'
import techromatic from '../../Assets/Images/techromatic.png'
import orientation from '../../Assets/Images/orientation.png'
import gsoc from '../../Assets/Images/gsoc.jpg'
import blogathon from '../../Assets/Images/blogathon.jpg'
import leftarrow from '../../Assets/Images/leftarrow.png'
import innovate from '../../Assets/Images/innovate.jpg'
import pongwars from '../../Assets/Images/ponwars.jpg'
import roadtodsa from '../../Assets/Images/roadtodsa.jpg'
import blitzkrieg from '../../Assets/Images/blitzkrieg.png'
import techroast from '../../Assets/Images/tech-roast.png'
import missiondecrypt from '../../Assets/Images/mission-decrypt.png'
import innovatensut from '../../Assets/Images/innovate-nsut.png'
import avinya from '../../Assets/Images/avinya.png'
import devweeks from '../../Assets/Images/dev-week.png'
import intaglios from '../../Assets/Images/intaglios.png'
import "./PastEvent.scss"
import Item from "./EventCard"

const PastEvent = ({ id }) => {
    const hasWindow = typeof window !== 'undefined';
    var items = [
        {
            name: "Dev Week",
            description: "Dev Week is DevComm NSUT’s flagship week-long celebration of technology, packed with coding contests, workshops, design and content events — giving students a chance to learn, compete, and showcase their skills across multiple domains.",
            logo: devweeks
        },
        {
            name: "ROAD TO DSA",
            description: "Calmness took over chaos as DSA cheat codes were given away. On August 21, 2023, DevComm successfully hosted a speaker session in collaboration with Coding Blocks. With over 300 students in audience , Mr. Kartik Mathur, Co - founder of Coding Blocks and an NSUT alumnus, graced the stage, bridging the gap between students and their dream companies. Amidst confusion, doubts were turned into direction and road to dsa was laid           ",
            logo: roadtodsa
        },
        {
            name: "INNOVATE NSUT",
            description: "Innovate is DevComm NSUT’s flagship hackathon, where students collaborate in teams to develop creative solutions for real-world college challenges, combining innovation, mentorship, and competitive pitching to showcase their ideas.",
            logo: innovatensut
        },
        {
            name: "Avinya'25",
            description: "Witnessed various revolutionary prototypes as students pushed the boundaries of technology in a 24 hour hackathon, problems incorporating web3, bluetooth mesh network, NFT marketplace, AI powered canteens, and digital forensics.",
            logo: avinya
        },
        {
            name: "Blitzkrieg",
            description: "Blitzkreig is a fast-paced coding or competitive programming event by DevComm NSUT, where participants solve challenging problems under strict time limits, testing speed, accuracy, and algorithmic skills.",
            logo: blitzkrieg
        },
        {
            name: "TECHX - CODE WARS",
            description: "Brush up your coding skills, it's time for some unleashing wars, making your debugging talents the only swords you have! DevComm proudly presents its much-anticipated event of TechX’22, CodeWars! The event will be held on 9th April, in offline mode. So, make your algorithms do the work for you as we have a prize pool worth 50k on the door! Let your cin>>input Winner and come here to code.",
            logo: techxc
        },
        {
            name: "Intaglios",
            description: "Intaglios is DevComm NSUT’s annual tech‑creative fest, featuring a mix of competitions, workshops, and showcases that blend coding, design, and innovation, celebrating student talent across multiple domains.",
            logo: intaglios
        },
        {
            name: "QICKSTART - QISKIT FALL FEST",
            description: "Have you always wanted to try your hands on Quantum Computing but you don't know where to knock? Are you aware that the opportunity is right in your hands? DevComm, in collaboration with IBM, is hosting the Qiskit Fall Fest— an annual fest by IBM stepping foot for the first time in NSUT. So to kickstart your journey with the Quantum, IBM will be throwing at you fun workshops, challenges and hackathons to harness your skills.",
            logo: qickstart
        },
        {
            name: "CREATE FOR NSUT",
            description: "Hola NSUT peeps! DevComm is here to give you some food for thought. We bring to you yet another event, Create For NSUT. An event that could make your dreams come true, wherein you can share your ideas  and pitch and implement them as well! An Ideathon where you can lead real-life projects inspired by the ideas you pitch in. The winners are offered guidance and supported by a team of developers by DevComm that help them implement their idea and develop it into a working project. The winners would also be awarded certificates and amazing prizes worth INR 10,000.",
            logo: createfornsut
        },
        {
            name: "Tech Roast",
            description: "Tech Roast is a quirky DevComm NSUT event where participants humorously “roast” trending technologies, tools, or concepts — mixing wit with tech knowledge to create a fun, engaging community activity.",
            logo: techroast
        },
        {
            name: "Code Combat",
            description: "CodeCombat — a gamified platform that makes learning coding and DSA fun through interactive gameplay, where players write real code to progress, solve challenges, and build problem-solving skills.",
            logo: codecombat
        },
        {
            name: "Mission Decrypt",
            description: "Mission Decrypt is a cybersecurity and cryptography‑themed challenge by DevComm NSUT, where participants decode encrypted messages or solve security puzzles, honing problem-solving and hacking skills in a competitive setup.",
            logo: missiondecrypt
        },
        {
            name: "ORIENTATION",
            description: "With the first semester in full swing, come the freshest opportunities to choose the paths you will be going down in college. DevComm brings, Orientation program to introduce you all of these technologies in depth and how you can get a kickstart into the same with us. We will tour you through the projects DevComm has worked on, shower insights from seniors who will be your mentors and learn what interests your batch has in tech this year.",
            logo: orientation
        },
        {
            name: "ROADMAP TO GSoC",
            description: "Google Summer of Code (GSoC) is a global online program that brings new contributions into open source software organizations. All your questions are going to be answered here at DevComm, Maanas Talwar, one of our Core Team members who cracked GSoC in his second year of college, is here to take you through his journey and provide you with a roadmap to GSoC.",
            logo: gsoc
        },
        {
            name: "BLOGATHON",
            description: "DevComm is pumped to announce Blogathon- a blog writing competition for and on Nescii. We will be entertaining blog entries on the platform from all students who shall be competing for likes across their write-ups. That, combined with an internal judging criteria will hold for the declaration of the winner. So, lay your fingers firm on the keyboard and save the date.",
            logo: blogathon
        }
    ]

    const containerStyle = {
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'linear-gradient(180deg, #0f172a, #1e293b)',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
        marginBottom: '80px'
    }

    const titleStyle = {
        fontSize: '2.6rem',
        fontWeight: '700',
        color: '#e2e8f0',
        textAlign: 'center',
        marginBottom: '40px',
        letterSpacing: '-0.5px',
        fontFamily: 'Raleway, sans-serif'
    }

    const slideOuter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        background: 'rgba(30, 41, 59, 0.85)',
        borderRadius: '16px',
        boxShadow: '0 10px 35px rgba(0,0,0,0.5)',
        minHeight: '300px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }

    const logoStyle = {
        maxWidth: '220px',
        maxHeight: '180px',
        objectFit: 'contain',
        marginRight: '35px',
        borderRadius: '12px',
        boxShadow: '0 4px 14px rgba(255,255,255,0.05)'
    }

    const descStyle = {
        fontSize: '1.05rem',
        lineHeight: 1.7,
        color: '#cbd5e1',
        fontFamily: 'Inter, sans-serif'
    }

    const nameStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#f8fafc',
        marginBottom: '10px'
    }

    return (
        <section id={id} style={containerStyle}>
            <h1 style={titleStyle}>Past Events</h1>
            <Carousel
                animation="slide"
                duration={700}
                autoPlay={true}
                interval={3500}
                swipe={true}
                cycleNavigation={true}
                navButtonsAlwaysVisible={true}
                navButtonsAlwaysInvisible={false}
                indicatorIconButtonProps={{
                    style: { padding: '6px', color: '#475569' }
                }}
                activeIndicatorIconButtonProps={{
                    style: { color: '#60a5fa' }
                }}
                indicatorContainerProps={{
                    style: { marginTop: '30px', textAlign: 'center' }
                }}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                        transition: 'background-color 0.3s ease'
                    }
                }}
                NextIcon={<img src={leftarrow} alt="next" width="42px" style={{ transform: "rotate(180deg)" }} />}
                PrevIcon={<img src={leftarrow} alt="previous" width="42px" />}
            >
                {items.map((item, i) => (
                    <div key={i} style={slideOuter}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '25px' }}>
                            <img src={item.logo} alt={item.name} style={logoStyle} />
                            <div style={{ flex: 1, minWidth: '260px' }}>
                                <h3 style={nameStyle}>{item.name}</h3>
                                <p style={descStyle}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default PastEvent;