import Choose from "../Banks/ChooseBank";
import BankList from "../Banks/BankList";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Access from "../../Assets/access.png";
import { Link } from "react-router-dom";

export default function AccessBank() {
  const [showNow, setShowNow] = useState(false);
  const clickShow = () => {
    setShowNow(!showNow);
    console.log(showNow);
  };
  return (
    <div className="listB listBA" onClick={clickShow}>
      <BankList BankImage={Access} BankName="Access" className="freecur" />
      <div className={showNow ? "showBank" : "NotShowBank2"}>
        <Link to={`/AccessLogin`}>
          <Choose
            bank={Access}
            lo="/AccessLogin"
            bankName="Acces Internet Banking"
            bankMobile="Acces Mobile Banking"
            closeMeNow={<AiOutlineClose className="cur" onClick={clickShow} />}
          />
        </Link>
      </div>
    </div>
  );
}
