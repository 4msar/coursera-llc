import React from 'react';
import Card from '../../components/Card/Card';
import './Menu.css';

const menuItems = [
  {
    title: 'Greek Salad',
    description: 'Fresh cucumbers, tomatoes, olives, and feta cheese with our house dressing.',
    price: '$12.99',
  },
  {
    title: 'Bruschetta',
    description: 'Toasted bread topped with diced tomatoes, basil, and balsamic glaze.',
    price: '$9.99',
  },
  {
    title: 'Lemon Dessert',
    description: 'Homemade lemon tart with a buttery crust and meringue topping.',
    price: '$7.99',
  },
  {
    title: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon butter sauce and roasted vegetables.',
    price: '$22.99',
  },
  {
    title: 'Lamb Kebab',
    description: 'Marinated lamb skewers served with tzatziki and warm pita bread.',
    price: '$18.99',
  },
  {
    title: 'Pasta Primavera',
    description: 'Seasonal vegetables tossed with garlic olive oil and parmesan.',
    price: '$15.99',
  },
];

function Menu() {
  return (
    <section className="menu-page">
      <div className="menu-inner">
        <h1 className="menu-title">Our Menu</h1>
        <p className="menu-intro">
          Explore our selection of Mediterranean classics, made fresh daily.
        </p>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <Card key={index} className="menu-card">
              <div className="menu-card-header">
                <h3 className="menu-card-title">{item.title}</h3>
                <span className="menu-card-price">{item.price}</span>
              </div>
              <p className="menu-card-desc">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
