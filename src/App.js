import "./App.scss";
import {food} from "./food.data.js"
function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="logo"><a href="https://vk.com"><img src="logo.png" ></img></a></div>
        <div className="menu">
          <div className="menu-item"><button>OUR SERVICES</button></div> 
          <div className="menu-item"><button>ABOUT US</button></div>
          <div className="menu-item"><button>PRODUCTS</button></div>
          <div className="menu-item"><button>PET CARE</button></div>
          <div className="menu-item"><button>CONTACT</button></div>
          <div className="sign"><button>SIGN IN</button></div>
          <div className="reg"><button>REGISTER</button></div>
        </div>
      </header>
      <div className="item-one">
        <div className="inner-items">
                <div className="taking-care">
                      <div className="care">Taking care for your Smart Dog !</div>
                      <div className="care-text">Human–canine bonding is the relationship between dogs and humans.</div>
                      <div className="care-but"><button>Explore More<img className="bebra" src="ArrowR.png"></img></button></div>
                </div>
                <div className="dogs">
                      <div className="onedog"><img src="onedog.png"></img></div>
                      <div className="onefoot"><img src="onefoot.png"></img></div>
                      <div className="twodog"><img src="twodog.png"></img></div>
                      <div className="maindog"><div className="dogback"></div><img className="bebra" src="maindog.png"></img></div>
                      <div className="twofoot"><img src="twofoot.png"></img></div>
                      <div className="threedog"><img src="threedog.png"></img></div>
                      <div className="threefoot"><img src="threefoot.png"></img></div>
                      <div className="fourdog"><img src="fourdog.png"></img></div>
                </div>
        </div>
      </div>
      <div className="Services">
          <div className="name">
                <div className="Categories">Services Category </div>
                <div className="line"></div>
          </div>
          <div className="list">
              <div className="list-item"><img className="categories" src="Grooming.png"></img>Grooming</div>
              <div className="list-item2"><img className="categories" src="Health.png"></img>Healthcare</div>
              <div className="list-item"><img className="categories" src="daycare.png"></img>Daycare</div>
              <div className="list-item2"><img className="categories" src="Training.png"></img>Training</div>
              <div className="list-item"><img className="categories" src="Hyginic.png"></img>Hyginic care</div>
          </div>
        
      </div>
      <div className="video">
        <div className="l-cont">
            <div className="v-pic"><img src="video.png"></img></div>
            <div className="picture"></div>
            <div className="food"></div>
        </div>
        <div className="r-cont">
          <div className="textname">          <div className="paw"></div>
            Dogs do speak, but only to those who know how to listen.</div>
          <div className="text">Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream. 
                                Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o. 
                                Pie muffin topping cake. Pudding biscuit caramels topb</div>
          <button>Explore more<img className="bebra" src="ArrowR.png"></img></button>
        </div>
      </div>
      <div className="foodmenu">
          <div className="head">
                  <div className="text">Dog Nutrients & Food</div>
                  <div className="line"></div>
          </div>
          <div className="sales">
              <div className="sale">25 % OFF all Products </div>
              <button>View More<img className="bebra" src="ArrowR.png"></img></button>
            </div>
          <div className="food">
            <div className="item">
                  <div className="picture">
                        <div className="pic"><img src="unfood1.png"></img></div>
                        <div className="back"></div>
                  </div>
                  <div className="desc"><h1>Drools | 3KG</h1>
                  Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food </div>
                  <button>Buy Now</button>
            </div>
            <div className="item">
            <div className="picture">
                        <div className="pic"><img src="unfood2.png"></img></div>
                        <div className="back"></div>
                  </div>
                  <div className="desc"><h1>Canine Creek 4 KG</h1>
                    Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</div>
                  <button>Buy Now</button>
            </div>
            <div className="item">
            <div className="picture">
                        <div className="pic"><img src="unfood3.png"></img></div>
                        <div className="back"></div>
                  </div>
                  <div className="desc"><h1>Biscork Biscuits</h1>
                    Adult chicken and egg Egg, Chicken  Dry Adult Dog Food</div>
                  <button>Buy Now</button>
            </div>
          </div>

      </div>
      <div className="manwdog">
        <div className="l-cont">
            <div className="text">
                <div className="title">No one appreciates the very special genius of your conversation as the dog does.</div>
                <div className="txt">Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream.biscuit caramels topb</div>
            </div>
            <button>Explore more<img className="bebra" src="ArrowR.png"></img></button>
        </div>
        <div className="r-cont">
            <div className="paw"><img src="paw2.png"></img></div>
            <div className="ball"><img src="ball.png"></img></div>
            <div className="man"><img src="man.png"></img></div>
            <div className="bone"><img src="bone.png"></img></div>
            <div className="collar"><img src="collar.png"></img></div>
        </div>
      </div>
      <div className="customer">
        <div className="tittle">
              <div className="name">Happy Customer </div>
              <div className="line"></div>
        </div>
        <div className="customers">
              <div className="item"><img src="c1.png"></img></div>
              <div className="item"><img src="c2.png"></img></div>
              <div className="item"><img src="c3.png"></img></div>
        </div>
        <button>Explore more<img className="bebra" src="ArrowR.png"></img></button>
          
      </div>
      <div className="footer">
            <div className="join">Join us with Affiliate program</div>
            <div className="mail">
                <div className="ema">
                  <div className="icon"></div>
                  <input className="type" placeholder="Type your email address here"></input>
                </div>
                <button>Submit now<img className="bebra" src="ArrowR.png"></img></button>
            </div>
            <div className="contacts">
                  <div className="social">
                        <div className="follow"></div>
                        <div className="socials">
                            <div className="face"><div className="icon"><img src="face.png"></img></div></div>
                            <div className="insta"><div className="icon"><img src="inst.png"></img></div></div>
                        </div>
                  </div>
                  <div className="dat">
                    <div className="day">
                        <div className="name">Boarding & Day care</div>
                        <div className="numb">(616)-459-8622</div>
                        <div className="adress">2125  Howard Street ,Grand Rapids, MI  Michigan</div>
                    </div>
                    <div className="hp">
                        <div className="name">Health care</div>
                        <div className="numb">(616)-566-5896</div>
                        <div className="adress">2125  Howard Street ,Grand Rapids, MI  Michigan</div>
                    </div>
                  </div>
            </div>
            <div className="line"></div>
            <div className="menu">
                    <div className="l-cont"> © all rights reserved &  design  with love by bharat</div>
                    <div className="r-cont">
                        <div className="services">our services</div>
                        <div className="about">About us </div>
                        <div className="shipping">Shipping</div>
                        <div className="faq">FAQ</div>
                        <div className="contact">Contact</div>
                    </div>
                  </div>
      </div>

    </div>
  );
}

export default App;
