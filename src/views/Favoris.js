import { useEffect } from "react";
import Navigation from "../components/Navigation"

function Favoris() {

    // const [favorisEvent, setFavorisEvent] = useState([]);

    useEffect(() => {
        // setFavorisEvent(JSON.parse(localStorage.getItem('Eventfavoris')))
    }, []);
    return (
        <div>
            <Navigation />
            <h1>Evenements sauvegardés</h1>
        </div>
    )
}

export default Favoris