import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Help({className}) {
  return (
    <li className={className}>
              <FontAwesomeIcon icon={faQuestionCircle} className="h-6 w-6" />
              <a href="#ayuda" className="ml-1">
                Ayuda
              </a>
            </li>
  )
}

export default Help