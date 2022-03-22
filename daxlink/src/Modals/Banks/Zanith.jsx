import Choose from "./ChooseBank";
import BankList from "./BankList";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import zenith from "../../Assets/zenith.png";
import { Link } from "react-router-dom";

export default function Zanith() {
  const [showNow, setShowNow] = useState(false);
  const clickShow = () => {
    setShowNow(!showNow);
    console.log(showNow);
  };
  return (
    <div className="listB listBA" onClick={clickShow}>
      <BankList BankImage={zenith} BankName="Zenith" className="freecur" />
      <div className={showNow ? "showBank" : "NotShowBank2"}>
        <Link to={`/ZenithLogin`}>
          <Choose
            bank={zenith}
            bankName="Acces Internet Banking"
            bankMobile="Acces Mobile Banking"
            closeMeNow={<AiOutlineClose className="cur" onClick={clickShow} />}
          />
        </Link>
      </div>
    </div>
  );
}
