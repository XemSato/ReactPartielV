import axios from "axios";

const authenticate = (email, password) => {
  // Appel de l'API d'authentification
  const response = axios.post(
    "https://dummyjson.com/api/auth/login",
    {
      email,
      password,
    }
  );

  // Vérification du statut de la réponse
  if (response.status === 200) {
    // Récupération des informations d'utilisateur
    const data = response.data;

    // Stockage des informations d'utilisateur dans le localStorage
    localStorage.setItem("user", JSON.stringify(data));

    // Retour des informations d'utilisateur
    return data;
  } else {
    // Erreur d'authentification
    throw new Error("Erreur d'authentification");
  }
};

export default authenticate;