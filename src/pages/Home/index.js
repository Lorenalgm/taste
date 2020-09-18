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
                <div className="section-principal-options">
                    <div className="principal-options-images">
                        <div className="featured">
                            <img src="" alt="About the food" />
                        </div>
                        <div className="featured">
                            <img src="" alt="About the food" />
                        </div>
                    </div>
                    <div className="principal-options-text">
                        <h3>Nós temos deliciosas comidas típicas e caseiras</h3>
                        <p>Experiente os pratos especialmente preparados para você.</p>
                    </div>
                </div>
                <div className="section-about-app">
                    <div className="app-images">
                        
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home;
