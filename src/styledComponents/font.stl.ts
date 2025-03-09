import { css } from "styled-components"
import { BaseFontProps } from "@/Types/styleComponent/font.types"

/**
 * @description Конструктор стилей для шрифтов
 * @param weight Жирность шрифта
 * @param family Семейство шрифта
 */
export const baseFont = ({ weight, family }: BaseFontProps) => css`
    font-weight: ${weight || 400};
    font-family:  ${family}, sans-serif;
`




