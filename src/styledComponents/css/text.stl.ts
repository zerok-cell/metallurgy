import styled, { CSSProperties } from 'styled-components'
import { baseFont } from '@/styledComponents/css/font.stl.ts'
import { BaseFontProps } from '@/Types/styledComponents/font.types'


interface ExtendedSpanBlueProps extends BaseFontProps {
    color?: CSSProperties["color"],
    height?: CSSProperties["height"]
}
export const SpanBlue = styled.span<ExtendedSpanBlueProps>`
    color: ${({ color }) => color};
    ${({ wg, fs }) => baseFont({ fm: "Rubik", wg, fs })}
    height: max-content;
`