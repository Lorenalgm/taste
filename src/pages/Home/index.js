import React from 'react'

function Home(){
    return(
        <div className="container">
            <header>
                <h1>Taste</h1>
                <div className="car">
                </div>
            </header>
            <main>
                <div className="section-hero">
                    <div className="hero-content">
                        <h1>Comidas deliciosas estão esperando por você</h1>
                        <a href="#">Ver menu</a>

                        <div className="food-options">
                            <div className="option">x</div>
                            <div className="option">y</div>
                            <div className="option">z</div>
                        </div>
                    </div>
                    <img src="" alt="Food" />
                </div>
            </main>
        </div>
    )
}

export default Home;
