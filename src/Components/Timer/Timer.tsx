import React, { useState, useRef, useContext, useEffect } from 'react'
import './Timer.css'
import { Col, Row } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa'
import { AiFillCheckSquare, AiFillStar , AiFillAccountBook } from 'react-icons/ai'
import { BiHappyBeaming } from 'react-icons/bi'
import { navbarContext } from '../../App'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Timer = () => {
    let experdata = [{logo : AiFillAccountBook        , type : "EXPERIENCE"       , numb : 12345},
                     {logo : FaUsers            , type : "OUR TRAINERS"     , numb : 12345},
                     {logo : AiFillCheckSquare  , type : "COMPLETE PROJECT" , numb : 12345},
                     {logo : BiHappyBeaming     , type : "HAPPY CLIENTS"    , numb : 12345}
                    ]
    let [data, setData] = useState(experdata) ;
    let [ref , inView] = useInView()
  return (
    <div className='timer py-5 bg-main px-2' id='timer' ref={ref}>
      <motion.div
      initial={{x: "100vh", opacity : 0}}
      animate={(inView) ? {x: 0, opacity : 1} : {x: "100vh", opacity : 0}}
      transition={{duration: 0.6, delay : 1.1, type :"spring"}}
      >
        <Row className='row'>
            {data?.map((elm) => {
                return(
                    <Col xs={12} md={6} lg={3} className='timer-items d-flex align-items-center mb-3 py-3 bg-second'>
                    <span className='logo me-4'>
                        <elm.logo/>
                    </span>
                    <div className="text">
                        <p className='text-white'>{elm.type}</p>
                        <h3 className='text-white'>{elm.numb}</h3>
                    </div>
                </Col>   
                )
            })}
        </Row>
      </motion.div>
    </div>
  )
}

export default Timer