import { Button } from '@/components/ui/button'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps } from 'react'

export default function TextBox({ editor }: { editor: FabricJSEditor }) {
	const onAddTextBox = () => {
		if (editor.canvas.width && editor.canvas.height) {
			const textBox = new window.fabric.Textbox(
				'Text box, scale the box and write!',
				{
					left: editor.canvas.width / 2,
					top: editor.canvas.height / 2,
					textAlign: 'center',
					originX: 'center',
					originY: 'center',
					cornerColor: 'red',
					borderColor: 'red',
					fontSize: 40,
					width: 400,
					height: 200,
				},
			)

			const expandTextBox = () => {
				if (textBox && textBox.height && textBox.scaleY) {
					textBox
						.set({
							height: textBox.height * textBox.scaleY || textBox.height,
							scaleY: 1,
						})
						.setCoords()
				}
			}

			textBox.on('scaling', expandTextBox)
			textBox.on('editing:entered', expandTextBox)
			textBox.on('resizing', expandTextBox)

			editor.canvas.on('text:changed', expandTextBox)

			editor.canvas.add(textBox)
			editor.canvas.renderAll()
		}
	}
	return (
		<Button
			className="text-gray-600 dark:text-gray-400"
			variant="ghost"
			onClick={onAddTextBox}
		>
			<span className="sr-only">Text</span>
			<IconText className="w-4 h-4" />
		</Button>
	)
}

function IconText(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="80px"
			height="80px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
		>
			<path d="M9 9H15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path
				d="M12 15L12 9"
				stroke="#1C274C"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
				stroke="#1C274C"
				strokeWidth="1.5"
			/>
			<path
				d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
				stroke="#1C274C"
				strokeWidth="1.5"
			/>
			<path
				d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
				stroke="#1C274C"
				strokeWidth="1.5"
			/>
			<path
				d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z"
				stroke="#1C274C"
				strokeWidth="1.5"
			/>
			<path d="M18 4H6" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
			<path
				d="M20 18L20 12M20 6V8"
				stroke="#1C274C"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M18 20L12 20M6 20L8 20"
				stroke="#1C274C"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M4 6L4 18"
				stroke="#1C274C"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	)
}
