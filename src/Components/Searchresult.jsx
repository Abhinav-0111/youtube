import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchdatafromApi from '../utiles/Api'
import Leftnav from "../Components/Leftnav"
import ContextApi from '../Context/ContextApi'
import Searchresultvideocard from "./Searchresultvideocard"


export default function Searchresult() {
  const [result, setresult] = useState();
  const {searchQuery } = useParams();
  const { setloading } = useContext(ContextApi)
  console.log(searchQuery)

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
    fetchsearchResult();
  }, [searchQuery])

  const fetchsearchResult = () => {
    setloading(true)
    fetchdatafromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res)
      setresult(res?.contents)
      setloading(false)
    })
  }
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <Leftnav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {result?.map((item, index) => {
              if (item?.type !== "video") return false
              return(
              <Searchresultvideocard
                key={index}
                video={item?.video}
              />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
