import Choose from "../Banks/ChooseBank";
import BankList from "../Banks/BankList";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GTBanks from "../../Assets/GTBank.png";
import { Link } from "react-router-dom";

export default function GTBank(props) {
  const [showNow, setShowNow] = useState(false);
  const clickShow = () => {
    setShowNow(!showNow);
    console.log(showNow);
  };
  return (
    <div className="listB listBA" onClick={clickShow}>
      <BankList BankImage={GTBanks} BankName="GTBank" className="freecur" />

      <div className={showNow ? "showBank" : "NotShowBank2"}>
        <Link to={`/BankLoginModal`} style={{ cursor: "context-menu" }}>
          <Choose
            bank={GTBanks}
            bankName="GTBank Internet Banking"
            bankMobile="GTBank Mobile Banking"
            closeMeNow={<AiOutlineClose className="cur" onClick={clickShow} />}
          />
        </Link>
      </div>
    </div>
  );
}
