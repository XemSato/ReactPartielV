import React, { useState } from 'react';
import config from './Config';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestBody = {
      username: config.email, // Utilisez l'adresse e-mail à partir du fichier de configuration
      password: config.password, // Utilisez le mot de passe à partir du fichier de configuration
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
        window.location.href = '/News';
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
      <h2>Page d'authentification</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nom d'utilisateur :</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;