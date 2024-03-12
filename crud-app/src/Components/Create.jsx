/* eslint-disable no-undef */
import { useState } from "react";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate(); // Assign useNavigate() to history variable

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post("https://65efade9ead08fa78a50c191.mockapi.io/crud-youtube", {
        name: name,
        email: email,
      }, { headers: header })
      .then(response => {
        console.log(response.data);
        // Handle response data or any other actions upon successful request
        // Navigate after successful submission
        history("/read"); // Use history variable to navigate
      })
      .catch(error => {
        console.error('Error occurred:', error);
        // Handle errors
      });
  };

  return (
    <>
      <div>
        <h1>Create</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
