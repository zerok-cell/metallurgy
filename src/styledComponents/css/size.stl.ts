import { css } from 'styled-components'
import { TSize } from '@/types/styledComponents/css/size.type.ts'

/**
 * Утилита для применения размеров в styledComponents.
 *
 * Данная функция позволяет динамически применять CSS свойства, связанные с размерами (высота, ширина, максимальная/минимальная ширина и высота)
 * в зависимости от переданных в компонент пропсов.
 *
 * Пример использования:
 * ```tsx
 * const Box = styled.div<SizeProps>`
 *   ${size};
 *   background-color: lightblue;
 * `;
 *
 * <Box height="100px" width="50%" maxWidth="200px" minHeight="50px" />;
 * ```
 *
 * @param {TSize} props - Свойства, связанные с размерами, которые применяются к элементу.
 * @returns {string} - Сгенерированный CSS для указанных свойств размеров.
 */
export const size = css<Readonly<TSize>>`
    ${(props) => props.height && `height: ${props.height};`}
    ${(props) => props.width && `width: ${props.width};`}
    ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
    ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
    ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
`
