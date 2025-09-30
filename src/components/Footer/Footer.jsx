import { Link } from "react-router-dom";
// import Search from "../Search/Search";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
      }}
    >
      <div className=" p-4 md:flex items-center justify-around">
        <Link to={"/"} className="text-2xl font-serif text-red-700">
          <img
            className="mx-auto h-20 object-cover rounded-t-lg"
            src="/logo.jpg"
            alt="logo"
          />
        </Link>
        <BusinessInfo />
        {/* <Search className={"items-center  hidden lg:flex"}/> */}
        <a
          className="text-black text-4xl p-3 "
          href="https://www.instagram.com/macaneros_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div>
        <p>© 2025 Macaneros. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
