import MovieCard from "../components/MovieCard"

function Home(){

    const movies =[
        {id : 1, title: "The Shawshank Redemption", release_date: 1994, rating: 9.3, poster: "shawshank.jpg"},
        {id : 2, title: "The Godfather", release_date: 1972, rating: 9.2, poster: "godfather.jpg"},
        {id : 3, title: "The Dark Knight", release_date: 2008, rating: 9.0, poster: "dark_knight.jpg"},
        {id : 4, title: "Pulp Fiction", release_date: 1994, rating: 8.9, poster: "pulp_fiction.jpg"},
        {id : 5, title: "Forrest Gump", release_date: 1994, rating: 8.8, poster: "forrest_gump.jpg"},
    ]
    const handleSearch = () =>{};

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for moives..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies_grid">
                {movies.map((moive) => (
                    <MovieCard movie={moive} key={moive.id} />
                ))}
            </div>
        </div>
    )

}

export default Home