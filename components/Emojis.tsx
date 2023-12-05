import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FabricJSEditor } from 'fabricjs-react'
import { SVGProps } from 'react'

export default function Emojis({ editor }: { editor: FabricJSEditor }) {
	const renderSmileEmojiButtons = () => {
		const smileEmojis = Array.from(
			new Set([
				'😀',
				'😃',
				'😄',
				'😁',
				'😆',
				'😅',
				'😂',
				'🤣',
				'😊',
				'😇',
				'😍',
				'😎',
				'😋',
				'😜',
				'😊',
				'🥰',
				'❤️',
				'💖',
				'💘',
				'💓',
				'💕',
			]),
		)
		const onEmojiClick = (emoji: string) => {
			if (editor.canvas.width && editor.canvas.height) {
				const activeObject = new window.fabric.IText(emoji, {
					left: editor.canvas.width / 1.8,
					top: editor.canvas.height / 1.8,
					selectable: true,
				})
				activeObject.setControlsVisibility({
					mt: false,
					mb: false,
					ml: false,
					mr: false,
				})
				editor.canvas.add(activeObject)
				editor.canvas.renderAll()
			}
		}

		return smileEmojis.map((emoji, index) => (
			<Button
				key={index}
				className="text-gray-600 dark:text-gray-400 w-14 h-10 text-3xl"
				variant="ghost"
				onClick={() => onEmojiClick(emoji)}
			>
				<span className="sr-only">Smile Emoji</span>
				{emoji}
			</Button>
		))
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className="text-gray-600 dark:text-gray-400" variant="ghost">
					<span className="sr-only">Emoji</span>
					<IconEmoji className="w-4 h-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="end" className="text-center w-80 -ml-20">
				{renderSmileEmojiButtons()}
			</PopoverContent>
		</Popover>
	)
}

function IconEmoji(props: SVGProps<SVGSVGElement>) {
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
			<circle cx="12" cy="12" r="10" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line x1="9" x2="9.01" y1="9" y2="9" />
			<line x1="15" x2="15.01" y1="9" y2="9" />
		</svg>
	)
}
