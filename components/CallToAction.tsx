'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button' // Assuming shadcn/ui Button; swap for Aceternity's AnimatedButton if available
import { cn } from '@/lib/utils' // Utility for classNames

// Aceternity-inspired Gradient Background (from their Gradient components)
const GradientBackground = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn(
    'relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800',
    'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
    className
  )}>
    {children}
  </div>
)

// Aceternity-inspired Sparkles (simplified from their Sparkles component)
const Sparkles = ({ className }: { className?: string }) => (
  <div className={cn('absolute inset-0', className)}>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
)

// Aceternity-inspired Animated Button (using Framer Motion for hover effects) - Fixed: Explicit children typing to React.ReactNode to resolve MotionValue conflict
interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
)
AnimatedButton.displayName = 'AnimatedButton'

const CallToAction = () => {
  return (
    <section className="relative py-12">
      <GradientBackground className="rounded-3xl mx-4 md:mx-8">
        <Sparkles className="z-0" />
        <div className="relative z-10 px-4 md:px-8 py-14">
          <h1 className='text-center text-white text-4xl font-bold'>Call for Nominations</h1>
          <h1 className='text-center text-white text-lg'>Recognize Excellence and Impact</h1>
          <div className="grid md:grid-cols-2 items-center gap-8 mt-6">
            {/* Image Column - Already included as requested */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-80"
            >
              <Image
                src="/gathering/network.png" // Update to your actual image path (e.g., in public/gathering/)
                alt="HR professionals networking at the Gathering event"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            {/* Text & Buttons Column */}
            <div className="text-center md:text-left mt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 max-w-lg"
              >
                Nominate a deserving leader today and help us celebrate excellence that inspires change!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 max-w-lg"
              >
                We are excited to announce that nominations are now open for this year’s awards! This is your opportunity to celebrate individuals and organizations who have demonstrated outstanding leadership, innovation, and commitment in their field. Whether they are trailblazers, changemakers, or unsung heroes, we invite you to shine a spotlight on their achievements.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cursor-pointer flex flex-col sm:flex-row gap-4 text-gray-100"
              >
                <AnimatedButton onClick={() => {/* Handle ticket logic */}}>
                  Submit your nomination now
                </AnimatedButton>
              </motion.div>
            </div>
          </div>
        </div>
      </GradientBackground>
    </section>
  )
}

export default CallToAction