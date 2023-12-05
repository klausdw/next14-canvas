'use client'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import Toolbar from '@/components/Toolbar'
import LoadingIndex from '@/components/LoadingIndex'

export default function Home() {
	const fillColor = 'red'
	const strokeColor = 'red'
	const { editor, onReady } = useFabricJSEditor({
		defaultFillColor: fillColor,
		defaultStrokeColor: strokeColor,
		scaleStep: 1.2,
	})

	if (typeof window !== 'undefined' && window && window.fabric) {
		window.fabric.Object.prototype.set({
			borderColor: 'red',
			cornerColor: 'blue',
			cornerSize: 10,
			cornerStyle: 'circle',
			transparentCorners: true,
			rotatingPointOffset: 100,
			selectionBackgroundColor: 'transparent',
		})
	}

	return (
		<div>
			<div className="bg-gray-200 h-[350mm]">
				{editor ? <Toolbar editor={editor} /> : <LoadingIndex />}
				<div className="pt-8 transform scale-50 lg:scale-100">
					<FabricJSCanvas
						className="mx-auto bg-white w-[210mm] h-[297mm] drop-shadow-md"
						onReady={onReady}
					/>
				</div>
			</div>
		</div>
	)
}
