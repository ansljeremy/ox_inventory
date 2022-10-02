import { imagepath } from '../../store/imagepath';
import { useState } from 'react';

const mockData = [
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
  {
    name: 'water',
    ingredients: {
      ['burger']: 5,
      water: 3,
    },
  },
];

const Crafting: React.FC = () => {
  const [items, setItems] = useState(mockData);

  return (
    <div className="crafting-window-container">
      <div className="crafting-window-wrapper">
        <div className="crafting-item-grid">
          {items.map((item) => (
            <div
              key={`crafting-${item.name}`}
              className="crafting-item-container"
              style={{ backgroundImage: `url(${imagepath}/water.png)` }}
            >
              <div className="inventory-slot-label-box">
                <p className="inventory-slot-label-text">Water</p>
              </div>
            </div>
          ))}
        </div>
        <div className="crafting-item-panel">
          <div className="crafting-item-panel-flex-wrapper">
            <div className="crafting-item-panel-item">
              <img src={`${imagepath}/water.png`} alt="item-img" />
              <p>Water</p>
            </div>
            <div className="crafting-item-panel-ingredients">
              <p style={{ paddingBottom: 5 }}>Ingredients:</p>
              <div className="crafting-item-ingredient">
                <img src={`${imagepath}/water.png`} className="item-slot-currency-wrapper" />
                <p>3x Water</p>
              </div>
              <div className="crafting-item-ingredient">
                <img src={`${imagepath}/burger.png`} className="item-slot-currency-wrapper" />
                <p>2x burger</p>
              </div>
            </div>
          </div>
          <button className="crafting-craft-button">Craft</button>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
