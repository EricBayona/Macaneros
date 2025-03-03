import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const ButtonWhatsapp = () => {
  return (
    <p className="fixed right-0 bottom-0 z-10">
      <a
        className="text-3xl p-2"
        target="_blank"
        href="https://wa.me/5493865863942?text=Hola quisiera consultarle sobre: "
      >
        <FontAwesomeIcon
          className="bg-green-500 p-2 rounded-3xl text-white "
          icon={faWhatsapp}
        />
      </a>
    </p>
  );
};
