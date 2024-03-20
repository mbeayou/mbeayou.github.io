import React from 'react'

import Container from 'components/Container'

import * as S from './styled'

const FooterData = () => {
  return (
    <S.FooterData>
      <Container>
        ©{new Date().getFullYear()} made by m.s.baayou
        <a className="link" href="https://github.com/felipefialho/felipefialho.com/" target="_blank" rel="noopener noreferrer">built with gatsby based on this theme</a>
      </Container>
    </S.FooterData>
  )
}

export default FooterData
