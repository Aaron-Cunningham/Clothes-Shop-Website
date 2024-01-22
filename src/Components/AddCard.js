import React, { useState, useEffect } from 'react';
import MediumCard from './MediumCards';

function AddCard() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          const jsonResponse = JSON.parse(req.responseText);
          setFetchedData(jsonResponse.record); 
        } else {
          console.error("Request failed: " + req.status);
        }
      }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/65ae68d8dc746540189857a2/latest", true);
    req.setRequestHeader("X-Master-Key", process.env.REACT_APP_API_KEY); 
    req.send();
  }, []); 

  return (
    <section className='md:max-w-[85rem] md:mx-auto md:px-1'>
      <div className='flex flex-col gap-1 sm:flex-row sm:gap-1 mt-1'>
        {fetchedData.map(item => (
          <MediumCard
            key={item.id}
            img={item.img}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

export default AddCard;
