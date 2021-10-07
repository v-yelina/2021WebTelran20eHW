import React from "react";
import Users from "./Users";
import Albums from "./Albums";

export default (props) => (
  <>
    <h2 className="mr-2 my-3 text-decoration-underline">User's Albums</h2>
    <div className="row">
      <div className="col-4">
        <Users />
      </div>
      <div className="col-8">
        <ul className="list-group">
          <Albums />
        </ul>
      </div>
    </div>
  </>
);
