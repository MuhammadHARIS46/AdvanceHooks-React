import React from "react"
import styled from "styled-components"
import Circles from "../animations/Circles"

function CourseCard() {
    return(
        <Wrapper className="courseCard">
            <AnimationWrapper>
                <Circles/>
            </AnimationWrapper>
            
            <Illustration src="/images/illustrtions/illustration-1.png" alt="illustration "/>

        </Wrapper>
    )
}
export default CourseCard
const Wrapper=styled.div`
position:relative;
display:grid;
 max-width:360px;
 width:100%;
 height:480px;
 background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
 border-rdius:20px;
 box-shadow:
 justify-content:center;
 align-content:center;
`
const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;
`
const Illustration=styled.img`
 width:300px;
`