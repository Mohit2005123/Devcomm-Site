import CFN from "../Components/CreateForNSUT/CFNCompiled";
import Projects from '../Components/Projects/Projects';
import PastEvents from '../Components/PastEvents/PastEvent';
import Banner from '../Components/Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <Projects />
            <CFN />
            <PastEvents/>
        </>
    )
}

export default Home;