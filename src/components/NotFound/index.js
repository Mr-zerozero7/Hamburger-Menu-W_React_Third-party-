// Write your code here
import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundContent,
  ContentContainer,
  NotFoundImage,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundContent>
      <ContentContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <Heading>Lost Your Way?</Heading>
        <Description>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </Description>
      </ContentContainer>
    </NotFoundContent>
  </NotFoundContainer>
)

export default NotFound
