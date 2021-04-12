import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
    contentItemFooter: string,
}


const Footer: React.FC<Props> = ({contentItemFooter}) => {

    return (
        <>
        <footer className={styles.Footer}>
            <div className={styles.container}>
                <div className={styles.Footer__body}>
                   <p>{ contentItemFooter }</p>
                   <p> <Link to='/'>
                       Let's talk.
                      <FontAwesomeIcon icon={faArrowRight} className={styles.Footer__icon}/>
                   </Link> </p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;