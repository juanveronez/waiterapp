import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  flex-direction: column;
  display: flex;
  gap: 1.5rem;
  flex: 1;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    gap: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 8rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    > strong {
      font-weight: 500;
    }

    > span {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;
