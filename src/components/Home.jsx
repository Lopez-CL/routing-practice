import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>¡Bienvenidos!</h2>
            <Link to={"/about"}>Sobre</Link>
        </div>
    )
}

export default Home