import React from 'react';
import "../css/index.css"
import {Link} from "react-router-dom";
import {pageActions} from "../store/page-slice";
import {useDispatch} from "react-redux";

const Index = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <header>
                <h1>Easy Shopping, Better Life</h1>
                <Link to="/products">
                    <button className="mt-4" onClick={() => dispatch(pageActions.changePage("Products"))}>Go Shopping</button>
                </Link>
            </header>
        </div>
    );
};

export default Index;
