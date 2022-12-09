import { FC, useState, useRef, useEffect } from 'react'
import { LoadableImageContainer, LoadableImageStyle } from './LoadableImage.styles'
// import cn from 'classnames'
import { ILoadableImageTypes } from './LoadableImage.types'
import useOnScreen from '../../hooks/use-one-screen'

const LoadableImage: FC<ILoadableImageTypes> = (props): JSX.Element => {
	const { src, alt = '', onLoad = () => {} } = props
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
		<LoadableImageContainer ref={containerRef} className={isLoaded ? 'containerLoaded' : ''}>
			{(isVisible || isLoaded) && (
				<LoadableImageStyle
					ref={imageRef}
					className={isLoaded ? 'imageLoaded' : ''}
					src={src}
					alt={alt}
				/>
			)}
		</LoadableImageContainer>
	)
}

export default LoadableImage
