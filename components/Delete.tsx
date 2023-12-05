import { Button } from '@/components/ui/button'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps, useCallback, useEffect } from 'react'

export default function Delete({ editor }: { editor: FabricJSEditor }) {
	const deleteSelectedObject = useCallback(() => {
		const activeObject = editor?.canvas.getActiveObject()
		if (activeObject) {
			editor.canvas.remove(activeObject)
			editor.canvas.renderAll()
		}
	}, [editor])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const activeObject = editor?.canvas.getActiveObject()

			if (activeObject && (event.key === 'Delete' || event.keyCode === 46)) {
				event.preventDefault()
				const confirmDelete = window.confirm(
					'Are you sure you want to delete the selected object?',
				)
				if (confirmDelete) {
					deleteSelectedObject()
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [editor, deleteSelectedObject])

	return (
		<Button
			className="text-gray-600 dark:text-gray-400"
			onClick={deleteSelectedObject}
			variant="ghost"
		>
			<span className="sr-only">Delete</span>
			<IconDelete className="w-4 h-4" />
		</Button>
	)
}

function IconDelete(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 12V17"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14 12V17"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 7H20"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
