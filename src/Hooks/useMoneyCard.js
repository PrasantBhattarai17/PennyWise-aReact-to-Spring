import { useState, useEffect } from "react";

const UseIncomeCard = (token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addCards = async () => {
    try {
      const response = await fetch("/income/incomecard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      addCards();
    }
  }, [token]);

  return { data, loading, error };
};

export default UseIncomeCard;
