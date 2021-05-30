import React from "react"
import { Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import TokenForm from "../../components/TokenForm"
import Section from "../../components/Section"

import * as S from "./styled"

const SectionRegistration: React.FC = () => {
  const [title] = useFormatMessages([{ id: "REGISTRATION_TITLE" }])

  const handleSubmit = ({ dogname, twitter }) => {
    localStorage.setItem('dogname', dogname)
    localStorage.setItem('twitter', twitter)

    window.location.href = '/getting-started'
  }

  return (
    <Section as={S.Wrapper}>
      <S.HeroRow center="xs">
        <Col xs={12}>
          <S.Title>{title}</S.Title>
        </Col>
      </S.HeroRow>
      <TokenForm onSubmit={handleSubmit} />
    </Section>
  )
}

export default SectionRegistration
