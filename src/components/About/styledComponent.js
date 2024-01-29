/* Write your CSS here */
import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const AboutImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`
export const MobileAboutImage = styled.img`
  width: 80%;
  max-width: 468px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DesktopAboutImage = styled.img`
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
