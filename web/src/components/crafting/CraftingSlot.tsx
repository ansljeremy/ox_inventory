import { imagepath } from '../../store/imagepath';
import React from 'react';
import { Slot } from '../../typings';
import { isSlotWithItem } from '../../helpers';

const CraftingSlot: React.FC<{ item: Slot }> = ({ item }) => {
  return (
    <div className="crafting-slot">
      {isSlotWithItem(item) ? (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          <div
            style={{
              width: '10.2vh',
              height: '10.2vh',
              backgroundImage: `url(${`${imagepath}/${item.metadata?.image ? item.metadata.image : item.name}.png`})`,
            }}
            className="inventory-slot crafting-slot-wrapper"
          >
            <div className="inventory-slot-label-box">
              <div className="inventory-slot-label-text">{item.name}</div>
            </div>
          </div>
          <div className="crafting-ingredients">
            <div className="crafting-ingredient-wrapper">
              <img src={`${imagepath}/water.png`} />
              <p>Water: 3</p>
            </div>
            <div className="crafting-ingredient-wrapper">
              <img src={`${imagepath}/burger.png`} />
              <p>Burger: 10</p>
            </div>
            <div className="crafting-ingredient-wrapper">
              <img src={`${imagepath}/cola.png`} />
              <p>Cola: 10</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CraftingSlot;
