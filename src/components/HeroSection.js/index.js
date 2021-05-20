import React, { useState } from "react"
import Video from "../../videos/video.mp4"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button
} from "./HeroElements"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
      </HeroContent>
      <HeroBtnWrapper>
        <Button to="signup" onMouseHover={onHover} onMouseLease={onHover}>
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  )
}

export default HeroSection
