import './Navbar.css';
import logo from './logo.png'
import logImg from './user.png'
import cart from './cart.png'
import sandwichmenu from './sandwichmenu.png'

function Navbar() {
const openCart = () =>{
    const cart = document.getElementById("cart");
    cart.style.display = "flex";
}

const openMenu = () =>{
  const menu = document.getElementById("sandwich-menu");
  menu.style.display = "flex";
}
const closeMenu = () =>{
  const menu = document.getElementById("sandwich-menu");
  menu.style.display = "none";
}
  return (
      <nav>
        <div className="logo">
          <img src={logo} alt='Logo'></img>
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">PC</a></li>
          <li><a href="">Console</a></li>
          <li><a href="">Catalog</a></li>
        </ul>
        <div className="searchBar">
          <input id="search" type="search" placeholder="Search Games"></input>
        </div>
        <div className="log-reg" >
          <img src={cart} onClick={openCart}></img>
          <p >Username</p>
          <img src={logImg}></img>
        </div>
        <img className="sandwich-menu-icon" src={sandwichmenu} onClick={openMenu}></img>

        <div id="sandwich-menu">
          <span onClick={closeMenu} >&times;</span>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">PC</a></li>
            <li><a href="">Console</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
          <div className="sandwich-searchBar">
            <input id="sandwich-search" type="search" placeholder="Search Games"></input>
          </div>
          <div className="sandwich-log-reg" >
            <img src={cart} onClick={openCart}></img>
            <img src={logImg}></img>
            <p >Username</p>
          </div> 
        </div>
      </nav>
  );
}

export default Navbar;
