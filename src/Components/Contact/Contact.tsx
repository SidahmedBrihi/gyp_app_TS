import "./Contact.css"
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { LuPhoneCall } from 'react-icons/lu';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {
    let data = [{logo : <MdLocationOn/> , title : "VISIT US" , contact : "Chaiba, Kolea, Algéria" },
                {logo : <AiOutlineMail/>, title : "EMAIL US" , contact : "sidahmedbrihi2000@gmail.com"  },
                {logo : <LuPhoneCall/>, title : "CALL US" , contact : "0656138425" }
               ]
    const [contactData , setContactData] = useState(data)
    const [ref, inView] = useInView()
  return (
    <div ref={ref} className='contact text-center py-5 text-white px-5'>
        <p className="main-color fw-bold">Contact Us</p>
        <h1 className="mb-5">GET IN TOUCH</h1>
        <Row>
            {contactData?.map((elm) => {
                return (
                    <Col xs={12} md={6} lg={4}>
                        <motion.div className='bg-second py-4 mb-4 rounded'
                        initial={{opacity: 0, y: 120}}
                        animate={(inView)? {opacity: 1, y: 0} : {opacity: 0, y: 120} }
                        transition={{delay: 0.7, duration: 0.4, type: "spring"}}
                        >
                            <span className="fs-1 main-color mb-4">{elm.logo}</span>
                            <h3 className="mt-4 main-color">{elm.title}</h3>
                            <p>{elm.contact}</p>
                        </motion.div>
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default Contact