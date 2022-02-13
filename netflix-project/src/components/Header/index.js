import logo from "../../assets/images/netflix-logo.png";
import userImage from "../../assets/images/user-netflix.png";
import BasicModal from "../../pages/Dashboard/BasicModal";
import { BlackHeader } from "./styles";

const Header = ({ blackHeader }) => {
  console.log(blackHeader);
  return (
    <BlackHeader className={blackHeader ? "black-header" : ""}>
      <a href="/">
        <img src={logo} className="logo" alt="logo"></img>
      </a>

      <div>
        <BasicModal userImage={userImage} />
      </div>
    </BlackHeader>
  );
};
export default Header;
