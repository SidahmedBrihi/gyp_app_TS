import { useRef, useContext, useEffect } from "react"
import "./Header.css"
import { navbarContext } from "../../App";
const Header = () => {
  let List = useRef<HTMLAnchorElement[]>([])
  let addList = (list: HTMLAnchorElement) => List.current.push(list)
    let second =  useRef<HTMLDivElement>(null) ;
    let addClass =  (event:React.MouseEvent<HTMLLabelElement>) : void=> {
      if (event.target !== second.current) {
        if (!second.current?.classList.contains("active")) {
            second.current?.classList.add('active') 
        }
        else 
        {
            second.current?.classList.remove('active')
        }
        
      }
    }
    // add change active to link navbar when scroll
    let {section, setSection } = useContext(navbarContext)
    useEffect(()=> {
      setSection(Array.from(new Set(section)))
      let changeActive =  ()=> {
        section?.forEach((sec : HTMLDivElement) => {
          if (window.scrollY > sec.offsetTop && window.scrollY < sec.offsetTop + sec.offsetHeight ) {
            List.current.forEach(elm => {
              elm.classList.remove("active")
              if (elm.dataset.scroll === sec.id) {
                elm.classList.add("active")
              }
            }
            )
          }
        })
      }
      window.addEventListener("scroll", changeActive)
      return ()=> window.removeEventListener("scroll", changeActive )
    },[section])
  return (
    <div className="navbar">
        <div className="container position-relative">
            <h2 className="logo" >GYMSTER</h2>
            <div ref={second} className="second d-flex">
                <ul className="links d-flex justify-content-between align-items-center me-5 rounded">
                    <li><a ref={addList} className='active me-3 p-0' href="" data-id="home">Home</a></li>
                    <li><a ref={addList} className="me-3" href="" data-scroll="about">About</a></li>
                    <li><a ref={addList} className="me-3" href="" data-scroll="prog">Program</a></li>
                    <li><a ref={addList} className="me-3" href="" data-scroll="time">Time</a></li>
                    <li><a ref={addList} className="me-3" href="" data-scroll="trainers">Trainers</a></li>
                    <li><a ref={addList} className="me-3" href="" data-scroll="blog">Blog</a></li>
                </ul>
                <a className="join px-4 py-2 rounded" href="">Join Us</a>
            </div>
            <div className="menu-btn d-none" >
                <input id="checkbox" type="checkbox" />
                <label onClick={addClass} className="toggle" htmlFor="checkbox">
                <div id="bar1" className="bars"></div>
                <div id="bar2" className="bars"></div>
                <div id="bar3" className="bars"></div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Header