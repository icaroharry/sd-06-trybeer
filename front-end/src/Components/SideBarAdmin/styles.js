import styled, { css, keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .4;
  }
  100% {
    transform: translatex(0);
    opacity: 1;
  }
`;

const CompSideBar = styled.div`
  ${({ theme, stateSideBarAdmin }) => css`
    width: 300px;
    height: 100vh;

    z-index: 998;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    /* position: fixed; */

    padding-top: 100px;

    border-right: 3px solid ${theme.colors.green};
    background: ${theme.colors.secondary};

    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${animate} 0.5s;

    @media (max-width: 850px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      display: ${stateSideBarAdmin ? 'none' : 'flex'};
      background: ${theme.colors.secondary}dd;
      position: fixed;
      width: 50%;
    }

    @media (max-width: 480px) {
      width: 80%;
    }

    .get-out {
      /* margin-top: 100px; */
    }
  `}
`;

const Navigation = styled.a`
  ${({ theme }) => css`
    width: 100%;

    padding: 10px 60px;

    display: flex;
    align-items: center;

    margin-bottom: 20px;
    text-decoration: none;

    color: ${theme.colors.text};

    font-size: 20px;
    font-weight: 500;

    .icon {
      margin-right: 15px;
    }

    /* background: #DAE8C3; */
    /* border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.text}; */

    transition: background  0.3s;

    &:hover {
      background: ${theme.colors.backgroundMouseOver};
    }
  `}
`;

export default {
  CompSideBar,
  Navigation,
};
