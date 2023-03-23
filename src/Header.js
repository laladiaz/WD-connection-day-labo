import logo from "./assets/images/logo.png"


export const Header = () => {
    return (
      <div className= "head"> 
            <img src={logo} className="logo" alt="logo e-commerce" />
            <button className="buttonCart">My Cart</button>
        
      </div>
    )
  }