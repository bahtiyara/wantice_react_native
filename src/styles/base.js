import styled from 'styled-components';
import { StyleSheet } from 'react-native';

// -------------- Props -------------- //

export const colors  = {
    primary: '#F72B35',
    background: '#000',
    primaryText: '#fff',
    secondaryText: 'rgba(255,255,255,0.5)',
    thirdText: 'rgba(255,255,255,0.3)',
    divider: 'rgba(255,255,255,0.15)',
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
}

export const fonts = {
    sm: 16,
    md: 18,
    lg: 30,
    primary: 'Pingfang SC',
    regular: '400',
    medium: '500',
    semibold: '600',
}

export const styles = StyleSheet.create({
    p: {
        fontFamily: fonts.primary,
        fontSize: 18,
        color: colors.primaryText,
        fontWeight: fonts.medium,
        lineHeight: 24,
    },
    h1: {
        fontFamily: fonts.primary,
        fontSize: 30,
        color: colors.primaryText,
        fontWeight: fonts.semibold,
        lineHeight: 42,
    },
    caption: {
        fontFamily: fonts.primary,
        fontSize: 16,
        color: colors.secondaryText,
        fontWeight: fonts.regular,
        lineHeight: 24,
    }
})

// -------------- Components -------------- //
export const H1 = styled.Text`${styles.h1}`
export const P = styled.Text`${styles.p}`
export const Input = styled.TextInput`${styles.p}`
export const Caption = styled.Text`${styles.caption}`

// export const Input = styled.TextInput.attrs(props => ({
//     placeholder: props.placeholder,
// }))`${styles.p}`