import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbId}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              imgUrl={movie.imgUrl}
              imdbUrl={movie.imdbUrl}
            />
          </li>
        ))
      }
    </ul>
  </>
);
