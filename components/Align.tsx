import { Button } from '@/components/ui/button'
import useActiveObject from '@/utils/get-active-object'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps } from 'react'

export default function Align({ editor }: { editor: FabricJSEditor }) {
	const activeObject = useActiveObject(editor)

	const centerPosition = (positionFn: (obj: fabric.Object) => void) => {
		return () => {
			if (activeObject) {
				positionFn(activeObject)
				editor.canvas.renderAll()
			}
		}
	}
	const centerHorizontal = centerPosition((obj) => obj.centerH())
	const centerVertical = centerPosition((obj) => obj.centerV())
	return (
		<>
			<Button
				className="text-gray-600 dark:text-gray-400"
				onClick={centerHorizontal}
				variant="ghost"
			>
				<span className="sr-only">Center Horizontal</span>
				<IconHorizontal className="w-4 h-4" />
			</Button>
			<Button
				className="text-gray-600 dark:text-gray-400"
				onClick={centerVertical}
				variant="ghost"
			>
				<span className="sr-only">Center Vertical</span>
				<IconVertical className="w-4 h-4" />
			</Button>
		</>
	)
}

function IconHorizontal(props: SVGProps<SVGSVGElement>) {
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
				d="M19 7.5C19 6.56538 19 6.09808 18.799 5.75C18.6674 5.52197 18.478 5.33261 18.25 5.20096C17.9019 5 17.4346 5 16.5 5L12.75 5L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L11.25 5L7.5 5C6.56538 5 6.09808 5 5.75 5.20096C5.52197 5.33261 5.33261 5.52197 5.20096 5.75C5 6.09807 5 6.56538 5 7.5C5 8.43461 5 8.90192 5.20096 9.25C5.33261 9.47803 5.52197 9.66739 5.75 9.79904C6.09808 10 6.56538 10 7.5 10H11.25L11.25 14H9.5C8.56538 14 8.09808 14 7.75 14.201C7.52197 14.3326 7.33261 14.522 7.20096 14.75C7 15.0981 7 15.5654 7 16.5C7 17.4346 7 17.9019 7.20096 18.25C7.33261 18.478 7.52197 18.6674 7.75 18.799C8.09808 19 8.56538 19 9.5 19H11.25L11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L12.75 19H14.5C15.4346 19 15.9019 19 16.25 18.799C16.478 18.6674 16.6674 18.478 16.799 18.25C17 17.9019 17 17.4346 17 16.5C17 15.5654 17 15.0981 16.799 14.75C16.6674 14.522 16.478 14.3326 16.25 14.201C15.9019 14 15.4346 14 14.5 14H12.75L12.75 10H16.5C17.4346 10 17.9019 10 18.25 9.79904C18.478 9.66739 18.6674 9.47803 18.799 9.25C19 8.90192 19 8.43462 19 7.5Z"
				fill="#1C274C"
			/>
		</svg>
	)
}

function IconVertical(props: SVGProps<SVGSVGElement>) {
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
				d="M7.5 5C6.56538 5 6.09808 5 5.75 5.20096C5.52197 5.33261 5.33261 5.52197 5.20096 5.75C5 6.09808 5 6.56538 5 7.5L5 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H5L5 16.5C5 17.4346 5 17.9019 5.20096 18.25C5.33261 18.478 5.52197 18.6674 5.75 18.799C6.09808 19 6.56538 19 7.5 19C8.43462 19 8.90192 19 9.25 18.799C9.47803 18.6674 9.66739 18.478 9.79904 18.25C10 17.9019 10 17.4346 10 16.5V12.75L14 12.75V14.5C14 15.4346 14 15.9019 14.201 16.25C14.3326 16.478 14.522 16.6674 14.75 16.799C15.0981 17 15.5654 17 16.5 17C17.4346 17 17.9019 17 18.25 16.799C18.478 16.6674 18.6674 16.478 18.799 16.25C19 15.9019 19 15.4346 19 14.5V12.75L22 12.75C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25L19 11.25V9.5C19 8.56538 19 8.09808 18.799 7.75C18.6674 7.52197 18.478 7.33261 18.25 7.20096C17.9019 7 17.4346 7 16.5 7C15.5654 7 15.0981 7 14.75 7.20096C14.522 7.33261 14.3326 7.52197 14.201 7.75C14 8.09808 14 8.56538 14 9.5V11.25H10V7.5C10 6.56538 10 6.09808 9.79904 5.75C9.66739 5.52197 9.47803 5.33261 9.25 5.20096C8.90192 5 8.43462 5 7.5 5Z"
				fill="#1C274C"
			/>
		</svg>
	)
}
