import './FormEndereco.css';

const FormEndereco = ({data, setData, setLoading}) => {

    const back = () => {
        setData("");
        setLoading(false);
    }

    return (
        <div id='container-form-end'>
            <h2 id='Title'>Resultado:</h2>
            <div id='container-info'>
                <p>Estado: {data.estado}</p>
                <p>Cidade: {data.localidade}</p>
                <p>Bairro: {data.bairro}</p>
                <p>Rua: {data.logradouro}</p>
            </div>
            <button id='back-btn' onClick={back}>Voltar</button>
        </div>
    )
}

export default FormEndereco;