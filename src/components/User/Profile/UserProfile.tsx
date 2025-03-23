import { ContainerFlex } from '@/styledComponents/Containers.stl'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { selectUser } from '@/redux/slices/userSlice'
import TInitialStateUser from '@/types/redux/userSlice.types'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'

const UserProfile = () => {
    const theme = useTheme() as TTheme
    const { name, email, phone, profilePictureUrl }: TInitialStateUser =
        useAppSelector(selectUser)
    const firstTwoSymbolName = name.slice(0, 2)
    const dispath = useAppDispatch()
    return (
        <main>
            <ContainerFlex
                background={theme.background.accent}
                height={'100%'}
                width={'50%'}
                style={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.border.muted}`,
                }}
                padding={'20px'}
            >
                <ContainerFlex
                    width={'100%'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    height={'30%'}
                    padding={'20px'}
                    background={theme.background.primary}
                    style={{
                        border: `1px solid ${theme.border.muted}`,

                        borderRadius: '20px',
                    }}
                >
                    <AvatarWrapper
                        w={'150px'}
                        src={profilePictureUrl}
                        nameFallback={firstTwoSymbolName}
                    />
                </ContainerFlex>
            </ContainerFlex>
        </main>
    )
}

export default UserProfile
