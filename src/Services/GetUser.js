// Fonction pour récupérer les informations d'utilisateur
const getUser = () => {
    // Récupération des informations d'utilisateur du localStorage
    const user = localStorage.getItem("user");
  
    // Vérification de la présence des informations d'utilisateur
    if (user === null) {
      return null;
    }
  
    // Décodage des informations d'utilisateur
    const data = JSON.parse(user);
  
    // Retour des informations d'utilisateur
    return data;
  };
  
  export default getUser;