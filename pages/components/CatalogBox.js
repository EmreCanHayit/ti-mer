import React, {useState} from 'react';

import styles from '../../styles/CatalogBox.module.css';

const CatalogBox = ({ background, message }) => {
    const scale = 0.05;
    const width = 7000 * scale;
    const height = 4759 * scale;

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);
    return (
        <div className={`${styles.product}`}>
            {
                isHovering
                ? <img 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    src={`/${background}-min.png`} 
                    alt={`${background}`}
                    width={width} 
                    height={height} />
                : <img 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    src={`/${background}-WL-min.png`}
                    alt={`${background} width logo`}
                    width={width} 
                    height={height} />
            }
            <h3>{ message }</h3>
        </div>
    )
}

export default CatalogBox;