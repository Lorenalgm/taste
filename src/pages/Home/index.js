import React from 'react'
import image4 from '../../assets/image4.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/plate-vegan.png';
import image1 from '../../assets/image1.png';
import './style.css';
import { FaCartPlus, FaBeer, FaPizzaSlice, FaHamburger, FaBirthdayCake } from 'react-icons/fa';

function Home(){
    return(
        <div className="container">
            <header>
                <h1>Taste</h1>
                <div className="car">
                    <FaCartPlus className="cart-plus" />
                </div>
            </header>
            <main>
                <div className="section-hero">
                    <div className="hero-content">
                        <h1>Comidas deliciosas estão esperando por você</h1>
                        <a className="see-menu" href="https://github.com/Lorenalgm">Ver menu</a>

                        <div className="food-options">                            
                            <div className="option"><FaHamburger className="option-icon" /></div>
                            <div className="option"><FaBeer className="option-icon" /></div>
                            <div className="option"><FaBirthdayCake className="option-icon" /></div>
                            <div className="option"><FaPizzaSlice className="option-icon" /></div>
                        </div>
                    </div>
                    <img src={image4} alt="Food" />
                </div>
                <div className="section-principal-options">
                    <div className="principal-options-images">
                        <div className="featured">
                            <img className="image2" src={image2} alt="About the food" />
                            <div className="featured-description">
                                <h3>Frango grelhado</h3>
                                <p>Com salada</p>
                                <p><b>R$20,00</b></p>
                            </div>
                            <div className="car car-featured">
                                <FaCartPlus className="cart-plus" />
                            </div>
                        </div>
                        <div className="featured">
                            <img className="image3" src={image3} alt="About the food" />
                            <div className="featured-description">
                                <h3>Risoto</h3>
                                <p>Vegano</p>
                                <p><b>R$20,00</b></p>
                            </div>
                            <div className="car car-featured">
                                <FaCartPlus className="cart-plus" />
                            </div>
                        </div>
                    </div>
                    <div className="principal-options-text">
                        <h3>Nós temos deliciosas comidas típicas e caseiras</h3>
                        <p>Experiente os pratos especialmente preparados com todo carinho e qualidade para você.</p>
                    </div>
                </div>
                <div className="section-plate">
                    <div className="plate-content">
                        <h1>Sabor e qualidade!</h1>
                        <p>Escolhemos os melhores ingredientes, com altíssima qualidade para oferecer a melhor refeição para você!</p>
                    </div>
                    <img className="image1" src={image1} alt="About the food" />
                </div>
                <div className="section-reserve">
                    <div className="reservation-content">
                        <p>Fale conosco</p>
                        <h1>Gostaria de fazer uma reserva?</h1>
                    </div>
                    <a href="https://github.com/Lorenalgm" className="see-menu reserve-now">Reservar agora</a>
                </div>
            </main>
            <footer>
               <div className="footer-content">
                <div className="title">
                        <h1>Taste</h1>
                    </div>
                    <div className="services">
                        <h2>Nossos serviços</h2>
                        <p>Preços</p>
                        <p>Acompanhamento</p>
                        <p>Reporte um problema</p>
                        <p>Termo de serviços</p>
                    </div>
                    <div className="company">
                        <h2>Nossa empresa</h2>
                        <p>Entre em contato</p>
                        <p>Equipe</p>
                    </div>
                    <div className="address">
                        <h2>Contato</h2>
                        <p>Av. FAB, 345 - Centro</p>
                        <p>@taste</p>
                        <p>(96)91232-1234</p>
                        <p>contato@taste.com</p>
                    </div>
               </div>
            </footer>
        </div>
    )
}

export default Home;
