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
