import WallOfFameTitle from "./WallOfFameTitle";
import WallOfFameBackgroundImg from "../../Assets/Images/WallOfFameBackground.png";
import styles from './WallOfFameSection.module.css';
import FameListContainer from "./FameListContainer";

const WallOfFameSection = () => {
    return (
        <section
            className={`${styles['main-section']} vw-100 bg-dark pt-3`}
            style={{
                backgroundImage: `url(${WallOfFameBackgroundImg})`,
            }}
        >
            <WallOfFameTitle />
            <FameListContainer />
        </section>
    )
}

export default WallOfFameSection;