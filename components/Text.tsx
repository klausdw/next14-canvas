import { SVGProps, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FontFamily } from '@/components/Font'
import { FabricJSEditor } from 'fabricjs-react'

export default function Text({ editor }: { editor: FabricJSEditor }) {
	const [selectedText, setSelectedText] = useState<any>(null)
	const [bold, setBold] = useState(false)
	const [italic, setItalic] = useState(false)
	const [underline, setUnderline] = useState(false)

	const activeObject = editor.canvas.getActiveObject()

	const addText = () => {
		if (editor.canvas.width && editor.canvas.height) {
			const text = new window.fabric.IText('Headline', {
				left: editor?.canvas?.width / 2,
				top: editor?.canvas?.height / 2,
				textAlign: 'center',
				originX: 'center',
				originY: 'center',
				fontSize: 60,
				fontFamily: 'Helvetica',
			})

			text.on('selected', () => {
				setSelectedText(text)
			})

			editor.canvas?.add(text)
			editor.canvas?.renderAll()
		}
	}

	const toggleBold = () => {
		if (activeObject || selectedText) {
			const newBold = !bold
			if (activeObject) {
				activeObject.set({
					fontWeight: newBold ? 'bold' : 'normal',
				} as fabric.ITextOptions)
			} else if (selectedText) {
				selectedText.set({
					fontWeight: newBold ? 'bold' : 'normal',
				} as fabric.ITextOptions)
			}
			editor.canvas.renderAll()
			setBold(newBold)
		}
	}

	const toggleItalic = () => {
		if (selectedText) {
			const newItalic = !italic
			selectedText.set('fontStyle', newItalic ? 'italic' : 'normal')
			editor.canvas.renderAll()
			setItalic(newItalic)
		}
	}

	const toggleUnderline = () => {
		if (selectedText) {
			const newUnderline = !underline
			selectedText.set('underline', newUnderline ? 'underline' : false)
			editor.canvas.renderAll()
			setUnderline(newUnderline)
		}
	}

	return (
		<>
			<FontFamily editor={editor} />
			<Button
				className="text-gray-600 dark:text-gray-400"
				variant="ghost"
				onClick={addText}
			>
				<span className="sr-only">Text</span>
				<IconText className="w-4 h-4" />
			</Button>
			<Button
				className="text-gray-600 dark:text-gray-400"
				variant="ghost"
				onClick={toggleBold}
			>
				<span className="sr-only">Bold</span>
				<IconBold className="w-4 h-4" />
			</Button>
			<Button
				className="text-gray-600 dark:text-gray-400"
				variant="ghost"
				onClick={toggleItalic}
			>
				<span className="sr-only">Italic</span>
				<IconItalic className="w-4 h-4" />
			</Button>
			<Button
				className="text-gray-600 dark:text-gray-400"
				variant="ghost"
				onClick={toggleUnderline}
			>
				<span className="sr-only">Underline</span>
				<IconUnderline className="w-4 h-4" />
			</Button>
		</>
	)
}

function IconText(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			stroke="currentColor"
			fill="none"
			strokeWidth="0"
			viewBox="0 0 15 15"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.94993 2.95002L3.94993 4.49998C3.94993 4.74851 3.74845 4.94998 3.49993 4.94998C3.2514 4.94998 3.04993 4.74851 3.04993 4.49998V2.50004C3.04993 2.45246 3.05731 2.40661 3.07099 2.36357C3.12878 2.18175 3.29897 2.05002 3.49993 2.05002H11.4999C11.6553 2.05002 11.7922 2.12872 11.8731 2.24842C11.9216 2.32024 11.9499 2.40682 11.9499 2.50002L11.9499 2.50004V4.49998C11.9499 4.74851 11.7485 4.94998 11.4999 4.94998C11.2514 4.94998 11.0499 4.74851 11.0499 4.49998V2.95002H8.04993V12.05H9.25428C9.50281 12.05 9.70428 12.2515 9.70428 12.5C9.70428 12.7486 9.50281 12.95 9.25428 12.95H5.75428C5.50575 12.95 5.30428 12.7486 5.30428 12.5C5.30428 12.2515 5.50575 12.05 5.75428 12.05H6.94993V2.95002H3.94993Z"
				fill="currentColor"
			></path>
		</svg>
	)
}

function IconBold(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M14 12a4 4 0 0 0 0-8H6v8" />
			<path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
		</svg>
	)
}

function IconItalic(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="19" x2="10" y1="4" y2="4" />
			<line x1="14" x2="5" y1="20" y2="20" />
			<line x1="15" x2="9" y1="4" y2="20" />
		</svg>
	)
}

function IconUnderline(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 4v6a6 6 0 0 0 12 0V4" />
			<line x1="4" x2="20" y1="20" y2="20" />
		</svg>
	)
}
