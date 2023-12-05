import Image from 'next/image'
import { useState } from 'react'

export default function ImageUpload() {
	const [_image, setImage] = useState<File | null>(null)
	const [imagePreview, setImagePreview] = useState<string | null>(null)

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setImage(e.target.files[0])
			setImagePreview(URL.createObjectURL(e.target.files[0]))
		}
	}

	return (
		<div>
			<input type="file" onChange={handleImageChange} />
			{imagePreview && <Image src={imagePreview} alt="preview" />}
		</div>
	)
}
