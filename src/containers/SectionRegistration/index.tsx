import React, { useState } from "react"
import axios from "axios"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import Section from "../../components/Section"
import Button from "../../components/Button"
import UserInfo from "./UserInfo"

import * as S from "./styled"

const SectionRegistration: React.FC = () => {
  const [values, setValues] = useState({ twitter: '', dogname: '' })
  const [userInfo, setUserInfo] = useState(null)
  const [
    title,
    ctaText,
    inputUsernameText,
    inputDognameText,
    submitText,
    resetText,
  ] = useFormatMessages([
    { id: "REGISTRATION_TITLE" },
    { id: "REGISTRATION_CTA_TEXT" },
    { id: "INPUT_USERNAME" },
    { id: "INPUT_DOGNAME" },
    { id: "SUBMIT" },
    { id: "RESET" },
  ])

  const handleInput = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleKeyDown = (event) => event.keyCode === 32 && event.preventDefault()

  const handleReset = () => setValues({ twitter: '', dogname: '' })

  const handleSubmit = () => {
    axios.get('https://dogetag.dog/api/user', { params: values })
      .then(({ data }) => setUserInfo(data))
      .catch(error => console.log('ERROR', error))
  }

  return (
    <Section as={S.Wrapper}>
      <S.HeroRow center="xs">
        <Col xs={12}>
          <S.Title>{title}</S.Title>
        </Col>
      </S.HeroRow>
      <S.InputWrapper center="xs">
        <S.StepCol xs={12} sm={6}>
          <S.InputText
            name="twitter"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={inputUsernameText}
            value={values.twitter}
          />
        </S.StepCol>
        <S.StepCol xs={12} sm={6}>
          <S.InputText
            name="dogname"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={inputDognameText}
            value={values.dogname}
          />
        </S.StepCol>
      </S.InputWrapper>
      <S.ActionsWrapper>
        <Col xs={12} sm={6}>
          <Button
            backgroundColor="primary"
            gatsbyLink
            onClick={handleSubmit}
            text={submitText}
          />
        </Col>
        <Col xs={12} sm={6}>
          <Button
            backgroundColor="secondary"
            gatsbyLink
            onClick={handleReset}
            text={resetText}
          />
        </Col>
      </S.ActionsWrapper>
      {userInfo && (<UserInfo {...userInfo} />)}
    </Section>
  )
}

export default SectionRegistration
