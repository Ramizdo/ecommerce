import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://res.cloudinary.com/dhoq9gmwh/image/upload/v1711599072/Logo_ldpufd.png"
        alt="Logo Ecommerce"
        className="logo"
      />
    </Link>
  );
};

export default Logo;
