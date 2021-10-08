import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            textoPrimary: string;
            gray: string;

           //cards
            cardsBackground: string;
            cardTextoIcons: string;
            cardSubTextoMeta: string;
            cardResultPositivo: string;
            cardBordaPositivo: string;
            cardResultNegativo: string;
            cardBordaNegativa: string;

            border:string;

            bluePrimary: string;
            blueSecondary: string;
            blueTertiary: string;

            greenPrimary: string;
            greenSecondary: string;

            redPrimary: string
            redSecondary: string

            orangePrimary: string
        },

    };
}