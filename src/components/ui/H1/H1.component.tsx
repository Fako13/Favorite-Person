import { DefaultH1, BigH1 } from './H1.styles'
import { FC } from 'react'
import { H1Props, H1_SIZE } from './H1.types'

const getCustomH1 = (size: H1_SIZE): typeof DefaultH1 => (size === 'big' ? BigH1 : DefaultH1)

const H1: FC<H1Props> = ({ children, size = H1_SIZE.default, ...otherProps }): JSX.Element => {
	const CustomH1 = getCustomH1(size)
	return <CustomH1 {...otherProps}>{children}</CustomH1>
}

H1.displayName = 'H1'

export default H1
