import React from 'react';
import SpecialCard from '../SpecialCard/SpecialCard';
import './Specials.css';
import greekSaladImg from '../../assets/images/greek-salad.jpg';
import bruschettaImg from '../../assets/images/bruschetta.jpg';
import lemonDessertImg from '../../assets/images/lemon-dessert.jpg';

const defaultSpecials = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Dhaka style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSaladImg,
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$7.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruschettaImg,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$6.99',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessertImg,
  },
];

function Specials({ items = defaultSpecials }) {
  return (
    <section className="specials">
      <div className="specials-inner">
        <div className="specials-header">
          <h2 className="specials-title">This week&rsquo;s specials!</h2>
          <a href="/menu" className="specials-menu-link">Online Menu</a>
        </div>
        <div className="specials-grid">
          {items.map((item) => (
            <SpecialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
