import React from "react"
import { Row } from "react-styled-flexboxgrid"
import * as htmlToImage from "html-to-image"
import { useFormatMessages } from "../../utils/hooks"

import Button from "../../components/Button"
import QRCode from "../../components/QRCode"
import PublicKeyTweet from "../../components/PublicKeyTweet"

import * as S from "./styled"

const UserInfo: React.FC = ({
  dogname,
  message,
  publicKey,
  secretKey,
  twitterShare = false,
  username,
}) => {
  const publicKeyUrl = `https://dogetag.dog/addr?publicKey=${publicKey}`
  const tweetMessage = `${dogname}'s #proofOfDog\n\n${message}\n\n#KYD\n\n`
  const [
    saveText,
    downloadText,
    tweetText,
    takePictureText,
    saveSecretText,
    publicKeyText,
    secretKeyText,
  ] = useFormatMessages([
    { id: "SAVE" },
    { id: "DOWNLOAD" },
    { id: "PRESS_TO_TWEET" },
    { id: "TAKE_PICTURE" },
    { id: "SAVE_KEEP_SECRET" },
    { id: "PUBLIC_KEY" },
    { id: "SECRET_KEY" },
  ])

  const handleSave = (selector) => () => {
    htmlToImage.toPng(document.getElementById(selector))
      .then(dataUrl => {
        const link = document.createElement('a')

        link.download = `${selector}.jpeg`
        link.href = dataUrl
        link.target = '_blanc'
        link.click()
      })
  }

  const handleDownload = () => {}

  return (
    <>
      <S.ShapesRow center="xs">
        <S.StepCol xs={12} sm={6}>
          <S.QRWrapper id="qr-link">
            <QRCode
              info="USER_CARD"
              value={publicKeyUrl}
            />
          </S.QRWrapper>
          <Button text={saveText} backgroundColor="primary" onClick={handleSave('qr-link')} gatsbyLink />
          <S.TextRow bold color="#00a000" mTop={5}>{takePictureText}</S.TextRow>
        </S.StepCol>
        <S.StepCol xs={12} sm={6}>
          <S.QRWrapper id="qr-secret">
            <QRCode
              info="SECRET_KEY"
              value={secretKey}
            />
          </S.QRWrapper>
          <Button text={downloadText} backgroundColor="primary" onClick={handleSave('qr-secret')} gatsbyLink />
          <S.TextRow bold color="#DD0000" mTop={5}>{saveSecretText}</S.TextRow>
        </S.StepCol>
      </S.ShapesRow>
      <Row>
        <S.TextRow fontSize={18} fontStyle="italic">{`${publicKeyText}: ${publicKey}`}</S.TextRow>
      </Row>
      <Row>
        <S.TextRow fontSize={18} fontStyle="italic">{`${secretKeyText}: ${secretKey}`}</S.TextRow>
      </Row>
      {twitterShare && (
        <PublicKeyTweet
          dogname={dogname}
          message={message}
          publicKey={publicKey}
        />
      )}
    </>
  )
}

export default UserInfo
