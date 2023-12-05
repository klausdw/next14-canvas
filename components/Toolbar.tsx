import Text from '@/components/Text'
import TextBox from '@/components/TextBox'
import Align from '@/components/Align'
import Delete from '@/components/Delete'
import Images from '@/components/Images'
import BackgroundImage from '@/components/BackgroundImage'
import Emojis from '@/components/Emojis'
import Shapes from '@/components/Shapes'
import ColorPicker from '@/components/ColorPicker'
import { FabricJSEditor } from 'fabricjs-react'

export default function Toolbar({ editor }: { editor: FabricJSEditor }) {
	return (
		<div className="z-10 sticky top-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
			<div className="flex justify-center space-x-2 p-2 border-b border-gray-200 dark:border-gray-800">
				<Text editor={editor} />
				<TextBox editor={editor} />
				<Shapes editor={editor} />
				<Align editor={editor} />
				<Images editor={editor} />
				<BackgroundImage editor={editor} />
				<Emojis editor={editor} />
				<Delete editor={editor} />
				<ColorPicker editor={editor} />
			</div>
		</div>
	)
}
