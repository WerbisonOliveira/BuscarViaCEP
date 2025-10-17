import './Form.css';


function Form({cep, setUrl, setCep, loading}) {

    const digitValids = (value) => {
        return value.replace(/[^0-9]/g, "");
    }

    const action = () => {
        const urlCep = `https://viacep.com.br/ws/${cep}/json/`
        setUrl(urlCep);
        if(cep && cep.length !== 8 ) {
            window.alert("Cep inválido!");
            setCep("");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div id="container-form">
            <h2>Buscar endereço</h2>
            <form className='form' onSubmit={(event) => handleSubmit(event)}>
                <label>
                    <span>Cep:</span>
                    {loading && <input type="text" name="cep" id="cep" maxLength={8} value={cep} onChange={(event) => setCep(digitValids(event.target.value))} placeholder='01001000' disabled/>}
                    {!loading && <input type="text" name="cep" id="cep" maxLength={8} value={cep} onChange={(event) => setCep(digitValids(event.target.value))} placeholder='01001000'/>}
                    <span id='info'>*somente números</span>
                </label>
                
                {loading && <input type="submit" value="Buscando..." onClick={action} disabled />}
                {!loading && <input type="submit" value="Buscar" onClick={action} />}
            </form>
        </div>
    )
}

export default Form;