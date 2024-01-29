/* Write your CSS here */
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen (max-width: 768px) {
    align-items: flex-start;
    margin-top: 60px;
  }
`
export const ContentContainer = styled.div`
flex-grow: 1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 90%;
max-width: 1100px;
@media screen (max-width: 768px){
    max-width: 458px
    margin-top: 60px
}
`

export const NotFoundImage = styled.img`
  width: 230px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 475px;
  }
`
export const Heading = styled.h1`
color: #334155;
font-family: 'roboto'
font-weight: 600;
font-size: 16px
margin: 0px;
margin-top: 32px;
line-height: 1.5;
@media screen(max-width: 768px){
    font-weight: 500;
    font-size: 36px;
    line-height: 1.25;
}
`
export const Description = styled.p`
color: #64748b;
font-family: 'roboto'
font-size: 16px
margin-top: 16px;
line-height: 1.75;
@media screen(max-width: 768px){
    text-align: center;
    width: 243;
    margin-top: 6px;
    font-size: 12px;
    line-height: 1.34;
}
`
