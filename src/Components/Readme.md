# Cours de Développement Web avec React JS

# Introduction à React JS
React JS est une bibliothèque JavaScript open-source créée par Facebook pour la création d'interfaces utilisateur interactives. Il est principalement utilisé pour la construction d'applications web monopage (SPA) et est basé sur le concept de composants réutilisables.

# Installation de React
Pour commencer à travailler avec React, vous pouvez créer un nouveau projet à l'aide de l'outil de ligne de commande Create React App. Voici comment l'installer et créer un nouveau projet :


```c#
npx create-react-app mon-projet-react
cd mon-projet-react
npm start
```

# Composants React
Les composants sont la pierre angulaire de React. Ils sont des blocs de construction réutilisables pour votre application. Un composant peut être une petite partie d'une page (comme un bouton) ou une page entière.

# Création d'un composant
Voici comment créer un composant de base en React :


```js
import React from 'react';

class MonComposant extends React.Component {
  render() {
    return (
      <div>
        <h1>Mon Premier Composant React</h1>
        <p>Bienvenue dans le monde de React!</p>
      </div>
    );
  }
}

export default MonComposant;
```

# Utilisation d'un composant
Une fois que vous avez créé un composant, vous pouvez l'utiliser dans d'autres parties de votre application :

```js
import React from 'react';
import MonComposant from './MonComposant';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ma Première Application React</h1>
        <MonComposant />
      </div>
    );
  }
}

export default App;
```

# État et Propriétés
Les composants React peuvent avoir des états internes et recevoir des propriétés (props) de l'extérieur.

# État (State)
L'état est un objet qui détient les données qui peuvent changer au fil du temps et influencer le rendu du composant. Vous pouvez définir l'état initial dans le constructeur du composant.


```js
import React from 'react';

class Compteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Compteur : {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Incrémenter</button>
      </div>
    );
  }
}

export default Compteur;
```

# Propriétés (Props)
Les propriétés (props) sont des données passées à un composant de parent à enfant. Les props sont en lecture seule et ne doivent pas être modifiées directement par le composant enfant.


```js
import React from 'react';

class MonComposant extends React.Component {
  render() {
    return <p>Propriété reçue : {this.props.texte}</p>;
  }
}
export default MonComposant;
Utilisation de ce composant avec une propriété :

<MonComposant texte="Ceci est une propriété" />
```

# Cycle de vie des composants
Les composants React ont un cycle de vie qui permet d'exécuter des méthodes à différents moments de leur existence, comme la création, la mise à jour et la suppression.

# Méthodes de cycle de vie courantes
componentDidMount(): Appelé après que le composant est monté dans le DOM.
componentDidUpdate(prevProps, prevState): Appelé après que le composant a été mis à jour.
componentWillUnmount(): Appelé avant que le composant soit supprimé du DOM.
Gestion des événements
React permet de gérer les événements de manière déclarative. Vous pouvez attacher des gestionnaires d'événements aux éléments JSX.

```js
import React from 'react';

class BoutonClique extends React.Component {
  handleClick() {
    alert('Bouton cliqué !');
  }

  render() {
    return <button onClick={this.handleClick}>Cliquez-moi</button>;
  }
}
```


# export default BoutonClique;
Communication entre composants
La communication entre composants peut se faire en passant des données via les propriétés (props) ou en utilisant un gestionnaire d'état partagé (comme Redux) dans des applications plus complexes.

# Conclusion
Ceci conclut notre cours d'introduction au développement web avec React JS. Vous avez maintenant une base solide pour créer des applications web interactives en utilisant cette bibliothèque puissante. Continuez à pratiquer et à explorer les fonctionnalités avancées de React pour devenir un développeur web React compétent. Bonne chance !