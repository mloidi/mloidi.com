import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from '../globalState';

const colors = [
  '#FF1493',
  '#F08080',
  '#DB7093',
  '#FF6347',
  '#D2691E',
  '#CD5C5C',
  '#20B2AA',
  '#3CB371',
  '#4682B4',
  '#6495ED',
  '#7B68EE',
  '#9932CC',
  '#FFDEAD',
  '#F5DEB3',
  '#778899',
  // '#2F4F4F',
  // '#696969',
  // '#808080',
  // '#708090',
  // '#00008B',
  // '#DC143C',
  // '#B22222',
  // '#F5F5F5',
  // '#FFFAFA',
];

const ColorPicker = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 22.4px);
  grid-gap: 5px;
  position: absolute;
  z-index: 99;
`;

const Color = styled.button`
  background: ${(props) => props.color};
  border: 2px solid ${(props) => (props.selected ? 'black' : props.color)};
  border-radius: 50%;
  width: 22.4px;
  height: 22.4px;
  :focus {
    outline: none;
  }
`;

export const ColorSelector = () => {
  const { setSelectedColor, selectedColor } = useContext(DataContext);
  const [showAll, setShowAll] = useState(false);
  const [selectedColorAux, setSelectedColorAux] = useState(selectedColor);

  return (
    <div>
      <ColorPicker>
        {colors.map((color) =>
          showAll || selectedColorAux === color ? (
            <Color
              key={color}
              color={color}
              selected={selectedColor === color}
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  setSelectedColor(color);
                  setSelectedColorAux(color);
                } else {
                  setShowAll(true);
                }
              }}
            ></Color>
          ) : (
            <React.Fragment key={color}></React.Fragment>
          )
        )}
      </ColorPicker>
    </div>
  );
};
