import React, { useState , useRef, useContext, useEffect } from 'react'
import "./Time.css"
import { Row, Col } from 'react-bootstrap';
import { navbarContext } from '../../App';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Time = () => {
    let daysList = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    let trainerData=[{
                        day : "saturday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "POWER LIFTING", coach :"JOHN DEO"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"bensasi ahmed"},
                                {time : "14.00AM - 18.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "18.00AM - 22.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"}
                               ],
                     },
                     {
                        day : "sunday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"JOHN DEO"},
                                {time : "14.00AM - 18.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"},
                                {time : "18.00AM - 22.00AM",training : "POWER LIFTING", coach :"bensasi ahmed"}
                               ]
                     },
                     {
                        day : "monday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "POWER LIFTING", coach :"bensasi ahmed"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"JOHN DEO"},
                                {time : "14.00AM - 18.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "18.00AM - 22.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"}
                               ]
                     },
                     {
                        day : "tuesday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "BODY BUILDING", coach :"ibrahim hadjir"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"bensasi ahmed"},
                                {time : "14.00AM - 18.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"},
                                {time : "18.00AM - 22.00AM",training : "BODY BUILDING", coach :"JOHN DEO"}
                               ]
                     },
                     {
                        day : "wednesday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "POWER LIFTING", coach :"JOHN DEO"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"bensasi ahmed"},
                                {time : "14.00AM - 18.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "18.00AM - 22.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"}
                               ]
                     },
                     {
                        day : "thursday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "11.00AM - 14.00AM",training : "BODY BUILDING", coach :"bensasi ahmed"},
                                {time : "14.00AM - 18.00AM",training : "POWER LIFTING", coach :"JOHN DEO"},
                                {time : "18.00AM - 22.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"}
                               ]
                     },
                     {
                        day : "friday",
                        prog : [{time : "6.00AM  - 11.00AM",training : "WEIGHT LOOSE", coach :"ROBERT SMITH"},
                                {time : "11.00AM - 14.00AM",training : "POWER LIFTING", coach :"JOHN DEO"},
                                {time : "14.00AM - 18.00AM",training : "CARDIO PROGRAM", coach :"ibrahim hadjir"},
                                {time : "18.00AM - 22.00AM",training : "BODY BUILDING", coach :"bensasi ahmed"}
                               ]
                     },
                    ]
    let [days,setDays] = useState(daysList) ;
    let [trainerDay , setTrainerDay] = useState(trainerData[0])
    let list = useRef<HTMLAnchorElement[]>([])
    let addList = (elm : HTMLAnchorElement)=> list?.current.push(elm) 
    let changeActive =  (event : HTMLAnchorElement) => {
        list.current.forEach((elm => elm?.classList.remove("active")))
        event.classList.add("active")
    }
    let changeDay = (day : string)=> {
        let newTrainerDays = trainerData.filter(elm => elm.day === day)[0]
        setTrainerDay(newTrainerDays)
    }
    // export elem
  let time = useRef<HTMLDivElement>(null)
  let {setSection } = useContext(navbarContext)
  useEffect(()=> {
      setSection((prev: HTMLDivElement[] )=> [...prev, time.current])
  },[])
  let [ref, inView] = useInView()
  return (
    <div className='time text-center py-5' ref={time} id='time'>
        <motion.p ref={ref} className='main-color fw-bold'
        initial={{y : 100 , opacity : 0}}
        animate={(inView) ? {y : 0 , opacity : 1} : {y : 200 , opacity : 0} }
        transition={{duration : 0.4, delay : 0.4}}
        >CLASS SCHEDULE</motion.p>
        <motion.h2 className='text-white mb-4'
        initial={{y : 100 , opacity : 0}}
        animate={(inView) ? {y : 0 , opacity : 1} : {y : 200 , opacity : 0} }
        transition={{duration : 0.4, delay : 0.4}}
        >WORKING HOURS</motion.h2>
        <motion.ul className='days d-flex justify-content-center fit-content flex-column flex-md-row '
        initial={{y : 100 , opacity : 0}}
        animate={(inView) ? {y : 0 , opacity : 1} : {y : 200 , opacity : 0} }
        transition={{duration : 0.4, delay : 0.4}}
        >
            {days.map(elm => <li className='mb-3'><a href="#eee" ref={addList} onClick={(event )=> {
                changeActive(event.target as HTMLAnchorElement)
                changeDay(elm)
            }} className={`day bg-second text-white mb-3 px-3 py-2 ${(elm === "monday")? "active" : null}`}>{elm}</a></li> )}
        </motion.ul>
        <Row className='mt-5 justify-content-center'>
            {trainerDay.prog.map((elm , index : number) => {
                return(
                    <Col sm={6} sd={4} lg={3} className='time-items bg-second mb-3 mx-4 text-white rounded py-4'>
                      <motion.div
                      initial={{y : 100 , opacity : 0}}
                      animate={(inView) ? {y : 0 , opacity : 1} : {y : 100 , opacity : 0} }
                      transition={{duration : 0.4, delay : 1.6}}
                      >
                        <p className=''>{elm.time}</p>
                        <h4 className='training main-color'>{elm.training}</h4>
                        <p className='coash text-white-50'>{elm.coach}</p>
                      </motion.div>
                    </Col>
                )
            })}
            
        </Row>
        
    </div>
  )
}

export default Time