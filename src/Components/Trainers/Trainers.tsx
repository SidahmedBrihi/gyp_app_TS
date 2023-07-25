import {useContext, useRef, useEffect, } from "react"
import "./Trainers.css"
import {Row , Col} from "react-bootstrap"
import logo_1 from "../../assets/team-1.jpg"
import logo_2 from "../../assets/team-2.jpg"
import logo_3 from "../../assets/team-3.jpg"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { navbarContext } from "../../App"

const Trainers = () => {
    interface trainer {
        name : string ,
        img : string
    }
    let trainersData = [{name : "JOHN DEO", img :logo_1 }, {name :"JAMES TAYLOR" , img :logo_2 }, {name :"ADAM PHILLIPS" , img :logo_3 }]
    let [trainer, setTrainer] = useState(trainersData)
    const [ref, inView] = useInView()
    // export elem
    let trainers = useRef<HTMLDivElement>(null)
    let {setSection } = useContext(navbarContext)
    useEffect(()=> {
        setSection((prev: HTMLDivElement[] )=> [...prev, trainers.current])
    },[])
  return (
    <div className="trainers py-5 text-center" ref={trainers} id="trainers">
        <p className="fw-bold main-color fs-4" >THE TEAM</p>
        <h1 className="mb-5 text-black fw-bold">EXPERT TRAINERS</h1>
        <Row className="px-3" ref={ref}>
            {trainersData?.map((trainer : trainer) => {
                return(
                    <Col className="col mb-3" xs={12} md={6} lg={4}>
                        <motion.div className="trainers-items position-relative rounded"
                        initial={{y: 200, opacity: 0}}
                        animate={(inView)? {y:0, opacity: 1} : {y: 100, opacity: 0} }
                        transition={{duration : 0.4, delay: 0.9}}
                        >
                            <motion.img src={trainer.img} alt="" className="rounded"
                            whileHover={{scale : 1.2, }}
                            transition={{duration: 0.4}}
                            />
                            <div className="text py-3 position-absolute text-center d-flex justify-content-center align-items-center flex-column">
                                <h5 className="text-white">{trainer.name}</h5>
                                <p className="text-white-50">TRAINER</p>
                            </div>
                        </motion.div>
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default Trainers