import { Link } from "react-router-dom";
import "./ProfileStream.css";
import { SecondaryButtonGL } from "../../components/index";
import Profile from "../../assets/images/profile.jpg";


const ProfileStream = () => {

  return (
    <div className="profile-top-side">
      <div className="center-content">
        <div className="cov">
          <img src={Profile} alt="" />
        </div>

        <div className="content">
          <h6>Offline</h6>
          <h3>Alan Smithee</h3>
          <p>
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>

          <div className="btn-c">
            <SecondaryButtonGL>
              <Link to="/Browse">Start Live Stream</Link>
            </SecondaryButtonGL>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="container-right-content">
          <div className="itm">
            Games Downloaded <span>3</span>
          </div>
          <div className="itm">
            Friends Online <span>16</span>
          </div>
          <div className="itm">
            Live Streams <span>None</span>
          </div>
          <div className="itm">
            Clips <span>29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStream;
