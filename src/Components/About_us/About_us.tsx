import React, { useEffect, useRef, useState, useContext } from 'react'
import "./About_us.css"
import img from "../../assets/about.jpg"
import { motion } from 'framer-motion'
import {  useInView  } from 'react-intersection-observer'
import {navbarContext} from "../../App"
import { Prev } from 'react-bootstrap/esm/PageItem'

const About_us = () => {
    interface text {
        text : string; categ : string
    }
    let parag = [{text : "one Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna",
     categ : "one"},
      {text : "two Tempor erat elitr at rebum at at clita aliquyam  dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna",
       categ : "two"}]
    let [paragraph , setParagraph] = useState<text>(parag[0])
    let paragFilter = (categ : string)=> {
        let newArr = parag.filter(elm => elm.categ === categ)[0]
        setParagraph(newArr) ;
    }
    let links = useRef<HTMLAnchorElement[]>([])
    let addLinks = (elm : HTMLAnchorElement) => links.current.push(elm) 
    let changeLi = (event : HTMLAnchorElement)=> {
        links.current.forEach(elm => elm?.classList.remove("active"))
        event?.classList.add("active")
    }
    /////// useInView
    const {ref, inView} = useInView();
    const animations = {
        hidden : {y : 100 , opacity : 0},
        visible : {y : 0 , opacity : 1}
    }
    ///// onscroll
    let about = useRef<HTMLDivElement>(null)
    let {setSection } = useContext(navbarContext)
    useEffect(()=> {
          setSection((prev : HTMLDivElement[]) => [...prev, about.current])
    },[])
  return (
    <div className='about py-5' id='about' ref={about}>
        <motion.div ref={ref} className="container d-flex flex-row align-items-center justify-content-between"
        variants={animations}
        initial="hidden"
        animate={(inView)? 'visible' : 'hidden'}
        transition={{duration : 0.5 , delay : 0.6}}
        >
            <div className="image text-center">
                <img className='img-fluid rounded' src={img} alt="" />
            </div>
            <div className="text">
                <p className="title">About US</p>
                <h1>WELCOME TO GYMSTER</h1>
                <h6 className='text-white-50'>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h6>
                <p className='Nonumy'>Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
                <div className="us p-4 rounded">
                    <ul className="links d-flex justify-content-between">
                        <li key={1}><a ref={addLinks} onClick={(event)=> {
                            paragFilter("one")
                            changeLi(event.target as HTMLAnchorElement)
                            }} className='active rounded' href="#pills">About Us</a></li>
                        <li key={2}><a ref={addLinks} onClick={(event)=> {
                            paragFilter("two")
                            changeLi(event.target as HTMLAnchorElement)
                            }}   href="#pills" className='rounded'>Why Choose Us</a></li>
                    </ul>
                    <div className="parag mt-4">
                        <p className='para-one active'>{paragraph.text}</p>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About_us