'use client'

import type { PropsWithChildren } from 'react'
import { domAnimation, LazyMotion } from 'motion/react'

export const AnimationProvider = ({ children }: PropsWithChildren<unknown>) => {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
