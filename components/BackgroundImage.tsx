import { Label } from '@/components/ui/label'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps, useRef } from 'react'

export default function BackgroundImage({ editor }: { editor: FabricJSEditor }) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const resizeImageToCanvas = (image: HTMLImageElement, size: number) => {
		const canvasSize = size
		const { width, height } = image
		let newWidth, newHeight

		if (width > height) {
			newWidth = canvasSize
			newHeight = (height * canvasSize) / width
		} else {
			newWidth = (width * canvasSize) / height
			newHeight = canvasSize
		}

		const canvas = document.createElement('canvas')
		canvas.width = newWidth
		canvas.height = newHeight

		const context = canvas.getContext('2d')
		if (context) {
			context.drawImage(image, 0, 0, newWidth, newHeight)
		}

		return canvas.toDataURL()
	}

	const backgroundImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		const reader = new FileReader()

		reader.onload = () => {
			const imgElement = document.createElement('img')

			imgElement.onload = () => {
				const resizedImageDataUrl = resizeImageToCanvas(imgElement, 1000)
				const backgroundImage = new window.fabric.Image(imgElement)

				backgroundImage.set({
					left: 0,
					top: 0,
					selectable: false,
				})

				backgroundImage.setSrc(resizedImageDataUrl, () => {
					if (editor.canvas.width && editor.canvas.height) {
						editor.canvas.setBackgroundImage(
							backgroundImage,
							editor.canvas.renderAll.bind(editor.canvas),
							{
								scaleX:
									editor.canvas.width / (backgroundImage.width || 1),
								scaleY:
									editor.canvas.height / (backgroundImage.height || 1),
							},
						)
					}
				})
			}

			imgElement.src = reader.result as string
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}

	return (
		<>
			<input
				id="upload-bg"
				type="file"
				accept="image/*"
				ref={fileInputRef}
				className="absolute -mt-96 w-4 h-4 cursor-pointer border border-red-300"
				onChange={backgroundImageHandler}
			/>
			<Label
				htmlFor="upload-bg"
				className="my-auto py-3 px-4 text-gray-600 dark:text-gray-400 relative cursor-pointer hover:bg-gray-100 rounded"
			>
				<span className="sr-only">Background Image</span>
				<IconBackgroundImage className="w-4 h-4" />
			</Label>
		</>
	)
}

function IconBackgroundImage(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill="currentColor"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 512 512"
		>
			<g>
				<g>
					<path
						d="M0,52.784v406.433h512V52.784H0z M496.165,443.381H15.835v-61.683l203.347-132.175l100.78,61.581l176.203,107.686V443.381
			z M496.165,400.233L336.9,302.905l62.477-58.015l96.788,62.913V400.233z M496.165,288.916l-98.512-64.033l-74.788,69.445
			l-103.944-63.522L15.835,362.813V68.619h480.33V288.916z"
					/>
				</g>
			</g>
			<g>
				<g>
					<path
						d="M306.144,95.01c-34.926,0-63.34,28.414-63.34,63.34s28.414,63.34,63.34,63.34c34.926,0,63.34-28.414,63.34-63.34
			S341.07,95.01,306.144,95.01z M306.144,205.856c-26.194,0-47.505-21.311-47.505-47.505s21.311-47.505,47.505-47.505
			s47.505,21.311,47.505,47.505S332.339,205.856,306.144,205.856z"
					/>
				</g>
			</g>
			<g>
				<g>
					<path
						d="M155.711,131.959c-3.387,0-6.733,0.517-9.961,1.525c-4.785-13.191-17.443-22.639-32.266-22.639
			c-14.154,0-26.688,8.76-31.827,21.543c-16.344,2.614-28.874,16.812-28.874,33.88c0,18.918,15.392,34.309,34.309,34.309h68.619
			c18.918,0,34.309-15.392,34.309-34.309S174.629,131.959,155.711,131.959z M155.711,184.743H87.093
			c-10.186,0-18.474-8.288-18.474-18.474c0-9.697,7.508-17.673,17.035-18.418l7.698,3.849l2.033-10.165
			c1.721-8.608,9.333-14.854,18.099-14.854c10.186,0,18.474,8.288,18.474,18.474v15.791l12.62-9.314
			c3.45-2.546,7.195-3.836,11.133-3.836c10.186,0,18.474,8.288,18.474,18.474S165.898,184.743,155.711,184.743z"
					/>
				</g>
			</g>
			<g>
				<g>
					<rect
						x="292.96"
						y="241.839"
						transform="matrix(0.5226 -0.8526 0.8526 0.5226 -144.3615 417.7931)"
						width="15.835"
						height="191.924"
					/>
				</g>
			</g>
			<g>
				<g>
					<rect
						x="419.627"
						y="268.513"
						transform="matrix(0.5433 -0.8396 0.8396 0.5433 -75.0269 505.9926)"
						width="15.836"
						height="106.882"
					/>
				</g>
			</g>
			<g>
				<g>
					<rect x="414.351" y="100.289" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="440.742" y="137.237" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="39.588" y="95.01" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="197.938" y="105.567" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="39.588" y="274.474" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="92.371" y="232.247" width="36.948" height="15.835" />
				</g>
			</g>
			<g>
				<g>
					<rect x="387.959" y="168.907" width="36.948" height="15.835" />
				</g>
			</g>
		</svg>
	)
}
