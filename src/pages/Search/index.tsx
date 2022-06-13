import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ISearchItem } from '../../@types/search';
import AnimeCard from '../../components/AnimeCard';
import { searchByName } from '../../libs/api/get/search';
import styles from './styles.module.css';

const Search: React.FC = () => {
    const { query } = useParams();
    const [animes, setAnimes] = useState<ISearchItem[]>([]);

    useEffect(() => {
        if (query) {
            searchByName(query).then(setAnimes);
        }
    }, [query]);

    return (
        <main className={styles.container}>
            <h1>Search: {query}</h1>
            <div className={styles.items}>
                {animes.map((anime) => (
                    <AnimeCard key={anime.title} anime={anime} />
                ))}
            </div>
        </main>
    );
};

export default Search;
