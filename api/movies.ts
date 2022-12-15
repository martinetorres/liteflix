// Should be on .env file, is set here only to avoid an aditional step to run it locally
const BASE_URL='https://api.themoviedb.org';

export const getFeaturedMovie = async () => {
    const results = await fetch(`${ BASE_URL }/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`)
        .then(res => res.json())
        .then(data => data);
        
    return results.results[0];
}

export const getPopularMovies = async () => {
    const results = await fetch(`${ BASE_URL }/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`)
        .then(res => res.json())
        .then(data => data);
        
    return results.results.slice(1, 5);
}