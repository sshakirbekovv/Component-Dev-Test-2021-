import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import {Link, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/categories/categories.actions';
import { selectCategories } from '../../redux/categories/categories.selectors';
import logo from '../../../assets/images/abc_logo.svg';

const Header: React.FC = () => {
    
    const dispatch = useDispatch();
  
    const categories = useSelector(selectCategories);
  
    useEffect(() => { 
  
     dispatch(fetchCategories());
    }, []);
    
    let loc = useLocation().pathname;
    return (
        <>
        
        <header className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.Header__body}>
                    <nav  className={styles.Header__menu}>
                        <div className={styles.Header__logo}>
                            <Link to='/'><img src={logo} className={styles.Header__img} alt="logo"/></Link>
                        </div>
                        <ul>
                            {
                                categories && categories.pages.map((category,i) => (
                                <li key={i} className={styles.HeaderNav__link}>
                                    <Link to={`/${category.slug}`} className={loc.indexOf(`/${category.slug}`) === 0 ? styles.active : ""}>
                                        {category.title}
                                    </Link>
                                </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className={styles.Header__contact}>
                        <Link to='/'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;