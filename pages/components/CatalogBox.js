import Image from 'next/image';
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
                ? <Image 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    src={`/${background}-min.png`} 
                    alt={`${background}`}
                    quality={100} 
                    width={width} 
                    height={height} />
                : <Image 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    src={`/${background}-WL-min.png`}
                    alt={`${background} width logo`}
                    quality={100} 
                    width={width} 
                    height={height} />
            }
            <h3>{ message }</h3>
        </div>
    )
}

export default CatalogBox;