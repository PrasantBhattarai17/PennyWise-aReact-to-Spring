import  { useEffect, useState } from 'react'
import { useFetchData } from '../Hooks/useMoneyCard';

const DataForSwitch = () => {
    const [income,setIncome]=useState({});
    const [expense,setExpense]=useState({});
 

    const token=localStorage.getItem('item');
    const { data:sdata}   = useFetchData('/income/salarycard',token);
    const { data:Invdata} = useFetchData('/income/investmentcard',token);
    const { data:reData}  = useFetchData('/income/realstatecard',token);
    const { data:OData}   = useFetchData('/income/otherscard',token);
    const { data:Gdata} = useFetchData('/expense/groceriescard',token);
    const { data:Bdata} = useFetchData('/expense/billscard',token);
    const { data:EnterData} = useFetchData('/expense/entertaintmentcard',token);
    const { data:OEData} = useFetchData('/expense/otherscard',token);


   useEffect(()=>{
    setIncome({'Salary':sdata,'Investment':Invdata,'Real Estates':reData,'others':OData})
    setExpense({'Groceries':Gdata,'Bills':Bdata,'Entertainments':EnterData,'Others':OEData})
   },[Bdata,Gdata,EnterData,Invdata,OData,OEData,reData,sdata])

   return {income,expense};

}

export default DataForSwitch