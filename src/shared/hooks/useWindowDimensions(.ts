'use client'
import { useState, useEffect } from 'react'

interface WindowDimensions {
	width: number | undefined
	height: number | undefined
	isMobile: boolean
	isTablet: boolean
	isDesktopLg: boolean
	isDesktopXl: boolean
	isDesktop2xl: boolean
}

export function useWindowDimensions(): WindowDimensions {
	const getWindowDimensions = (): WindowDimensions => {
		const width = window.innerWidth
		const height = window.innerHeight
		const isMobile = width ? width <= 480 : false
		const isTablet = width ? width > 480 && width <= 768 : false
		const isDesktopLg = width ? width >= 1024 && width <= 1279 : false
		const isDesktopXl = width ? width >= 1280 && width <= 1535 : false
		const isDesktop2xl = width ? width >= 1536 : false
		return {
			width,
			height,
			isMobile,
			isDesktopLg,
			isDesktopXl,
			isDesktop2xl,
			isTablet
		}
	}
	const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions())

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return windowDimensions
}
