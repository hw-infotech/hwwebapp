import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ route }) {
    const navigate = useNavigate()
    return (
        <div className="breadecumbs_box pt-2" onClick={handleClick}>
            <ul className='breadcumbs_style'>
                {route?.map((_, index) => (route.length - 1 == index ? <li onClick={() => {
                    navigate(_.route)
                }} style={{ color: "#737ed2" }}>{_.name} </li> : <li onClick={() => {
                    navigate(_.route)
                }}>{_.name} {">"} </li>))}
            </ul>

        </div>
    );
}