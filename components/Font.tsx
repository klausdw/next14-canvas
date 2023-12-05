import { useState } from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function FontFamily({ editor }: { editor: any }) {
	const activeObject = editor?.canvas.getActiveObject()

	const currentFontFamily =
		activeObject?.get('fontFamily')?.toString() || 'defaultFontFamily'
	const currentFontSize = activeObject?.get('fontSize')?.toString() || 'defaultFontSize'

	const [_selectedFontFamily, setSelectedFontFamily] =
		useState<string>(currentFontFamily)
	const [_selectedFontSize, setSelectedFontSize] = useState<string>(currentFontSize)

	const changeFontType = (value: string) => {
		if (activeObject) {
			activeObject.set('fontFamily', value)
			editor.canvas.renderAll()
			setSelectedFontFamily(value)
		}
	}

	const changeFontSize = (size: string) => {
		if (activeObject) {
			activeObject.set('fontSize', parseInt(size))
			editor.canvas.renderAll()
			setSelectedFontSize(size)
		}
	}

	const fontSizeOptions = ['20px', '40px', '60px', '72px', '100px', '180px']
	const fontSansOptions = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman']

	return (
		<>
			<Select
				value={currentFontFamily}
				onValueChange={(value) => changeFontType(value)}
			>
				<SelectTrigger className="w-[280px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Sans Serif</SelectLabel>
						{fontSansOptions.map((font) => (
							<SelectItem key={font} value={font}>
								{font}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select
				value={`${currentFontSize}px`}
				onValueChange={(size) => changeFontSize(size)}
			>
				<SelectTrigger className="w-[120px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{fontSizeOptions.map((size) => (
							<SelectItem key={size} value={size}>
								{size}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	)
}
