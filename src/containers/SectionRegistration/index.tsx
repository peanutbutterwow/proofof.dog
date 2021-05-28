import React from "react"
import { Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import GenerateToken from "../GenerateToken"
import Section from "../../components/Section"

import * as S from "./styled"

const SectionRegistration: React.FC = () => {
  const [title] = useFormatMessages([{ id: "REGISTRATION_TITLE" }])

  return (
    <Section as={S.Wrapper}>
      <S.HeroRow center="xs">
        <Col xs={12}>
          <S.Title>{title}</S.Title>
        </Col>
      </S.HeroRow>
      <GenerateToken twitterShare />
    </Section>
  )
}

export default SectionRegistration
