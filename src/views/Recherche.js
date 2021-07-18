import {useRef, useState} from "react"
import DATA from '../_data/que-faire-a-paris-.json'
import {Link} from "react-router-dom"



function Recherche() {

    const inputRef = useRef();
    const [record, setRecord] = useState(null);

    function onValidateForm(event) {
        event.preventDefault();

        const searchValue = inputRef.current.value;

        setRecord(DATA.slice(10));
    }
    return (
        <div>
            <h2>Chercher un événement</h2>
            <form onSubmit={onValidateForm}>
            <input type="text" name="search" id="search" className="searchBar" placeholder="   Recherche" ref={inputRef} />
            <button type="submit" className="research">Rechercher</button>
            </form>

            {record && <>
            <h2>Résultats</h2>
            {record.map(record => <p><Link to={`event/${record.recordid}`}>{record.fields.title}</Link></p>)}
            </>}
        </div>
    )
}

export default Recherche