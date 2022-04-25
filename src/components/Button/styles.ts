import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type?: TypeProps;
};

export const Container = styled<any>(RectButton).attrs<Props>(({ theme }) => ({
  
}))<Props>`

  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) => type === 'primary' ?  theme.COLORS.PRIMARY_900 : theme.COLORS.PRIMARY_800 };
`;


