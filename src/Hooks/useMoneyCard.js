import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useFetchData = (endpoint, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const incomeData=useSelector((store)=>store.income.incomes);
  const expense = useSelector((store) => store.expense.expenses);


  const fetchData = async () => {
    try {
      const response = await fetch(endpoint, {
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
      fetchData();
    }
  }, [token,incomeData,expense]);

  return { fetchData,data, loading, error };
};
