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

export const useExpenseCard = (token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/expense/totalexpense", {
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
 export const useGroceryCard = (token) => {
  const [Gdata, setGData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/expense/groceriescard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setGData(result);
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

  return { Gdata, loading, error };
};
 export const useBillsCard = (token) => {
  const [Bdata, setBdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/expense/billscard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setBdata(result);
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

  return { Bdata, loading, error };
};
 export const useEntertainmentCard = (token) => {
  const [EnterData, setEnterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/expense/entertaintmentcard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setEnterData(result);
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

  return { EnterData, loading, error };
};
 export const useOthersExpcard = (token) => {
  const [OEData, setOEData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addCards = async () => {
    try {
      const response = await fetch("/expense/otherscard", {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setOEData(result);
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

  return { OEData, loading, error };
};



