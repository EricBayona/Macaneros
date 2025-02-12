import { Link } from "react-router-dom";
import Search from "../Search/Search";
import BusinessInfo from "../BusinessInfo/BusinessInfo";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #799899, #aebfac, #acd7b6)",
      }}
      
    >
      <div className=" p-4 md:flex items-center justify-between n  ">
      <Link to={"/"} className="text-2xl font-serif text-red-700">
        <img
          className="mx-auto h-20 object-cover rounded-t-lg"
          src="/logo.jpg"
          alt="logo"
        />
      </Link>
      <BusinessInfo/>
      <Search className={"items-center  hidden lg:flex"}/>

      </div>


      <div>
      <p>© 2025 Macaneros. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};
