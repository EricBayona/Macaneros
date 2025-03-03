import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../fireBase/configFireBase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null); // Estado para el usuario autenticado
  const navigate = useNavigate();

  // Función para manejar el login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activamos el loading
    setErrorMessage(""); // Limpiamos el mensaje de error al intentar hacer login

    if (!email || !password) {
      setIsLoading(false);
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("../addproducts"); // Redirige a la página deseada
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Email o contraseña incorrectos. Intenta nuevamente.");
    } finally {
      setIsLoading(false); // Desactivamos el loading
    }
  };

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful");
      setUser(null); // Resetear el estado del usuario
      navigate("/login"); // Redirige al login
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Efecto para escuchar el estado de autenticación
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Actualiza el estado del usuario autenticado
    });

    return () => unsubscribe(); // Limpia el suscriptor cuando el componente se desmonte
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {!user ? (
          <>
            <h2 className="text-3xl font-semibold text-center mb-6">
              Iniciar sesión
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading} // Deshabilitar el botón mientras carga
                className={`mt-4 p-3 text-white rounded-lg ${
                  isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isLoading ? "Cargando..." : "Iniciar sesión"}
              </button>
            </form>

            {errorMessage && (
              <div className="text-red-500 text-center mt-4">
                {errorMessage}
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Bienvenido</h2>
            <button className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-2">
              <Link ink to="../addproducts">
                Agregar Productos
              </Link>
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
