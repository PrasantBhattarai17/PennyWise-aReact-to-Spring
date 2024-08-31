import { useState } from 'react';

const useAddExpenses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
 const token=localStorage.getItem('token');
  const addExpenses = async (incomeEntry) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
   

    try {
      const response = await fetch('/expense/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(incomeEntry),
      });

      if (response.ok) {
        const data = await response.text();
        setSuccess(true);
      } else {
        const errorData = await response.text();
        throw new Error(errorData || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { addExpenses, isLoading, error, success };
};

export default useAddExpenses;
