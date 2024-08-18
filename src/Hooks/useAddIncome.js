import { useState } from 'react';
import { add } from '../utils/constants';

const useAddIncome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

 const token=localStorage.getItem('token');
 console.log(token)
  const addIncome = async (incomeEntry) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(add, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(incomeEntry),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
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

  return { addIncome, isLoading, error, success };
};

export default useAddIncome;
