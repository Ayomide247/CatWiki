import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


  useEffect(() => {
        setLoading(true)
        axios.get(url)
      .then(response => {
        setData(response.data);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.error('Error fetching data:', error);
      });
  }, [url]);

  return {data, loading, error}

  
}
