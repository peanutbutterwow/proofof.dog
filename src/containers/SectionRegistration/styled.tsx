import { rem } from "polished"
import styled from "styled-components"
import { Row, Col } from "react-styled-flexboxgrid"

export const InputText = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #444;
  font-size: 24px;
  padding: 5px;
  width: 90%;
`

export const ActionsWrapper = styled(Row)`
  max-width: 400px;
`

export const TextRow = styled.p`
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`}
  ${({ lSpacing }) => lSpacing && `letter-spacing: ${lSpacing}px;`}
  ${({ mTop }) => mTop && `margin-top: ${mTop}px;`}
  ${({ tTransform }) => tTransform && `text-transform: ${tTransform};`}
`

export const RowTweet = styled(Row)`
  margin-top: 50px;
`

export const QRWrapper = styled.div`
  width: fit-content;
`

export const RowTweetMessage = styled(Row)`
  border-left: solid 4px #c9c9c9;
  padding: 8px 0 8px 30px;
  margin: 0;

  & > p {
    margin: 5px 0;
  }
`

export const InputWrapper = styled(Row)`
  margin-bottom: 30px;
`

export const Title = styled.h2`
  font-size: ${rem(70)};
  line-height: ${rem(72)};
  letter-spacing: -2px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    font-size: 30px;
    letter-spacing: -1.5px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`

export const HeroRow = styled(Row)`
  margin-bottom: ${rem(24)};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    margin-bottom: 20px;
  }
`

export const StepCol = styled(Col)`
  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    &:not(:last-child) {
      margin-bottom: ${rem(56)};
    }
  }
`
export const ShapesRow = styled(Row)`
  align-items: flex-start;
  margin-bottom: ${rem(60)};
  margin-top: ${rem(60)};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    margin-bottom: ${rem(64)};
  }
`

export const Wrapper = styled.section`
  padding: ${rem(120)} 0;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    padding: 60px 0;
  }
`
