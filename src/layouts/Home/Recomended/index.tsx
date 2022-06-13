import React from 'react';
import AnimeCardSkeleton from '../../../components/Skeletons/AnimeCardSkeleton';
import styles from './styles.module.css';

const Recomended: React.FC = () => (
    <div className={styles.list}>
        <h1>Recomended</h1>
        <div className={styles.items}>
            <AnimeCardSkeleton />
        </div>
    </div>
);

export default Recomended;
