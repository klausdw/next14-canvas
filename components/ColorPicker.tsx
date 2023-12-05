import { SVGProps, useCallback, useEffect, useState } from 'react'
import { ColorResult, SwatchesPicker } from 'react-color'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FabricJSEditor } from 'fabricjs-react'

export default function ColorPicker({ editor }: { editor: FabricJSEditor }) {
	const [color, setColor] = useState<string | undefined>(undefined)
	const [isUserColorChange, setIsUserColorChange] = useState(false)

	const handleChangeComplete = useCallback(
		(newColor: ColorResult) => {
			const activeObject = editor?.canvas.getActiveObject()
			if (activeObject) {
				setColor(newColor.hex)
				setIsUserColorChange(true)
			}
		},
		[editor],
	)

	useEffect(() => {
		const activeObject = editor?.canvas.getActiveObject()

		if (isUserColorChange && color !== undefined && activeObject) {
			activeObject.set('fill', color)
			editor.canvas.add(activeObject)
			editor.canvas.renderAll()
			setIsUserColorChange(false)
		} else if (!isUserColorChange && activeObject) {
			setColor(activeObject.get('fill') as string)
		}
	}, [editor, isUserColorChange, color])

	const inlineStyles = {
		default: {
			body: {
				width: '370px',
				height: 'auto',
			},
		},
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className="text-gray-600 dark:text-gray-400" variant="ghost">
					<span className="sr-only">ColorPicker</span>
					<IconColorPicker className="w-4 h-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="end"
				className="w-auto mt-0 shadow-none border-none bg-transparent"
			>
				<SwatchesPicker
					color={color}
					onChangeComplete={handleChangeComplete}
					styles={inlineStyles}
				/>
			</PopoverContent>
		</Popover>
	)
}

function IconColorPicker(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				style={{
					opacity: 1,
					vectorEffect: 'none',
					fill: '#373737',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 3.2,
					strokeLinecap: 'square',
					strokeLinejoin: 'round',
					strokeMiterlimit: 4,
					strokeDasharray: 'none',
					strokeDashoffset: 3.2,
					strokeOpacity: 1,
				}}
				id="rect1290"
				width="16"
				height="16"
				x="0"
				y="0"
			/>
			<rect
				y="1"
				x="1"
				height="4.0000005"
				width="4.0000005"
				id="rect6829-4"
				style={{
					display: 'inline',
					fill: '#5da1f3',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
			/>
			<rect
				style={{
					display: 'inline',
					fill: '#5dd3f3',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
				id="rect6831-7"
				width="4.0000005"
				height="4.0000005"
				x="6"
				y="1"
			/>
			<rect
				y="1"
				x="11"
				height="4.0000005"
				width="4.0000005"
				id="rect6833-1"
				style={{
					display: 'inline',
					fill: '#5df3e3',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
			/>
			<rect
				style={{
					display: 'inline',
					fill: '#f35d5d',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15466905,
				}}
				id="rect6835-3"
				width="4.0000005"
				height="3.999944"
				x="1"
				y="6"
			/>
			<rect
				y="11"
				x="1"
				height="4.0000005"
				width="4.0000005"
				id="rect6837-2"
				style={{
					display: 'inline',
					fill: '#f3c05d',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
			/>
			<rect
				y="6"
				x="6"
				height="3.999944"
				width="4.0000005"
				id="rect6839-1"
				style={{
					display: 'inline',
					fill: '#f35d99',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15466905,
				}}
			/>
			<rect
				style={{
					display: 'inline',
					fill: '#d55df3',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15466905,
				}}
				id="rect6841-6"
				width={4.0000005}
				height={3.999944}
				x={11}
				y={6}
			/>
			<rect
				style={{
					display: 'inline',
					fill: '#d5f35d',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
				id="rect6843-3"
				width="4.0000005"
				height="4.0000005"
				x="6"
				y="11"
			/>
			<rect
				y="11"
				x="11"
				height="4.0000005"
				width="4.0000005"
				id="rect6845-8"
				style={{
					display: 'inline',
					fill: '#8bf35d',
					fillOpacity: 1,
					stroke: 'none',
					strokeWidth: 1.15467715,
				}}
			/>
		</svg>
	)
}
