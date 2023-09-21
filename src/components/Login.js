import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="\images\cta-logo-one.svg" />
                <SignUp>get all there</SignUp>
                <Description>All of our plans give you access to all content on our platform: 
                    Unlimited live sports (Cricket, Tennis grand slams, Premier League and more) 
                    Latest Indian movie digital premieres, Hotstar Specials, and Star serials before TV. 
                    Disney+ Originals, popular Disney movies & kid's shows (in English & select Indian languages)
                </Description>
                <CTALogoTwo src="\images\cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &:before {
        background-position: top;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
`

const CTALogoOne = styled.img``

const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    color: #f9f9f9;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`