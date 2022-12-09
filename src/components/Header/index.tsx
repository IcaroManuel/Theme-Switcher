import React, { useContext } from 'react';
//essa API do react {useContext} é responsável por ler e trazer os dados de um Context.
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components' 
// themeContext é pra habilitar a leitura dos dados do tema do styled-components.
import { shade} from 'polished' 
//esse import shade do polished, pega uma cor e aplica um percentual de preto nela.

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}
const Header: React.FC< Props > = ({ 
  toggleTheme
}) => {

  //acessar dados do tema do styled-components de fora da estilização:
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      Hello World
      <Switch 
      onChange={ toggleTheme }
      checked={ title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={18}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.sedundary}

      />
    </Container>

  )
};
export default Header;