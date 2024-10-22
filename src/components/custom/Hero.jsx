import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedGradientText from '../ui/animated-gradient-text';
 


function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 h-[calc(100vh-64px)] w-full'>
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Yaatra AI {"→"}
        </span>
        
      </AnimatedGradientText>
      <h1 className='font-extrabold text-[50px] text-center'>
        <span className='text-[#f56551]'>Discover Your Next adventure with AI :<br/> </span>Personalized Iteneriies at your Fingertips</h1>
        <p className='text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <Link to='/create-trip'>
        <Button>Get Started It's Free</Button>
        </Link>
        <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  )
}

export default Hero