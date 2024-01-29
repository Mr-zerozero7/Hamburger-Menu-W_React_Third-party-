// Write your code here

import Header from '../Header'

import {
  AboutContainer,
  AboutImageContainer,
  MobileAboutImage,
  DesktopAboutImage,
} from './styledComponent'

const About = () => (
  <AboutContainer>
    <Header />
    <AboutImageContainer>
      <MobileAboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
      />
      <DesktopAboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        alt="about"
      />
    </AboutImageContainer>
  </AboutContainer>
)

export default About
