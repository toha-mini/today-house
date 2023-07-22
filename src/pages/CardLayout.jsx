import React from 'react';
import { useCard } from '../hooks/useCard';
import { Card } from './Card';
import styled from 'styled-components';

export const CardLayout = () => {
  const { card, deleteTodo, makeDone } = useCard();

  return (
    <CardLayoutWrapper>
      <CardLists>
        {card &&
          card.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                titleImage={item.titleImage}
                content={item.content}
                deleteTodo={deleteTodo}
                makeDone={makeDone}
              />
            );
          })}
      </CardLists>
    </CardLayoutWrapper>
  );
};

const CardLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 400px; 
`;

const CardLists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
`;
