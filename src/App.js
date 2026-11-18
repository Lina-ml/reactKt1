
import './App.css';
import logo from "./img/Logo.png"
import like from "./img/like.png"
import cart from "./img/Vector.png"
import user from "./img/User.png"
import search from "./img/search.png"
import iphone from "./img/IphoneImage.png"
import playstation from "./img/playstation5.png"
import appleAir from "./img/appleAir.png"
import appleVision from "./img/appleVision.png"
import mac from "./img/macbook.png"
import phones from "./img/Phones.png"
import  smart from "./img/smart.png"
import camera from  "./img/Cameras.png"
import Headphones from "./img/Headphones.png"
import Computers from "./img/Computers.png"
import Gaming from "./img/Gaming.png"
import cards14 from "./img/cards14.png"
import likeCard from "./img/cardsLike.png"
import camera6K from "./img/camera6K.png"
import smartCard from "./img/smartCard.png"
import airPods from "./img/AirPods.png"
import smartSamsung from "./img/smartSamsung.png"
import Galaxy from "./img/Galaxy.png"
import BudsFe from "./img/BudsFe.png"
import appleIpad from "./img/applepad.png"
function App() {
  const cards = [
    {
      id: 1,
      likeCard: likeCard,
      image: cards14,
      title: "Apple iPhone 14 Pro Max",
      subtitle: "128GB Deep Purple",
      price: "$900"
    },
    {
      id: 2,
      likeCard: likeCard,
      image: camera6K,
      title: "Blackmagic Pocket Cinema ",
      subtitle: "Camera 6k",
      price: "$$2535"
    },
    {
      id: 3,
      likeCard: likeCard,
      image: smartCard,
      title: "Apple Watch Series 9 GPS ",
      subtitle: "41mm Starlight Aluminium ",
      price: "$399"
    },
    {
      id: 4,
      likeCard: likeCard,
      image: airPods,
      title: "AirPods Max Silver",
      subtitle: "Starlight Aluminium ",
      price: "$549"
    },
    {
      id: 5,
      likeCard: likeCard,
      image: smartSamsung,
      title: "Samsung Galaxy Watch6 ",
      subtitle: "Classic 47mm Black",
      price: "$369"
    },
    {
      id: 6,
      likeCard: likeCard,
      image: Galaxy,
      title: "Galaxy Z Fold5 Unlocked |",
      subtitle: " 256GB | Phantom Black",
      price: "$1799"
    },
    {
      id: 7,
      likeCard: likeCard,
      image: BudsFe,
      title: "Galaxy Buds FE",
      subtitle: "Graphite",
      price: "$99.99"
    },
    {
      id: 8,
      likeCard: likeCard,
      image: appleIpad,
      title: "Apple iPad 9 10.2 64GB Wi-Fi ",
      subtitle: "Silver (MK2L3) 2021",
      price: "$398"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
       <div className='logo'>
        <img src={logo}/>
       </div>
       <div className='input'>
        <img  src={search}/>
        <input placeholder='search'/>
       </div>
       <div className='nav'>
        <a>Home</a>
        <a>About</a>
        <a>contact Us</a>
        <a>Blog</a>
       </div>
       <div className='icon'>
        <img src={like}/>
        <img src={cart}/>
        <img src={user}/>
       </div>
      </header>
      <div className='baner'>
        <div className='color'>
         
          <div className='text'>
            <div className='textB'>
            <p>Pro.Beyond.</p>
            <h1>
            IPhone 14 Pro
            </h1>
            <p1>Created to change everything for the better. For everyone </p1>
            
            <button className='btnBanner'>
              Shop Now
            </button>
            </div>
            
            <div className='imageContainer'>
      <img src={iphone} alt="iPhone 14 Pro" /> 
    </div>
          </div>
                </div>
      </div>
      <div className='photoBaner'>
        <div className='photos'>
          <div className='photo1'>
          <img src={playstation}/>
          </div>
          <div className='photo23'>
          <img src={appleAir}/>
          <img src={appleVision}/>
          </div>
          <div className='photo4'>
          <img src={mac}/>
          </div>
        </div>
       
       
       
      </div>

<div className='browse'>
  <h1>Browse By Category</h1>
  <div className='iconss'>
  <div className='icons'>
    <img src={phones}/>
    <p>Phones</p>
  </div>
  <div className='icons'>
    <img src={smart}/>
    <p>Smart Watches</p>
  </div>
  <div className='icons'>
    <img src={camera}/>
    <p>Cameras</p>
  </div>
  <div className='icons'>
    <img src={Headphones}/>
    <p>Headphones</p>
  </div>
  <div className='icons'>
    <img src={Computers}/>
    <p>Computers</p>
  </div>
  <div className='icons'>
    <img src={Gaming}/>
    <p>Gaming</p>
  </div>
  </div>
  
</div>

<div className="textCard">
  
  <a1>New Arrival</a1>
  <a>Bestseller</a>
  <a>New Arrival</a>
  </div>
 <div className='cards'>
 {cards.map((item) => (
    <div className="card" key={item.id}>
      <div className="cardIcon">
        <img src={item.likeCard} className="likee" />
      </div>
      <div className="cardTop">
        <img src={item.image} />
      </div>
      <div className="title">
        <h4>{item.title}</h4>
        <h5>{item.subtitle}</h5>
      </div>
      <div className="price">
        <h>{item.price}</h>
      </div>
      <button className="btn">Buy Now</button>
    </div>
  ))}

 </div>
 
    </div>
  );
}

export default App;
