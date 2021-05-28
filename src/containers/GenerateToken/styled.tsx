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

export const QRWrapper = styled.div`
  width: fit-content;
`

export const InputWrapper = styled(Row)`
  margin-bottom: 30px;
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
