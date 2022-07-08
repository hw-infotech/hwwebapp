import React, { useEffect } from 'react'
import Blogpost from './blogpost'
import Blogpost1 from './blogpost1'
import Blogpost2 from './blogpost2'

const BlogListComp = () => {
    //const [local, setLocal] = useState(0)

    useEffect(() => {}, [])
    var local = localStorage.getItem("blogId")
    useEffect(() => {}, [localStorage.getItem("blogId")])

    return <>
        {local === "0" && <Blogpost  />}
        {local === "1" && <Blogpost1  />}
        {local === "2" && <Blogpost2  />}
    </>
}

export default BlogListComp