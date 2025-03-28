import styled from 'styled-components'
import { Button } from '@/components/ui/button.tsx'
import { TButtonShadcnWrapper } from '@/types/styledComponents/buttonShadcnWrapper.types.ts'

/**
 * @description Обертка для кнопки из библиотеки `Shadcn`. Синхронизируеться полностью с темой
 */
const ButtonShadcnWrapper = styled(Button)<Readonly<TButtonShadcnWrapper>>`
    background: ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.contrast.accent};
    border: 2px solid ${({ theme }) => theme.border.accent};

    &:hover {
        background: color-mix(
                in srgb,
                white,
                ${({ theme }) => theme.background.accent} 10%
        );
    }
`

export default ButtonShadcnWrapper
