import React from 'react';
import styled from 'styled-components';

const StyledSocialWrapper = styled.div`
display: flex;

  /* Calculate columns, depending on how many profiles there are */
  grid-template-columns: repeat(1fr, auto);
  justify-content: start;
  justify-items: start;
  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  background: var(--grey-800);
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  /* @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: visible;
  } */
  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: '';
    width: 2.5rem;
  }
  /* Show scrollbar if desktop and wrapper width > viewport width */
  /* @media (hover: hover) {
    scrollbar-color: ${({ theme }) =>
      theme.colors.scrollBar} transparent; //Firefox only
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.scrollBar};
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
    } */
  }
  a {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    /* @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-right: 1rem;
    } */
  }

  .styled-social-profile {
  width: auto;
  height: auto;
  background: var(--primary-500);
  background: linear-gradient(to right,  50%, #background-color 50%);
  background-size: 205% 100%;
  background-position: right bottom;
  border-radius: 20px;
  border: 0.125rem solid #222;
  padding: 0.3rem 1.25rem;
  transition: all 0.1s ease-out;
  font-size: 1rem;
  font-weight: 500;
  color: #primary-color;
}

.styled-social-profile:hover {
  background-position: left bottom;
  color: #background-color;
}

.styled-social-profile:hover svg {
  filter: invert(1);
}

.styled-social-profile svg {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  margin-bottom: -0.05rem;
}
`;

const Social = ({ width, padding, fontSize, fontWeight, withIcon }) => {
  return (
    // <div className='styled-social-wrapper'>
    //   {/* {socialMedia.map(({ name, url }, key) => { */}
    //     return (
    //       <a
    //         key={key}
    //         href={url}
    //         target='_blank'
    //         rel='nofollow noopener noreferrer'
    //         aria-label={name}
    //         className='styled-social-profile'
    //         style={{
    //           width: width ? width : 'auto',
    //           padding: padding ? padding : '.3rem 1.25rem',
    //           fontSize: fontSize ? fontSize : '1rem',
    //           fontWeight: fontWeight ? fontWeight : 500,
    //         }}
    //       >
    //         {withIcon ? <Icon name={name} /> : null} {name}
    //       </a>
    //     );
    //   {/* })} */}
    // </div>
    <div className=''>
      <StyledSocialWrapper>
        <a href='' className='styled-social-profile'>
          LINK
        </a>
        <a href='' className='styled-social-profile'>
          LINK
        </a>
        <a href='' className='styled-social-profile'>
          LINK
        </a>
      </StyledSocialWrapper>
    </div>
  );
};

export default Social;
