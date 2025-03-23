import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 30rem;
  border-radius: 8px;
  padding: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > strong {
      font-size: 1.5rem;
    }

    > button {
      border: 0;
      background: transparent;
      display: flex;
    }
  }

  .status-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin-top: 2rem;

    > small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    > div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .products-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item {
      display: flex;

      img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 6px;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 1.25rem;

        margin-left: 0.75rem;
      }

      .product-details {
        display: flex;
        flex-direction: column;

        margin-left: 0.25rem;
        gap: 0.25rem;

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;

  .primary {
    background-color: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .cancel {
    padding: 0.75rem 1.5rem;
    color: #d73035;
    background: transparent;
    border: 0;
  }
`;
