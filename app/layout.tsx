import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Next.js 14 - Canvas',
	description: 'Next.js 14 - app with canvas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de">
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	)
}
