import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../utiles/Constants'
import Leftnavmenubtn from './Leftnavmenubtn'
import ContextApi from '../Context/ContextApi'

export default function Leftnav() {
    const { selectcategories, setselectcategories, mobilemenu } = useContext(ContextApi)
    const navigate = useNavigate();
    const clickhandle = (name, type) => {
        switch (type) {
            case "category":
                return setselectcategories(name)
            case "home":
                return setselectcategories(name)
            case "menu":
                return false
            default:
                break;
        }
    }
    return (
        <>
            <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobilemenu ? "translate-x-[0px]" : ""}`}>
                <div className="flex px-5 flex-col">
                    {categories.map((item, index) => {
                        return (
                            <>
                                <Leftnavmenubtn
                                    key={index}
                                    text={item.type === "home" ? "Home" : item.name}
                                    icon={item.icon}
                                    action={() => {
                                        clickhandle(item.name, item.type)
                                        navigate("/")
                                    }}
                                    className={`${selectcategories === item.name ? "bg-white/[0.15]" : ""}`}
                                />
                                {item.divider && (
                                    <hr className='my-5 border-white/[0.2]' />
                                )}
                            </>
                        )
                    })}
                    <hr className='my-5 border-white/[0.2]' />
                    <div className='text-white/[0.5] text-[12px]'>
                        Clone By Abhinav
                    </div>
                </div>
            </div>
        </>
    )
}
