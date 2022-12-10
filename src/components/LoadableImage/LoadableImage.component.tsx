import { FC, useState, useRef, useEffect } from 'react'
import { LoadableImageContainer, LoadableImageStyle } from './LoadableImage.styles'
import { ILoadableImageTypes } from './LoadableImage.types'
import useOnScreen from '../../hooks/use-one-screen'

const LoadableImage: FC<ILoadableImageTypes> = (props): JSX.Element => {
	const { src, alt = '', onLoad = () => {}, background = false } = props
	const [isLoaded, setIsLoaded] = useState(false)
	const imageRef = useRef<HTMLImageElement | null>(null)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const isVisible = useOnScreen(containerRef)

	useEffect(() => {
		if (!isVisible || isLoaded) {
			return
		}
		if (imageRef.current != null) {
			imageRef.current.onload = () => {
				setIsLoaded(true)
				onLoad()
			}
		}
	}, [isVisible, onLoad, isLoaded])

	return (
		<LoadableImageContainer background={background} ref={containerRef} loading={isLoaded}>
			{(isVisible || isLoaded) && <LoadableImageStyle ref={imageRef} src={src} alt={alt} />}
		</LoadableImageContainer>
	)
}

LoadableImage.displayName = 'LoadableImage'

export default LoadableImage
