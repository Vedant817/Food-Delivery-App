import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link href="#" className="btn btn-primary">
            Go somewhere
          </Link>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success-subtle rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success-subtle rounded">
              <option value={"Half"}>Half</option>
              <option value={"Full"}>Full</option>
            </select>
            <div className="d-inline h-100 fs-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
