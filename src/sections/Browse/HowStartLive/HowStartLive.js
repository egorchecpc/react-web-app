import "./HowStartLive.css";
import { SectionHeader } from "../../../components";
import service_01 from "../../../assets/images/service-01.jpg";
import service_02 from "../../../assets/images/service-02.jpg";
import service_03 from "../../../assets/images/service-03.jpg";

const HowStartLive = () => {
  return (
    <>
      <div className="how-start-live">
        <SectionHeader>
          <span className="how-to-start-title">
            How To Start Your <em>Live Stream</em>
          </span>
        </SectionHeader>

        <div className="all-info-cards">
          <div className="content-wrapper">
            <div className="info-card">
              <img src={service_01} alt="" />
              <h5>Go To Your Profile</h5>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="info-card">
              <img src={service_02} alt="" />
              <h5>Live Stream Button</h5>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="info-card">
              <img src={service_03} alt="" />
              <h5>You Are Live</h5>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>

        <div className="btn-how">
          <a href="/Profile">Go To Profile</a>
        </div>
      </div>
    </>
  );
};

export default HowStartLive;
