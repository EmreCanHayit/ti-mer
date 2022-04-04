import styles from '../../styles/BaseContainer.module.css';

const BaseContainer = () => {
    let clientHeight;
    if (typeof document !== 'undefined'){
        clientHeight = document.body.clientHeight;
    }
    
    return (
        <div className={styles.block} style={clientHeight !== undefined ? {height: clientHeight + 'px'} : {height: 'auto'}}>
            <div className={styles.mining}></div>
            <div className={styles.energy}></div>
        </div>
    )
}

export default BaseContainer;