import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, Spinner } from 'reactstrap';
import axios from 'axios';
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";

const NewsDetails = () => {
  const { slug } = useParams();
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem(`comments_${slug}`);
    return storedComments ? JSON.parse(storedComments) : [];
  });

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${slug}`)
      .then((res) => {
        setTask(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des détails de l'article :", error);
        setIsLoading(false);
      });
  }, [slug]);

  const toggleCompleted = () => {
    // Inversez le statut "completed" de la tâche
    setTask((prevTask) => ({ ...prevTask, completed: !prevTask.completed }));
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        user: 'Utilisateur',
        body: newComment,
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  useEffect(() => {
    localStorage.setItem(`comments_${slug}`, JSON.stringify(comments));
  }, [comments, slug]);

  return (
    <div>
      <div className="Banierre">
        <Baniere title="Votre tache" description=" " url={ImageBaniere} />
      </div>
    <div className="container mt-5">
      {isLoading ? (
        <div className="text-center">
          <Button color="primary" disabled>
            <Spinner size="sm" /> Chargement...
          </Button>
        </div>
      ) : (
        <div>
          <h2 className="mb-4">{task.title}</h2>

          <div className=''>
            <div>
              
              <h2>{task.todo}</h2>
              
            </div>
          </div>

          <div className="mt-4">
            <h3>Changer le statut de la tâche</h3>
            <Button
              color={task.completed ? 'success' : 'warning'}
              onClick={toggleCompleted}
            >
              {task.completed ? 'Marquer comme non complétée' : 'Marquer comme complétée'}
            </Button>
          </div>

          <div className="mt-4">
            <h3>Espace commentaires</h3>
            {comments.map((comment, index) => (
              <div className="border p-3 mb-3" key={index}>
                <strong>{comment.user} :</strong> {comment.body}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h3>Ajouter un commentaire</h3>
            <Input
              type="text"
              placeholder="Nouveau commentaire"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button color="primary" onClick={handleAddComment}>Ajouter</Button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default NewsDetails;
