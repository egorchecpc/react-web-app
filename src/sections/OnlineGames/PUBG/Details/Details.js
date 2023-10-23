import "./Details.css";
import {
  RelatedGamesCard,
  SecondaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../../../components";
import RelatedGamesData from "../../../../Data/RelatedGamesData";
import Pubg_01 from "../../../../assets/images/Pubg-01.jpg";
import Pubg_02 from "../../../../assets/images/Pubg-02.jpg";
import Pubg_03 from "../../../../assets/images/Pubg-03.jpg";
import { FaStar, FaDownload, FaGamepad, FaServer } from "react-icons/fa";

const Details = () => {
  const cards = RelatedGamesData.map((card) => {
    if (card.id === "Related-Games-Data_0") {
      return (
        <RelatedGamesCard
          key={card.id}
          image={card.image}
          title="PUBG"
          category={card.category}
          rate="4.8"
          download="4.3M"
        />
      );
    } else {
      return "";
    }
  });

  return (
    <>
      <SectionHeader>
        <span className="title-cent">PUBG DETAILS</span>
      </SectionHeader>
      <SectionWrapper>
        <div className="box1-and-2">
          <div className="box-1">{cards}</div>

          <div className="box-2">
            <div className="txt-icons">
              <span className="icon">
                <FaStar />
              </span>
              <h6>4.8</h6>
            </div>

            <div className="txt-icons">
              <span className="icon">
                <FaDownload />
              </span>
              <h6>4.3M</h6>
            </div>

            <div className="txt-icons">
              <span className="icon">
                <FaServer />
              </span>
              <h6>30GB</h6>
            </div>

            <div className="txt-icons">
              <span className="icon">
                <span>
                  <FaGamepad />
                </span>
              </span>
              <h6>Action</h6>
            </div>
          </div>
        </div>

        <div className="three-imgs">
          <div className="img-div">
            <img src={Pubg_01} alt="" />
          </div>
          <div className="img-div">
            <img src={Pubg_02} alt="" />
          </div>
          <div className="img-div">
            <img src={Pubg_03} alt="" />
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <span className="c-btn">
          <SecondaryButton>Download PUBG !</SecondaryButton>
        </span>
      </SectionWrapper>
    </>
  );
};

export default Details;
