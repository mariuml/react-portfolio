import React, { useState } from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  // Setting the components initial state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Updating the input's state
    setFormData({
      ...formData,
    });
  };

  return (
    <div>
      {/* Contact form */}

      <div>
      <p id="intro">For any other enquiries, please use the contact form below.</p>
        <form>
                 
          <form className="form-group">
            <label for="firstName"> First Name </label>
            <input
              value={formData.firstName}
              name="firstName"
              type="text"
              onChange={handleInputChange}
              placeholder="First Name"
              className="form-control"
            />
          </form>

          <form className="form-group">
            <label for="lastName"> Last Name </label>
            <input
              value={formData.lastName}
              name="lastName"
              type="text"
              onChange={handleInputChange}
              placeholder="Last Name"
              className="form-control"
            />
          </form>

          <form className="form-group">
            <label for="email"> Email </label>
            <input
              value={formData.email}
              name="email"
              type="text"
              onChange={handleInputChange}
              placeholder="Contact Email"
              className="form-control"
            />
          </form>

          <form className="form-group">
            <label for="message"> Enter Message </label>
            <textarea
              value={formData.message}
              name="message"
              type="text"
              onChange={handleInputChange}
              placeholder="Enter Message"
              className="form-control"
              rows="3"
            ></textarea>
          </form>
          <button className="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>

      <footer className="footer">
        {/* <!-- Github --> */}

        <a href="https://github.com/mariuml">
          <button type="button"> Github </button>
        </a>

        {/* <!-- Linkedin --> */}
        <a href="https://linkedin.com/in/mariumladha">
          <button type="button"> Linkedin </button>
        </a>

        {/* <!-- Resume --> */}
        <a href="https://drive.google.com/file/d/1dxx6LRoorL2XjsL8VIvbwf-zwunWv30Q/view?usp=sharing">
          <button type="button"> Resume </button>
        </a>

        {/* <!-- Email --> */}
        <a href="mailto:mariumladha97@gmail.com">
          <button type="button"> Email </button>
        </a>
      </footer>
    </div>
  );
}

export default ContactPage;
