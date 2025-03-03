import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../fireBase/configFireBase"; // Configuración de Firebase
import { useState } from "react";

const storage = getStorage(app); // Inicializar Firebase Storage

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Función para manejar el cambio de la imagen en el input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Función para subir la imagen
  const uploadImage = async () => {
    if (!image) return; // Si no hay imagen seleccionada, no hacer nada

    const storageRef = ref(storage, `images/${image.name}`); // Crear referencia en Firebase Storage

    try {
      // Subir la imagen
      await uploadBytes(storageRef, image);
      console.log("Imagen subida con éxito!");

      // Obtener la URL de la imagen subida
      const url = await getDownloadURL(storageRef);
      setImageUrl(url); // Guardar la URL de la imagen en el estado
      console.log("URL de la imagen: ", url);

      // Ahora puedes guardar esta URL en Firestore si es necesario
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImage}>Subir Imagen</button>
      {imageUrl && <img src={imageUrl} alt="Imagen subida" />}
    </div>
  );
};

export default UploadImage;
