

export const getFeaturedMovie = async () => {
    // TODO: Move api url to .env file
    // TODO: Handle endpoint errors
    const results = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        .then(res => res.json())
        .then(data => data);
        
    return results.results[0];
}