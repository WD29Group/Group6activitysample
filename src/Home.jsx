import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserProf from "./UserProf";
import UserPost from "./UserPost";
import TimeCal from "./TimeCal";
function Home({ posts }) {
  const [attendance, setAttendance] = useState({
    timeIn: null,
    timeOut: null,
  });
  const [clock, setClock] = useState();
  const [date, setDate] = useState();

  setInterval(() => {
    setClock(() => new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="colm1 col-xs-3 col-sm-3 col-sm-3">
            <br />
            <div class="colmis1 col-xs-3 col-sm-3 col-sm-3">
              <UserProf />
            </div>
            <div class="colmis1 col-xs-3 col-sm-3 col-sm-3">
              <TimeCal />
            </div>
          </div>

          <div class="colm2 col-xs-3 col-sm-6">
            <br />
            <div class="colmis2 col-xs-3 col-sm-6">
              <UserPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
