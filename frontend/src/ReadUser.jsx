import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ReadUser() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  // Fetch and set data to the state
  useEffect(() => {
    fetchData();
  }, []);

  // Funciton to fetch and set data to the state
  const fetchData = () => {
    axios
      .get(`http://localhost:8081/user/read/${id}`)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Student Details</h2>
          <h2>{student.ID}</h2>
          <h2>{student.Name}</h2>
          <h2>{student.Email}</h2>
        </div>
        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${student.ID}`} className="btn btn-info">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ReadUser;
