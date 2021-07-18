import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DATA from '../_data/que-faire-a-paris-.json';
import Parser from 'html-react-parser';

function Evenement() {

    const params = useParams();

    const id = params.id;

    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvent(
            DATA.filter(d => d.recordid === id)[0]
        );
    }, []);

    return (
        <>
            <Navigation />
            <h1>Evenement</h1>
        {event && <>
            <h1>{Parser(event.fields.title)}</h1>
            <img src={event.fields.cover_url} width="250" />
            <p>{Parser(event.fields.description)}</p>
             </>}
        </>
    );
};

export default Evenement;