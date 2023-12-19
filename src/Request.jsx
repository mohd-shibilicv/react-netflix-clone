export const MOVIE_API_KEY = 'ef12b60a90a8809132ba81a30016ed1e'
const MOVIE_API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjEyYjYwYTkwYTg4MDkxMzJiYTgxYTMwMDE2ZWQxZSIsInN1YiI6IjY1N2Q3MmIyMWRhN2E2MDczMjJhNjAzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHy6ytPU8l50szYVJO_XUdlyCro6s3B54sj3GBL6K28'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${MOVIE_API_KEY}`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&with_genres=27&sort_by=popularity.desc`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_API_KEY}&language=en-US&page=2`,
};

export default requests;