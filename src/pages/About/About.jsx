import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about-div text-center p-5">
            <h2>Functionalitati Admin Panel</h2>
            <ul className="mt-3">
                <li>Preluare Useri si Postari in urma unui request asincron de la API (JSON Placeholder)</li>
                <li>Randarea Userilor si Postarilor existente</li>
                <li>Adaugare user nou</li>
                <li>Schimbare culoare fundal si culoare text</li>
                <li>Stergere User</li>
                <li>Validarea datelor din formular</li>
            </ul>
            <h2>Tehnologii folosite pentru realizare</h2>
            <ul className="mt-3">
                <li>React.js</li>
                <li>Redux.js pentru state management in cazul schimbarii culorii de fundal si a culorii textului (Store, Reduceri, Actiuni)</li>
                <li>React Router</li>
                <li>Bootstrap pentru accelerarea procesului de stilizare</li>
            </ul>
            <div className="mt-4">
            <Link to="/">
                <button className="btn btn-secondary">Inapoi la Pagina principala</button>
            </Link>
            </div>
        </div>
    )
}

export default About;
