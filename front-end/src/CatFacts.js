import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import './CatFacts.css'


const CatFacts = () => {

  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetchCatFacts();
  }, []);

  const fetchCatFacts = () => {
    axios
    .get('http://localhost:5000/api')
    .then(response => {
      const factsData = response.data.filter(fact => fact.status.sentCount > 0 && fact.status.verified === true);
      setFacts(factsData);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <h1>Cat Facts</h1>
      <button onClick={fetchCatFacts}>Get Random Facts</button>
      <div className='cat-facts-container'>
        {facts.map(fact => (
          <div key={fact._id} className="cat-fact-item">
           {fact.text}
           </div>
        ))}
      </div>
    </div>
  );
  
};

export default CatFacts;
