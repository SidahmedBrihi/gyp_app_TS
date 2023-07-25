import React, { useEffect, useRef, useState } from 'react'
import "./Programme.css"
import {Container, Row , Col} from 'react-bootstrap'
import logo_1 from "../../assets/prog_1.jpg"
import logo_2 from "../../assets/prog_2.jpg"
import logo_3 from "../../assets/prog_3.jpg"
import {delay, motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useContext } from 'react'
import {navbarContext} from "../../App"
const Programme = () => {
    interface data {
        img : string ,
        type : string ,
        text : string ;
    }
    let dataprog = [{img : logo_1, type: "BODY BUILDING", text:"Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet" },
                    {img : logo_2, type: "WEIGHT LEFTING", text:"Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet" },
                    {img : logo_3, type: "MUSCLE BUILDING", text:"Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet" }]
    let [progData , setProgData] = useState<data[]>(dataprog)
    const AnimatedCol = motion(Col);
    /// useInView
    const {ref, inView} = useInView()
    // export elem
    let program = useRef<HTMLDivElement>(null)
    let {setSection } = useContext(navbarContext)
    useEffect(()=> {
        setSection((prev: HTMLDivElement[] )=> [...prev, program.current])
    },[])
  return (
    <div className='prog py-5' ref={program} id='prog'>
        <Container className='text-center'>
            <Row className='prog-row flex-nowrap flex-column flex-md-row align-items-center' ref={ref}>
                {
                    progData?.map((elm : data, index : number) => {
                        return (
                            <Col md={4} >
                              <motion.div className='prog-items text-center rounded py-3 me-2 mb-4'
                              initial={{y : 300, opacity : 0}}
                              animate={(inView)? {y : 0, opacity : 1} : {y : 300, opacity : 0}}
                              transition={{duration : 0.5 , delay :    (index === 0) ?  0.9 : (index === 1) ? 1.4 : (index === 2) ?  2.2 : 0 , type:"spring"}}
                             >
                                <img src={elm.img} className='prog-image img-fluid rounded' alt="" />
                                <h3 className='text-white-50 mt-3'>{elm.type}</h3>
                                <p className='text-white mt-3'>{elm.text}</p>
                                <a className='main-color' href="">Read More</a>
                              </motion.div>
                            </Col>
                        )
                    })
                }
            </Row>
            <motion.h2 className='text-white mt-2'
            initial={{y : 300, opacity : 0}}
            animate={(inView)? {y : 0, opacity : 1} : {y : 400, opacity : 0}}
            transition={{delay: 2.8 , duration : 0.5 , type : "spring" }}
            >30% DISCOUNT FOR THIS SUMMER</motion.h2>
            <motion.a href="" className='member rounded d-block'
            initial={{y : 300, opacity : 0}}
            animate={(inView)? {y : 0, opacity : 1} : {y : 400, opacity : 0}}
            transition={{delay: 3.4 , duration : 0.5 , type : "spring" }}
            >Become a member</motion.a>
        </Container>
    </div>
  )
}

export default Programme