import styled from "styled-components"
import { rem } from "polished"
import { CustomGrid } from "../../core/GlobalStyles"

export const SectionWrapper = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  background-color: ${(props) => props.theme.colors.background};

  & > * {
    z-index: 2;
    position: relative;
  }

  &:not(:last-child) {
    ${CustomGrid} {
      padding-bottom: ${rem(160)};
    }
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    &:not(:last-child) {
      padding-bottom: 40px;
    }
  }
`

export const RadiusWrapper = styled(Wrapper)`
  padding-top: ${rem(170)};
  border-radius: ${rem(63)} ${rem(63)} 0 0;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    padding-top: 60px;
    border-radius: 24px 24px 0 0;
  }
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
