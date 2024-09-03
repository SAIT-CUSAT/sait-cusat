"use client"
import React from "react";
import styled, { keyframes, css } from "styled-components";


function Recruiter() {
  const row1 = [
    "https://www.drupal.org/files/QBurst%20Logo.png",
    "data:image/png;base64,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",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <AppContainer>
      <Wrapper>
       
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Recruiter;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #ffffff;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(0, 0, 99, 0.2) 0px 2px 8px 0px;
`;