import { useState, useEffect } from 'react';


export function useBinData(binId) {
  
  const [fetchedData, setFetchedData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
          headers: {
            'X-Master-Key': "$2a$10$F" + process.env.REACT_APP_PRIAVTE
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setFetchedData(jsonResponse.record);
        } else {
          console.error('Failed to fetch data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [binId]);

  return fetchedData;
}
