import React from "react"
import QRCode from "qrcode.react"

import { useFormatMessages } from "../../utils/hooks"

import * as S from "./styled"

const ComponentQRCode: React.FC = ({
  info,
  title = 'DOG_TAG',
  value,
}) => {
  const [
    infoText,
    titleText,
  ] = useFormatMessages([
    { id: info },
    { id: title },
  ])

  return (
    <S.QRWrapper>
      <S.QRInfo>{infoText}</S.QRInfo>
      <S.QRTitle>{titleText}</S.QRTitle>
      <QRCode
        imageSettings={{
          height: 90,
          src: '/images/dogecoin-icon.png',
          width: 90,
        }}
        level="H"
        renderAs="svg"
        size={256}
        value={value}
      />
    </S.QRWrapper>
  )
}

export default ComponentQRCode
