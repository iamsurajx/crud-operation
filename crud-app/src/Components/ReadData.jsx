import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReadData = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("https://65efade9ead08fa78a50c191.mockapi.io/crud-youtube").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  function handleDelete(id) {
    axios.delete(`https://65efade9ead08fa78a50c191.mockapi.io/crud-youtube/${id}`).then(() => getData())
  }

  function setToLocalStorage(id, name, email) {
    localStorage.setItem("id", id),
      localStorage.setItem("name", name),
      localStorage.setItem("email", email)
  }

  useEffect(() => {
    getData();
  }, []);

  getData();
  return (
    <>
      <h1>Read</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <Link to="/update">
                        <button type="button" className="btn btn-success" onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                      </Link>
                    </td>

                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button>
                    </td>
                  </tr>

                </tbody>
              </>
            )
          })
        }
      </table>


      <Link to="/"><button type="button" className="btn btn-primary">Create New</button></Link>
    </>
  )
}

export default ReadData;
