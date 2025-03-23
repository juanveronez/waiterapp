import styled from "styled-components";

export const Container = styled.header`
  background-color: #d73035;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 12.5rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: #fff;

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
    }
  }
`;
