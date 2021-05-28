import React, { useState } from "react"
import axios from "axios"
import { Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import Button from "../../components/Button"
import UserInfo from "./UserInfo"

import * as S from "./styled"

const GenerateToken: React.FC = ({
  onGenerated = () => {},
  twitterShare
}) => {
  const [values, setValues] = useState({ twitter: '', dogname: '' })
  const [userInfo, setUserInfo] = useState(null)
  const [
    inputUsernameText,
    inputDognameText,
    submitText,
    resetText,
  ] = useFormatMessages([
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
      .then(({ data }) => {
        setUserInfo(data)
        onGenerated(data)
      })
      .catch(error => console.log('ERROR', error))
  }

  return (
    <>
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
      {userInfo && (<UserInfo twitterShare={twitterShare} {...userInfo} />)}
    </>
  )
}

export default GenerateToken
