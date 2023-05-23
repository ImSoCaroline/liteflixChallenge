import axios from 'axios';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

export async function getNowPlayingMovies(): Promise<Movie[]> {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/now_playing',
    {
      params: {
        api_key: '6f26fd536dd6192ec8a57e94141f8b20',
      },
    }
  );
  return response.data.results;
}

export async function getMovies(): Promise<Movie[]> {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: '6f26fd536dd6192ec8a57e94141f8b20',
      language: 'en-US',
      page: 1,
    },
  });

  return response.data.results;
}
