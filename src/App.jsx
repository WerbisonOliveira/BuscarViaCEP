import { useState, useEffect} from 'react';

import './App.css'

import Header from './components/Header';
import Form from './components/Form';
import FormEndereco from './components/FormEndereco';


function App() {
  let [url, setUrl] = useState(null);
  const [cep, setCep] = useState("");
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      if(cep.length !== 8) return;
    
      setLoading(true);

      try {
            async function getData() {

            const res = await fetch(url);

            const json = await res.json();

            setData(json);

        }
          getData();

          setCep("");
      } catch (error) {
          console.log("Erro:" + error);
      }
      
      setUrl("");

  }, [url]);
  

  const cepExist = () => {
    if(data.hasOwnProperty("erro")) {
        window.alert("Cep não existe!");
        setData("");
        setUrl("");
        setLoading(false);
    } 
    return true;
  }
  


  return (
    <>
      <div>
        <Header />
      </div>
      <div id='form'>
        {data && cepExist() ? (<FormEndereco data={data} setData={setData} setLoading={setLoading}/> ) : (<Form cep={cep} setUrl={setUrl} setCep={setCep} loading={loading} setLoading={setLoading} />)}
      </div>
    </>
  )
}

export default App
