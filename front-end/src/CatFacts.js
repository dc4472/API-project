import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import './CatFacts.css'


const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0)




  useEffect(() => {

    const fetchFacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cat-facts');
        console.log(response.data)
        setFacts(response.data);
      } catch (error) {
        console.log('This error happened:')
        console.error(error);
      }
    };

    fetchFacts();
  }, []);

  const handleNextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
  }

  return (
    <div className='cat-facts-container'>

      <h1>Cat Facts</h1>
      {facts.length > 0 && (
        <div className='cat-facts-item'>
          <p>{facts[currentFactIndex]}</p>
          <button onClick={handleNextFact}>Next Fact</button>
        </div>
      )}
    </div>
  );
};

export default CatFacts;
