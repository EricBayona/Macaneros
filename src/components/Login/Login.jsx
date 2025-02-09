import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login({className}) {
  return (
    <li className={className}>
      <FontAwesomeIcon icon={faUser} />
      <a href="#mi-cuenta" className="ml-1">
        Mi cuenta
      </a>
    </li>
  );
}

export default Login;
