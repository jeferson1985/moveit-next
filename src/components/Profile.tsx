import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGGOg2HrI7gvg/profile-displayphoto-shrink_800_800/0/1615405264196?e=1620864000&v=beta&t=n2ovfHge_rO5EHPNr4Rt4kicTCFkCDnU9de1p5ceAK4" />
            <div>
                <strong>Jeferson Ribeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                     level {level}
                </p>
            </div>
        </div>

        

    );
}