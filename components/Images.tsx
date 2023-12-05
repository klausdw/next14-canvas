import { Label } from '@/components/ui/label'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps } from 'react'

export default function Images({ editor }: { editor: FabricJSEditor }) {
	const onImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = event.target.files[0]
			const reader = new FileReader()

			reader.onload = () => {
				const imgElement: HTMLImageElement = document.createElement('img')

				imgElement.onload = () => {
					const imageSize = 500
					const { width, height } = imgElement
					let newWidth, newHeight

					if (width > height) {
						newWidth = imageSize
						newHeight = (height * imageSize) / width
					} else {
						newWidth = (width * imageSize) / height
						newHeight = imageSize
					}

					const canvas = document.createElement('canvas')
					canvas.width = newWidth
					canvas.height = newHeight

					const context = canvas.getContext('2d')
					if (context) {
						context.drawImage(imgElement, 0, 0, newWidth, newHeight)

						const image = new window.fabric.Image(canvas, {
							left: 0,
							top: 0,
							selectable: true,
						})

						editor.canvas.add(image)
						editor.canvas.renderAll()
					}
				}

				imgElement.src = reader.result as string
			}

			if (file) {
				reader.readAsDataURL(file)
			}
		}
	}

	return (
		<>
			<input
				id="upload-file"
				type="file"
				accept="image/*"
				className="absolute -mt-96 w-4 h-4 cursor-pointer border border-red-300"
				onChange={onImageSelect}
			/>
			<Label
				htmlFor="upload-file"
				className="my-auto py-3 px-4 text-gray-600 dark:text-gray-400 relative cursor-pointer hover:bg-gray-100 rounded"
			>
				<span className="sr-only">Image</span>
				<IconImage className="w-4 h-4" />
			</Label>
		</>
	)
}

function IconImage(props: SVGProps<SVGSVGElement>) {
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
			<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
			<circle cx="9" cy="9" r="2" />
			<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
		</svg>
	)
}
