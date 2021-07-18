import { useEffect, useState } from "react"
import Navigation from "../components/Navigation"
import Recherche from "./Recherche"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import DATA from '../_data/que-faire-a-paris-.json'
import Parser from 'html-react-parser';
import DayJS from 'react-dayjs';
function Accueil() {
    // const { id } = useParams();
    // const url = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=danse&sort=title&?sort=-date_start&rows=15';
    const [record, setRecord] = useState(null);


    useEffect(() => {
        // axios.get(url).then((res) => {setEvent(res.data)});

        setRecord(DATA[0]);
    }, []);


    return (
                <>
                    <Navigation />
                    <h1>Page d'accueil</h1>
                    <Recherche />
                    {record && <>
                 <NavLink to={record.fields.id} />
                    <h3>Dernier evenement :</h3>
                    <h2>{record.fields.title}</h2>
                    <img src={record.fields.cover_url} width="250" />
                    <p>{Parser(record.fields.lead_text) }</p>
                    <p>{Parser(record.fields.address_street) }</p>
                    <p>{Parser(record.fields.address_city) }</p>
                    </>
                    }
                </>
    );

}

export default Accueil