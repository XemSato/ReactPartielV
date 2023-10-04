import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Input, 
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
import "../index.css";
import axios from "axios";


const News = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [tache, setTaches] = useState(() => {
    const storedTaches = localStorage.getItem('taches');
    return storedTaches ? JSON.parse(storedTaches) : [];
  });
  const [newTache, setNewTache] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Pour suivre l'index de la tâche en cours d'édition
  const [editValue, setEditValue] = useState(''); // Pour stocker la valeur en cours d'édition

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setPosts(res.data.todos);
        setIsloading(false);
      });
  }, []);

  const handleAddTache = () => {
    if (newTache.trim() !== '') {
      const comment = {
        user: 'Utilisateur',
        body: newTache,
      };
      setTaches([...tache, comment]);
      setNewTache('');
    }
  };

  const handleEditTache = (index) => {
    // Active l'édition de la tâche en cliquant sur le bouton "Modifier"
    setEditIndex(index);
    setEditValue(tache[index].body); // Préremplit le champ d'édition avec la valeur actuelle de la tâche
  };

  const handleSaveTache = (index) => {
    // Enregistre la tâche modifiée
    const updatedTache = [...tache];
    updatedTache[index].body = editValue;
    setTaches(updatedTache);

    // Désactive l'édition
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    // Annule l'édition en désactivant l'index en cours d'édition
    setEditIndex(null);
  };

  const handleDeleteTache = (index) => {
    const updatedTache = [...tache];
    updatedTache.splice(index, 1);
    setTaches(updatedTache);
  };

  useEffect(() => {
    localStorage.setItem('taches', JSON.stringify(tache));
  }, [tache]);

  return (
    <div>
      <div className="Banierre">
        <Baniere title="Les petits taches" description=" " url={ImageBaniere} />
      </div>
      {isLoading ? (
        <>
          <Button color="primary" disabled>
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </Button>
        </>
      ) : (
        <div className="Grid">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardBody>
                <CardHeader>N° {post.id}</CardHeader>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText>{post.todo}</CardText>
                <Link to={""+post.id}>
                <Button>Aller commenté</Button>    
                  </Link>
              </CardBody>
            </Card>
          ))}

          <div className="mt-4">
            <h3>Tes nouvelles tâches</h3>
            {tache.map((tache, index) => (
              <div className="border p-3 mb-3" key={index}>
                <strong>{tache.user} :</strong>
                {editIndex === index ? (
                  <>
                    <Input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <Button
                      color="success"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleSaveTache(index)}
                    >
                      Enregistrer
                    </Button>
                    <Button
                      color="secondary"
                      size="sm"
                      className="ml-2"
                      onClick={handleCancelEdit}
                    >
                      Annuler
                    </Button>
                  </>
                ) : (
                  <>
                    {tache.body}
                    <Button
                      color="info"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleEditTache(index)}
                    >
                      Modifier
                    </Button>
                  </>
                )}
                <Button
                  color="danger"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleDeleteTache(index)}
                >
                  Supprimer
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3>Nouvelle tâche</h3>
            <Input
              type="text"
              placeholder="Nouvelle tâche"
              value={newTache}
              onChange={(e) => setNewTache(e.target.value)}
            />
            <Button color="primary" onClick={handleAddTache}>Ajouter</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
