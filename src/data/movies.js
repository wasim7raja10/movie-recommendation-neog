export const movies = [
    {
        name: "Casino Royale",
        year: 2006,
        rating: 8,
        genre: ["Action", "Adventure", "Thriller"]
    },
    {
        name: "Avengers: Infinity War",
        year: 2018,
        rating: 8.4,
        genre: ["Action", "Adventure", "Sci-Fi"]
    },
    {
        name: "Mission: Impossible - Ghost Protocol",
        year: 2011,
        rating: 7.4,
        genre: ["Action", "Thriller"]
    },
    {
        name: "The Da Vinci Code",
        year: 2006,
        rating: 6.6,
        genre: ["Mystery", "Thriller"]
    },
    {
        name: "Saving Private Ryan",
        year: 1998,
        rating: 8.6,
        genre: ["Drama", "War"]
    },
    {
        name: "Titanic",
        year: 1997,
        rating: 7.9,
        genre: ["Drama", "Romance"]
    }
]

const genreArray = movies.map(item => item.genre)

export const genres = [...new Set(genreArray.flat())]