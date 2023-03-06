import React from 'react'

function Selection(props) {
    console.log(props);
      
    props.classList.remove("show");
      props.classList.add("hide");
     
}

export default Selection
