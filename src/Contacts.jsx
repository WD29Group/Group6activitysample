import { Link } from "react-router-dom";
function Contacts() {
  return (
    <>
      <center>
        <div className="p-3 mt-2 mb-2 frostedglass3 xtransp">
          <h1>Contact us</h1>
          <h3>
            Twitter:
            <a href="#">@KodegoGroup6</a>
          </h3>
          <h3>
            Facebook:
            <a href="#">@KodegoG6</a>
          </h3>
          <h3>
            Github:
            <a href="#">@G6repository</a>
          </h3>
          <h3>
            Telegram:
            <a href="#">@Group_6</a>
          </h3>
          <h3>
            Instagram:
            <a href="#">@G6Kodego</a>
          </h3>
          <h3>
            Line:
            <a href="#">@g6iduno</a>
          </h3>
        </div>
        <span>
          <iframe
            src="https://maps.google.com/maps?q=2880%20Broadway,%Manila&t=&z=13&ie=UTF8&iwloc=&output=embed"
            height="400"
            width="600"
            title="gmap_canvas"
          ></iframe>
        </span>
      </center>
    </>
  );
}
export default Contacts;
