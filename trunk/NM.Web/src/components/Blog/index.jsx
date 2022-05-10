import React, { useEffect, useState } from 'react'
import Blogpost from './blogpost'
import Blogpost1 from './blogpost1'
import Blogpost2 from './blogpost2'

const BlogListComp = () => {
    //const [local, setLocal] = useState(0)

    useEffect(() => {
        const res = localStorage.getItem("blogId")
       
    }, [])
    var local = localStorage.getItem("blogId")
    useEffect(() => {
        const res = localStorage.getItem("blogId")
        
    }, [localStorage.getItem("blogId")])

    return <>
        {local === "0" && <Blogpost  />}
        {local === "1" && <Blogpost1  />}
        {local === "2" && <Blogpost2  />}
    </>
}

export default BlogListComp