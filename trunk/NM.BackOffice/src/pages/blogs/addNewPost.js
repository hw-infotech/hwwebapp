import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import Layout from "../../components/layout";
import withHeader from "../../HOC/withHeader";

const AddNewPost = () => {
    const [d, setD] = useState()
    const [state, setState] = useState([{
        tag: "span", id: 0
    }])
    const last = state.map((_, id) => (id))
    const route = [
        { name: "Home", route: "/" },
        { name: "Blogs", route: "/" },
        { name: "Add New Post", route: "/" }
    ]
    //useEffect(() => {
    //    setTitle("Add New Post")
    //  }, [])

    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <div className="pt-3">
                <div className='blog_post'>
                   
                    <ul className='card_addblog'>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "p", id: last + 1, text: d }])
                        }}>P</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h1", id: last + 1, text: d }])
                        }}>H1</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h2", id: last + 1, text: d }])
                        }}>H2</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h3", id: last + 1, text: d }])
                        }}>H3</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h4", id: last + 1, text: d }])
                        }}>H4</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h5", id: last + 1, text: d }])
                        }}>H5</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "h6", id: last + 1, text: d }])
                        }}>H6</button></li>
                        <li><button type='button' className='btn btn-primary' onChange={() => {
                            setState([...state, { tag: "ul", id: last + 1, text: d }])
                        }}>ul</button></li>
                        <li><button type='button' className='btn btn-danber' onChange={() => {
                            setState([...state, { tag: "li", id: last + 1, text: d }])
                        }}>li</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "span", id: last + 1, text: d }])
                        }
                        }>span</button></li>
                        <li><button type='button' className='btn btn-danger' onClick={() => {
                            setState([...state, { tag: "img", id: last + 1, text: d }])
                        }}>Image</button></li>
                    </ul>
                    <input type={"file"} onChange={(e) => {
                        setState([...state, { tag: "img", id: last + 1, text: e.target.value }])
                    }} />
                </div>
                <div className="form-outline center">
                <textarea className="form-control" id="textAreaExample1" rows="3" onChange={(e) => {
                    setD(e.target.value)
                }}></textarea>

            </div>
                <div className='textContainer'>
                    {state?.map((_) => {
                        if (_.tag == "br") {
                            return <_.tag key={_.id}></_.tag>
                        }
                        if (_.tag == "img") {
                            return <_.tag src={_.text} key={_.id} />
                        }

                        return <_.tag key={_.id}>{_.text}</_.tag>
                    })}
                </div>

            </div>
        </div>
    );
}
export default AddNewPost