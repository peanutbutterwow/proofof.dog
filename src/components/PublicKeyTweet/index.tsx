import React from "react"
import { Row } from "react-styled-flexboxgrid"
import { TwitterShareButton } from 'react-twitter-embed';
import { useFormatMessages } from "../../utils/hooks"

import * as S from "./styled"

const PublicKeyTweet: React.FC = ({
  dogname,
  message,
  publicKey,
}) => {
  const publicKeyUrl = `https://dogetag.dog/addr?publicKey=${publicKey}`
  const tweetMessage = `${dogname}'s #proofOfDog\n\n${message}\n\n#KYD\n\n`
  const [
    rememberAttachText,
    tweetMessageText,
  ] = useFormatMessages([
    { id: "REMEMBER_ATTACH_PIC" },
    { id: "TWEET_MESSAGE" },
  ])

  return (
    <>
      <Row>
        <S.TextRow
          bold
          fontSize={24}
          lSpacing={1}
          mTop={30}
        >
          {tweetMessageText}
        </S.TextRow>
      </Row>
      <S.RowTweetMessage>
        <S.TextRow>{tweetMessage}</S.TextRow>
      </S.RowTweetMessage>
      <S.RowTweet>
        <TwitterShareButton
          url={publicKeyUrl}
          options={{ text: tweetMessage, via: 'proofOfDog', size: 'large' }}
        />
      </S.RowTweet>
      <Row>
        <S.TextRow bold color="#00a000" mTop={5}>{rememberAttachText}</S.TextRow>
      </Row>
    </>
  )
}

export default PublicKeyTweet
