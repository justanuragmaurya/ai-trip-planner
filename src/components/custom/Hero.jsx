import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from "motion/react";
import { AuroraText } from "@/components/magicui/aurora-text";

function Hero() {
  return (
    <div className="flex flex-col items-center pt-24 gap-5 max-h-[calc(100vh-12px)] w-full overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-5 "
        initial={{
          y: "10%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Personalized Iteneries at your Fingertips {"→"}
          </span>
        </AnimatedGradientText>
        <h1 className="font-bold text-center text-5xl md:text-7xl">
          Discover Your Next <br />
          <AuroraText>Adventure</AuroraText> with AI
        </h1>
        <p className="text-gray-500 text-center max-w-md md:max-w-xl">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to="/create-trip">
          <RainbowButton className="h-12 hover:scale-105">
            Get Started It's Free
          </RainbowButton>
        </Link>
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <img src="/demo.png" className=" max-w-md md:max-w-7xl mt-8"></img>
      </motion.div>
    </div>
  );
}

export default Hero;