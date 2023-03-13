import React from "react";

// Styling for homepage

const styles = {


  heroImg: {
    height: "300px",
    width: "400px",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: "25px"
   
  },

  bannerText: {
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "200%",
    fontFamily: "'Open Sans', sans-serif",
    color: "#7c7a7a"

  },

jumbotron: {
    height: "400px",
    backgroundColor: "#e9ecef",
}
}



// Homepage function

function Homepage() {
  return (

    
    <div className="jumbotron" style={styles.jumbotron} >
      <div className="container">
        <div className="row" >
          <div className="col-sm" style={styles.bannerText}>
            Developer and designer. Passionate about crafting sleek user
            experiences.
            <br></br>
             Welcome to my portfolio.
          </div>
          <div className="col-sm">
            <img src="images/hero-img.png" style={styles.heroImg} />
          </div>
        </div>
      </div>

    </div>
 
    
  );
}

export default Homepage;
