import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${theme.white};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const SuccessMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: ${theme.gold};
`;

const TxHash = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${theme.black};
`;

const CloseButton = styled.button`
  background-color: ${theme.gold};
  color: ${theme.white};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.yellow};
  }
`;

type Props = {
  txHash: string;
  amountStaked: string;
  onClose: () => void;
};

const StakeSuccessModal: React.FC<Props> = ({
  txHash,
  amountStaked,
  onClose,
}) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <SuccessMessage>Stake successful!</SuccessMessage>
        <TxHash>Transaction hash: {txHash}</TxHash>
        <TxHash>Amount staked: {amountStaked} Goerli ETH</TxHash>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default StakeSuccessModal;
