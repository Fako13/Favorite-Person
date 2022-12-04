import { DefaultH1, BigH1 } from './H1.styles'
import { FC } from 'react'
import { H1Props, H1_CLASSES } from './H1.types'

const getH1 = (H1Type = H1_CLASSES.default): typeof DefaultH1 =>
	({
		[H1_CLASSES.default]: DefaultH1,
		[H1_CLASSES.big]: BigH1,
	}[H1Type])

const H1: FC<H1Props> = ({ children, H1Type, ...otherProps }): JSX.Element => {
	const CustomH1 = getH1(H1Type)
	return <CustomH1>{children}</CustomH1>
}

export default H1
