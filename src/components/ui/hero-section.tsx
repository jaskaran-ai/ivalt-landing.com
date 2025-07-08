"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import { AnimatedGroup } from "./animated-group";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
// import { cn } from "@/lib/utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        {/* <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={2}
          repeatDelay={2}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12",
            "z-20 opacity-70"
          )}
        /> */}
        <section className="relative bg-[#FAF9F7] z-10">
          <div className="relative py-10 md:py-30">
            <div aria-hidden className="absolute inset-0 -z-10 size-full" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/solutions"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Identity Validation Platform®
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
                    <span className="text-teal-primary">iVALT</span>{" "}
                    <span className="text-primary">Stops</span>
                    <div>
                      <span className="text-primary">AI Identity Threats</span>
                    </div>
                  </h1>
                  <h2 className="text-4xl font-bold text-teal-primary mb-8 mt-4">
                    WHO or WHAT is Really at the Endpoint?
                  </h2>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600">
                    iVALT{"’"}s Identity Validation Platform® is a Revolutionary
                    Approach to Stop Identity Fraud for All Digital Interactions
                    – Humans, AI Agents and IOT Devices
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      variant={"shiny"}
                    >
                      <Link href="/solutions">
                        <span className="text-nowrap">Learn More</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    size="lg"
                    variant="shiny"
                    // className="h-10.5 rounded-xl px-5 bg-white hover:bg-white/70 transition-all duration-300 text-primary"
                    className="h-10.5 rounded-xl bg-[#FAF9F7] px-5 border-primary border-1 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
                  >
                    <Link href="/contact">
                      <span className="text-nowrap">Get Started</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
