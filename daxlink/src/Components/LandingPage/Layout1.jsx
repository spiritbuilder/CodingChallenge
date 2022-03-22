import { HiExternalLink } from "react-icons/hi";
export default function Layout1() {
  return (
    <div className="holdHeader">
      <div>
        <img
          src="https://mono-business-assets.s3.eu-west-2.amazonaws.com/app-logo-8QvAG0FH8Hu9xNoG-Daxlinks-logo_%281%29.png"
          alt="Logo"
          className="Logo"
        />
      </div>
      <div className="LogoText">
        <span>What's Statement Pages</span>
        <span>
          <HiExternalLink />
        </span>
      </div>
    </div>
  );
}
