import '../style/MovieCard.css'
import { useState } from 'react'

function MovieCard({movie}){
    const [fav, setFav] = useState(false)

    function onFavoriteClick(e){
        e.stopPropagation()
        setFav(prev => !prev)
    }

    // Poster files are expected in the public/ root. If you keep them elsewhere, update this path.
    const src = movie.poster ? `/${movie.poster}` : (movie.url || '')

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={src} alt={movie.title} loading="lazy" />
                <div className="movie-overlay">
                    <button
                        className={"favorite-btn" + (fav ? ' active' : '')}
                        onClick={onFavoriteClick}
                        aria-pressed={fav}
                        title={fav ? 'Remove favorite' : 'Add to favorites'}
                    >
                        {fav ? '❤' : '♡'}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date} · {movie.rating ?? ''}</p>
            </div>
        </div>
    )
}

export default MovieCard