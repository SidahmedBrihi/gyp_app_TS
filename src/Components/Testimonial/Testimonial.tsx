import React, { useEffect, useState, useRef , useContext} from 'react'
import './Testimonial.css'
import { Row, Col, Container } from 'react-bootstrap'
import logo_1 from "../../assets/testimonial.jpg"
import logo_2 from "../../assets/testimonial-2.jpg"
import logo_3 from "../../assets/testimonial-1.jpg"
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { BiSolidQuoteLeft} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { navbarContext } from '../../App'


const Testimonial = () => {
  let data = [{name : "sidahmed" , img : logo_2 ,}, {name : "rayane" , img : logo_3 ,}]
  let [counter, setCounter] = useState<number>(0) ;
  const [testimonials , setTestimonial ] = useState(data[counter])
  let changeData = ()=> {
    (counter === 0) ? setCounter(1) : setCounter(0) 
    setTestimonial(data[counter]) 
  }

  let [ref, inView] = useInView()
  let animation = {
    hidden : {x: 3000, opaccity: 0},
    visible: {x: 0, opaccity: 1}
  }
  
  return (
    <div className='testimonial bg-second py-5 text-white' id='testimonial' >
      <Container className=''>
        <Row ref={ref}>
            <Col xs={12} lg={6}>
              <motion.div 
              initial={{y: 180 , opacity : 0}}
              animate={(inView)? {y: 0 , opacity: 1} : {y: 180 , opacity : 0}}
              transition={{duration: 0.4, delay: 0.7, type: "spring"}}
              >
                <img src={logo_1} alt="" className='img-fluid rounded' />
              </motion.div>  
            </Col>
            <Col xs={12} lg={6}>
                <motion.div className="text p-3"
                variants={animation}
                initial="hidden"
                animate={(inView)? "visible" : "hidden"}
                transition={{duration:0.3, delay: 1.2, type:"spring"}}
                >
                    <p className='fw-bold fs-5'>TESTIMONIAL</p>
                    <h1 className='fw-bold mb-3'>OUR CLIENT SAY</h1>
                    <h4><span className='me-3 main-color lh-lg'><BiSolidQuoteLeft/></span>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</h4>
                    <div className="text-pres my-5 d-flex align-items-center">
                        <img src={testimonials.img} alt="" className='me-5 rounded-circle' />
                        <div className="pers ">
                            <p className='text-white'>{testimonials.name}</p>
                            <p>Profession</p>
                        </div>
                    </div>
                    <div className='button'>
                        <span className='fs-2 pointer main-color' onClick={changeData}><AiFillLeftCircle/></span>
                        <span className='fs-2 main-color' onClick={changeData}><AiFillRightCircle/></span>
                    </div>
                </motion.div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial