import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // jab page load ho localstorege k adata yah show hoga
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://65efade9ead08fa78a50c191.mockapi.io/crud-youtube/${id}`,
      {
        name: name,
        email: email,
      }
    ).then(() => {
      navigate("/read");
    })
  };


  return (
    <>
      <h1>Update</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input type="text" className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </>
  )
}

export default Update;
