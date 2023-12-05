import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps } from 'react'

export default function Shapes({ editor }: { editor: FabricJSEditor }) {
	if (!editor) return null
	const addRect = () => {
		const rect = new window.fabric.Rect({
			left: 260,
			top: 80,
			width: 200,
			height: 150,
			fill: 'cyan',
			transparentCorners: false,
		})
		editor.canvas.add(rect)
	}
	const addCircle = () => {
		const circle = new window.fabric.Circle({
			left: 120,
			top: 120,
			stroke: 'black',
			strokeWidth: 1,
			fill: 'magenta',
			radius: 50,
		})
		editor.canvas.add(circle)
	}
	const addTriangle = () => {
		const triangle = new window.fabric.Triangle({
			left: 140,
			top: 240,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 2,
			width: 100,
			height: 100,
			selectable: true,
		})
		editor.canvas.add(triangle)
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className="text-gray-600 dark:text-gray-400" variant="ghost">
					<span className="sr-only">Shape</span>
					<IconShape className="w-4 h-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-4 w-full">
				<Button
					className="text-gray-600 dark:text-gray-400 w-14 h-10 text-3xl"
					variant="ghost"
					onClick={addCircle}
				>
					<IconCircle className="w-4 h-4" />
					<span className="sr-only">Circle</span>
				</Button>
				<Button
					className="text-gray-600 dark:text-gray-400 w-14 h-10 text-3xl"
					variant="ghost"
					onClick={addRect}
				>
					<IconRect className="w-4 h-4" />
					<span className="sr-only">Rect</span>
				</Button>
				<Button
					className="text-gray-600 dark:text-gray-400 w-14 h-10 text-3xl"
					variant="ghost"
					onClick={addTriangle}
				>
					<IconTriangle className="w-4 h-4" />
					<span className="sr-only">Triangle</span>
				</Button>
			</PopoverContent>
		</Popover>
	)
}

function IconShape(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			fill="currentColor"
			width="18"
			height="18"
			viewBox="0 0 32 32"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
		>
			<title>shapes</title>
			<path d="M9.072 14.75h13.855c0 0 0.001 0 0.001 0 0.414 0 0.75-0.336 0.75-0.75 0-0.138-0.037-0.267-0.102-0.379l0.002 0.004-6.929-12c-0.142-0.211-0.379-0.349-0.649-0.349s-0.508 0.137-0.648 0.346l-0.002 0.003-6.928 12c-0.063 0.108-0.1 0.237-0.1 0.375 0 0.414 0.336 0.75 0.75 0.75v0zM16 3.5l5.629 9.75h-11.258zM7.838 17.25c-0.049-0.001-0.107-0.002-0.164-0.002-3.729 0-6.752 3.023-6.752 6.752s3.023 6.752 6.752 6.752c0.058 0 0.115-0.001 0.173-0.002l-0.008 0c0.049 0.001 0.107 0.002 0.164 0.002 3.729 0 6.752-3.023 6.752-6.752s-3.023-6.752-6.752-6.752c-0.058 0-0.115 0.001-0.173 0.002l0.008-0zM7.838 29.25c-0.048 0.002-0.103 0.002-0.159 0.002-2.901 0-5.252-2.352-5.252-5.252s2.352-5.252 5.252-5.252c0.056 0 0.112 0.001 0.168 0.003l-0.008-0c0.048-0.002 0.103-0.002 0.159-0.002 2.901 0 5.252 2.352 5.252 5.252s-2.352 5.252-5.252 5.252c-0.056 0-0.112-0.001-0.168-0.003l0.008 0zM28 17.25h-8c-1.518 0.002-2.748 1.232-2.75 2.75v8c0.002 1.518 1.232 2.748 2.75 2.75h8c1.518-0.002 2.748-1.232 2.75-2.75v-8c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 28c-0.001 0.69-0.56 1.249-1.25 1.25h-8c-0.69-0.001-1.249-0.56-1.25-1.25v-8c0.001-0.69 0.56-1.249 1.25-1.25h8c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path>
		</svg>
	)
}
function IconCircle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
function IconRect(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="4"
				y="4"
				width="16"
				height="16"
				rx="2"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
function IconTriangle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.2433 17.6513L10.5859 5.67095C11.0445 4.80456 11.2739 4.37136 11.5798 4.22973C11.8463 4.10637 12.1535 4.10637 12.42 4.22973C12.726 4.37136 12.9553 4.80456 13.414 5.67094L19.7565 17.6513C20.1668 18.4263 20.372 18.8138 20.3305 19.13C20.2943 19.4059 20.1448 19.6543 19.9179 19.8154C19.6579 19.9999 19.2194 19.9999 18.3425 19.9999H5.65737C4.78044 19.9999 4.34198 19.9999 4.08198 19.8154C3.85505 19.6543 3.70551 19.4059 3.66932 19.13C3.62785 18.8138 3.833 18.4263 4.2433 17.6513Z"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
