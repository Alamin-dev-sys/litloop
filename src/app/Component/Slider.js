"use client"
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Image from "next/image";

export default function SliderIndicatorsControlsInside({image}) {

 
 
 
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="relative h-[344px] glide-03">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden bg-black" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap  [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {
image.map((item,index)=><li key={index}>
<Image
width={800}
height={500}
  src={item.img}
  alt=""
  className="w-[100%]  object-cover aspect-video max-w-full max-h-full m-auto"
/>
</li>)
            }
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
         
         
        </div>
        {/*    <!-- Indicators --> */}
        
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  )
}