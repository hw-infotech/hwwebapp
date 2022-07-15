import * as React from 'react';
import { useNavigate } from 'react-router';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export default function BasicBreadcrumbs({ route }) {
    const navigate = useNavigate()
    return (
        <div className="breadecumbs_box " onClick={handleClick}>
            <ul className='breadcumbs_style'>
                {route?.map((_, index) => (route.length - 1 == index ? <li key={index} onClick={() => {
                    navigate(_.route)
                }} style={{ color: "#737ed2" }}>{_.name} </li> : <li key={index } onClick={() => {
                    navigate(_.route)
                }}>{_.name} {">"} </li>))}
            </ul>

        </div>
    );
}