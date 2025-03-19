import { TDataNav } from '@/types/components/header/header.types'
import { HeaderStyle } from '@/styledComponents/header.stl'
import { useTheme } from 'styled-components'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import IconWithText from '@/styledComponents/IconWithText.tsx'
import { MotionConfig } from 'motion/react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setBlur } from '@/redux/slices/blurSlice.ts'
import Logotype from '@/components/Header/Logotype.tsx'

const Header: FC<{ data: TDataNav[] }> = ({ data }) => {
    const theme = useTheme() as Theme
    const dispatch = useDispatch()

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    onHoverStart={() => {
                        dispatch(setBlur(true))
                    }}
                    onHoverEnd={() => {
                        dispatch(setBlur(false))
                    }}
                    initial={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                    animate={{ gridTemplateColumns: '100px 1fr' }}
                    x={'center'}
                    y={'center'}
                    col={'100px 1fr'}
                    colGap={'10px'}
                    row={'1'}
                    className="header header--flex"
                >
                    <Logotype />
                    <ContainerFlex
                        background={theme.background.lowWhite}
                        padding={'20px'}
                        style={{
                            borderRadius: '20px',
                            border: `3px ${theme.border.accent} solid`,
                        }}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'max-content'}
                    >
                        {data.map(({ text, icon, link }, index) => (
                            <IconWithText key={index}>
                                {icon}
                                <a
                                    key={index}
                                    href={link || ''}
                                    className="header__text header__text--rubik-font"
                                >
                                    {text}
                                </a>
                            </IconWithText>
                        ))}
                    </ContainerFlex>
                </HeaderStyle>
            </MotionConfig>
        </>
    )
}

export default Header
