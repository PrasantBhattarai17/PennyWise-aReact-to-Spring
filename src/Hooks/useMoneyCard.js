import { useState, useEffect } from "react";

export const UseIncomeCard = (token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/income/salarycard", {
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
 export const useSalaryCard = (token) => {
  const [sdata, setSData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/income/salarycard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setSData(result);
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

  return { sdata, loading, error };
};
 export const useInvestmentCard = (token) => {
  const [Invdata, setInvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/income/investmentcard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setInvData(result);
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

  return { Invdata, loading, error };
};
 export const UseRealEstatesCard = (token) => {
  const [reData, setReData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/income/realstatecard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setReData(result);
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

  return { reData, loading, error };
};
 export const useOtherscard = (token) => {
  const [OData, setOData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/income/otherscard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setOData(result);
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

  return { OData, loading, error };
};



