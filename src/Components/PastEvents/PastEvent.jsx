import React from 'react';
import Carousel from 'react-material-ui-carousel'
import devweek from '../../Assets/Images/devweek.png'
import techxp from '../../Assets/Images/techx-p.png'
import techxc from '../../Assets/Images/techx-c.png'
import techxi from '../../Assets/Images/techx-i.png'
import qickstart from '../../Assets/Images/qickstart.jpg'
import createfornsut from '../../Assets/Images/createfornsut.png'
import codecharades from '../../Assets/Images/codecharades.png'
import codeunknown from '../../Assets/Images/codeunknown.png'
import techromatic from '../../Assets/Images/techromatic.png'
import orientation from '../../Assets/Images/orientation.png'
import gsoc from '../../Assets/Images/gsoc.jpg'
import blogathon from '../../Assets/Images/blogathon.jpg'
import leftarrow from '../../Assets/Images/leftarrow.png'
import innovate from '../../Assets/Images/innovate.jpg'
import pongwars from '../../Assets/Images/ponwars.jpg'
import roadtodsa from '../../Assets/Images/roadtodsa.jpg'
import "./PastEvent.scss"
import Item from "./EventCard"

const Events = (props) => {
    const hasWindow = typeof window !== 'undefined';
    var items = [
        {
            name: "XeroCrypt",
            description: "Xerocrypt, a 24-hour cryptic hunt held from August 26 to 27, witnessed 500+ participants engaging in deciphering intricate codes. A true test of wit and perseverance, Xerocrypt brought out the best in everyone who dared to crack the cryptic challenge and helped channel their inner Sherlock making it an unforgettable intellectual showdown. The event proved to be highly challenging, culminating in winners claiming prizes worth 40k            ",
            logo: devweek
        },
        {
            name: "ROAD TO DSA",
            description: "Calmness took over chaos as DSA cheat codes were given away. On August 21, 2023, DevComm successfully hosted a speaker session in collaboration with Coding Blocks. With over 300 students in audience , Mr. Kartik Mathur, Co - founder of Coding Blocks and an NSUT alumnus, graced the stage, bridging the gap between students and their dream companies. Amidst confusion, doubts were turned into direction and road to dsa was laid           ",
            logo: roadtodsa
        },
        {
            name: "INNOVATE NSUT",
            description: "Innovate NSUT was a 7 themed hackathon that was held on 5th and 6th April, 2023 for a duration of 30 hours. The event witnessed 1000+ registrations from teams all over India and 50 teams made it to the final round. The winners were awarded from a prize pool worth 5 lacs. The hackathon turned out to be a brilliant opportunity for participants to showcase their innovative spirit and polish their technical skills.     ",
            logo: innovate
        },
        {
            name: "PONG WAR",
            description: "A fun Pong Wars event that combined skills and companionship was organised by DevComm during Freshers Week 22. Teams competed to successfully place ping pong balls into cups, showcasing their skill. The occasion promoted networking and friendly competition in a fun environment. While embracing the competitive atmosphere of Freshers' Week 22, participants had the chance to relax and interact with their peers         ",
            logo: pongwars
        },
        {
            name: "TECHX - PSYCHOTECH TECH QUIZ",
            description: "With technological jargon in hand, come on in quizzers! We're here with PsychoTech, a tech quiz that starts where your thinking stops! We'd be seeing some pro players show off from all over the Delhi circuit. The quiz will take place on April 8th, and there will be some fantastic prizes up for grabs. Participate and let your intellect bring you awards!",
            logo: techxp
        },
        {
            name: "TECHX - CODE WARS",
            description: "Brush up your coding skills, it's time for some unleashing wars, making your debugging talents the only swords you have! DevComm proudly presents its much-anticipated event of TechX’22, CodeWars! The event will be held on 9th April, in offline mode. So, make your algorithms do the work for you as we have a prize pool worth 50k on the door! Let your cin>>input Winner and come here to code.",
            logo: techxc
        },
        {
            name: "TECHX - INNOVATE NSUT",
            description: "Hola Geeks, Allow your creativity to bring ideas into action! We're returning with a bang, balancing your days and nights with a 24-hour offline hackathon - Innovate NSUT! The competition will be held on the 9th and 10th of April. Participants and winners will receive wonderful prizes from a prize pool of INR 6 lacs. as well as the opportunity to display their unique abilities with technology in their hands. Prepare yourself and your computers for a fantastic event worth attending.",
            logo: techxi
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
            name: "CODE CHARADES",
            description: "Have you ever imagined a place where you could combine code and one of the most popular social word guessing games? We give our word for it, for coding for the sake of having a blast could be liberating. This Moksha, DevComm introduced to you 'Code Charades', a 3-5 member team event on Day 3 of the fest. Essentially a debugging competition, you'll be racing against the clock to generate output data types that lead to movie/song clues and might fetch you a well-deserved victory. Prizes worth INR 4k pooled in.",
            logo: codecharades
        },
        {
            name: "CODE UNKNOWN",
            description: "To give you a peek into what our society has to offer, DevComm is bringing to you, “Code Unknown”. But wait - you know what the best part is? There are no prerequisites or technical know how, since all the documentation about the language will be given before the start of the competition. ",
            logo: codeunknown
        },
        {
            name: "TECHROMATIC",
            description: "Techchromatic - a Tech/Pop culture quiz for the freshers week of batch 2025. The quiz consists of multiple rounds with teams competing against each other under time pressure. Get the feel of a real quizzing environment. Don’t try to cheat because the quiz master is very smart and knows what all is happening and takes note of it. ",
            logo: techromatic
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

    return (
        <div id='pastevents' className='container'>
            <div className={`d-flex align-items-center justify-content-center`}>
                <h1 className={`title fw-bold`}>Past Events</h1>
            </div>
            <Carousel
            navButtonsAlwaysVisible={hasWindow ? window.innerWidth<700?false:true : true}     
            navButtonsAlwaysInvisible={hasWindow ?window.innerWidth<700?true:false : false}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'gray'
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    padding: '1px',    //
                    color: 'white'       
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px', // 
                }
        
            }}
            navButtonsProps={{          
                style: {
                    backgroundColor: 'black'
                }
            }} 
                NextIcon={<img src={leftarrow} alt="next" className="arrow" width="45px" style={{transform: "rotate(180deg)",opacity: "1", display: (typeof window !== 'undefined')? (window.innerWidth > 700 ? "block" : "none" ) : "block"}}/>}
                PrevIcon={<img src={leftarrow} alt="previous" className="arrow" width="45px"/>}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

export default Events;