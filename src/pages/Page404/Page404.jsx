import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackArrow } from '../../assets/icons/backArrow.svg';
import './Page404.css'

function Page404() {
    return (
        <div className="page-404-div d-flex justify-content-center text-center align-items-center vh-100">
            <div>
                <p className="h3"> Ne pare rau, dar pagina dumneavoastra nu a fost gasita. </p>
                <p className="h4"> Inapoi spre pagina principala. </p>
                <Link to="/">
                    <BackArrow />
                </Link>
            </div>
        </div>
    )
}

export default Page404;
