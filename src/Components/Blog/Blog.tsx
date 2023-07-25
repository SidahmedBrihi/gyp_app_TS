import React, { useState } from 'react'
import "./Blog.css"
import { Row, Col } from 'react-bootstrap'
import logo_1 from "../../assets/blog-1.jpg"
import logo_2 from "../../assets/blog-2.jpg"
import logo_3 from "../../assets/blog-3.jpg"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {useRef, useEffect, useContext} from 'react'
import { navbarContext } from '../../App'

const Blog = () => {
    let dataBlog  = [{img: logo_1}, {img: logo_2}, {img: logo_3}] 
    const [Blog, setBlog] = useState(dataBlog)
    let [ref, inView] = useInView()
    // export elem
    let blog = useRef<HTMLDivElement>(null)
    let {setSection } = useContext(navbarContext)
    useEffect(()=> {
        setSection((prev: HTMLDivElement[] )=> [...prev, blog.current])
    },[])
  return (
    <div className='blog text-center py-5 px-5' ref={blog} id='blog'>
        <p className='main-color fw-bold fs-5'>OUR BLOG</p>
        <h1 className='text-white mb-5'>LATEST BLOG POST</h1>
        <Row>
            {Blog.map((blog) => {
                return (
                    <Col xs={12} md={6} lg={4} className='blog-items rounded mb-3'>
                      <motion.div ref={ref}
                      initial={{y: 100, opacity: 0}}
                      animate={(inView) ? {y:0 , opacity: 1} : {y: 100, opacity: 0}}
                      transition={{type:"spring", duration: 0.4, delay: 0.8}}
                      >
                        <img src={blog.img} alt="" className='img-fluid rounded' />
                        <div className="text bg-second py-xs-1 py-md-3 d-flex align-items-center rounded">
                            <div className="date text-white">
                                <p className='text-white'>01</p>
                                <p className='text-white'>juin</p>
                                <p className='text-white'>2022</p>
                            </div>
                            <h4 className='main-color fs-xs-5 fs-md-3'>SED AMET TEMPOR AMET SIT KASD SEA LOREM</h4>
                        </div>
                      </motion.div>
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default Blog