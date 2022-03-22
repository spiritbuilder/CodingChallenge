import Choose from "./ChooseBank";
import BankList from "./BankList";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import first from "../../Assets/firsts.png";
import { Link } from "react-router-dom";

export default function FirstBank() {
  const [showNow, setShowNow] = useState(false);
  const clickShow = () => {
    setShowNow(!showNow);
    console.log(showNow);
  };
  return (
    <div className="listB listBA" onClick={clickShow}>
      <BankList BankImage={first} BankName="First Bank" className="freecur" />
      <div className={showNow ? "showBank" : "NotShowBank2"}>
        <Link to={`/FirstLogin`}>
          <Choose
            bankName="Acces Internet Banking"
            bankMobile="Acces Mobile Banking"
            closeMeNow={<AiOutlineClose className="cur" onClick={clickShow} />}
          />
        </Link>
      </div>
    </div>
  );
}
