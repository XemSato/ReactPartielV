import React from 'react';
import Baniere from "../Components/Baniere";
import ImageBaniere from "../Img/test.svg";
import "../index.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function FAQForm() {
    // Créer un état local pour gérer les questions et réponses
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
  
    // Fonction pour ajouter une nouvelle question à la liste
    const handleAddQuestion = () => {
      if (newQuestion && newAnswer) {
        const newQuestionObject = {
          question: newQuestion,
          answer: newAnswer,
        };
        setQuestions([...questions, newQuestionObject]);
        setNewQuestion('');
        setNewAnswer('');
      }
    };

    return (
        <div>
          <div className="Banierre">
            <Baniere title="Poser vos questions !" description="Le site de votre actualité mensuel" url={ImageBaniere} />
          </div>
          <div className="container">
            <h1>FAQ</h1>
            <div className="mb-4">
              <h2>Ajouter une nouvelle question</h2>
              <div className="form-group">
                <label htmlFor="question">Question :</label>
                <input
                  type="text"
                  id="question"
                  className="form-control"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="answer">Réponse :</label>
                <textarea
                  id="answer"
                  className="form-control"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAddQuestion}>
                Ajouter
              </button>
            </div>
            <div>
              <h2>Liste des questions</h2>
              <ul className="list-group">
                {questions.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    <strong>Question :</strong> {item.question}
                    <br />
                    <strong>Réponse :</strong> {item.answer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );      
};

export default FAQForm;