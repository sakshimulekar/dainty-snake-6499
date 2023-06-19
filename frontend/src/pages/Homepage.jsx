import React from "react";
import Navbar from "../components/Navbar";
import "./homepage.css";
import Footer from "../components/Footer";

function HomePage() {
  let nowSell = [
    {
      title: "New Games",
      img: "https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-new-games.png",
    },
    {
      title: "Controllers & Accessories",
      img: "https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-controllers.png",
    },
    {
      title: "Collectibles",
      img: "https://gamefly.gameflycdn.com/shared/retail/images/nmhp/products-collectibles.png",
    },
  ];

  return (
    <div id="container" border="1px solid red">
      <div
        className="headImage"
        style={{
          width: "100%",
          height: "600px",
         textAlign:"center",
        }}
      >
        {/* <Navbar /> */}
        <div className="headContainer">
          <div style={{ marginTop: "60px" }}>
            <h1 style={{ color: "white", fontSize: "50px" }}>
              Rent Thousands of Games & Movies
            </h1>
            <h4 style={{ color: "grey", fontSize: "30px" }}>
              NO LATE FEES. CANCEL ANYTIME.
            </h4>
          </div>
          <div>
            <button
              style={{
                color: "white",
                fontSize: "25px",
                backgroundColor: "orange",
                padding: "10px 35px",
                marginTop: "30px",
              }}
            >
              START FREE TRIAL
            </button>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "18px", marginTop: "40px" }}>
              {" "}
              Buy consoles, controllers, arcades, new games, and gaming
              collectibles
            </p>
          </div>
        </div>
      </div>

      <div style={{textAlign: "center"}}>
        <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "50px" }}>
          GameFly now sells consoles, controllers, games, and collectibles for
          gamers
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
          }}
        >
          {nowSell.map((e) => (
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  paddingTop: "20px",
                }}
              >
                {e.title}
              </h3>{" "}
              <img src={e.img} />{" "}
              <button
                style={{
                  fontWeight: "bold",
                  color: "white",
                  background: "orange",
                  padding: "5px 150px",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "60px",
          textAlign: "center"
        }}
      >
        <div>
          <img src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-shipping-light.png" />
          <p style={{ marginTop: "20px", fontWeight: "bold", color: "grey" }}>
            We Rush Your Games To You <br /> FREE Shipping
          </p>
        </div>
        <div>
          <img src="arrow.png" style={{ width: "60px" }} />
        </div>

        <div>
          <img src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discs-light.png" />
          <p style={{ marginTop: "20px", fontWeight: "bold", color: "grey" }}>
            Swap Games Anytime
            <br /> Thousands To Choose From
          </p>
        </div>
        <div>
          <img src="arrow.png" style={{ width: "60px" }} />
        </div>

        <div>
          <img src="https://gamefly.gameflycdn.com/assets/theme/icon-hiw-discount-light.png" />
          <p style={{ marginTop: "20px", fontWeight: "bold", color: "grey" }}>
            Keep The Games You Love <br />
            With A Great Discount
          </p>
        </div>
      </div>

      <div style={{backgroundColor:"rgb(243,243,243)",width:"100%",height:"150px",display:"flex",justifyContent:"space-evenly",alignItems: "center", marginTop: "50px",}}>
        <h1 style={{fontWeight:"bold",fontSize:"20px"}}>RENT THOUSANDS OF GAMES & MOVIES</h1>
        <button style={{ color:"white",background:"orange",padding: "15px 60px",fontWeight:"bold",}}>START FREE TRAIL</button>
        <h1 style={{fontWeight:"bold",fontSize:"20px"}}> NO LATE FEES.  CANCEL ANYTIME.</h1>
      </div>
      <Footer/>





    </div>
  );
}

export default HomePage;
