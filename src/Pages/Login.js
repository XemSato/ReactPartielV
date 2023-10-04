import React, { useState } from 'react';
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestBody = {
      username,
      password,
    };

    try {
      const response = await fetch('https://dummyjson.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 200) {
        const userData = await response.json();
        // Stockez les informations de l'utilisateur dans le localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        // Redirigez l'utilisateur vers la page de liste des tâches
        window.location.href = '/tasks';
      } else {
        // Gérez les erreurs d'authentification
        setError('Échec de l\'authentification. Vérifiez vos informations d\'identification.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'authentification :', error);
    }
  };

  return (
    <div>
    <div className="Banierre">
        <Baniere title="Connectez-vous" description=" " url={ImageBaniere} />
      </div>
    <div className="container">
        
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Page de Connexion</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Nom d'utilisateur :</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mot de passe :</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
