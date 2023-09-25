import React, { useEffect } from 'react'
import { useContext } from 'react'
import ContextApi from "../Context/ContextApi"
import Leftnav from './Leftnav'
import Videocard from './Videocard'

export default function Feeds() {
  const { loading, search } = useContext(ContextApi)
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
  })
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <Leftnav />
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
          <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
            {!loading && search.map((item) => {
              if (item.type !== "video") return false
              return (
                <Videocard
                  key={item?.video?.videoid}
                  video={item?.video} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
