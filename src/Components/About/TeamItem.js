import styles from './TeamItem.module.css';

const TeamItem = (props) => {
    return (
        <div className={`${styles['team-item']} mb-2`}>
            <div className={`${styles['img-container']} ${(props.position==="President")? styles['president']: ''}`}>
                <img src={props.image} alt='member'></img>
            </div>
            <h3 className={styles['name']}>{props.name}</h3>
            <h3 className={styles['position']}>{props.position}</h3>
        </div>
    )
}

export default TeamItem;