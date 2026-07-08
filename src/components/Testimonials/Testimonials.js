import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';
import customer1Img from '../../assets/images/customer1.jpg';
import customer2Img from '../../assets/images/customer2.jpg';
import customer3Img from '../../assets/images/customer3.jpg';
import customer4Img from '../../assets/images/customer4.jpg';

const defaultReviews = [
  {
    id: 1,
    name: 'Maria Sanchez',
    rating: 5,
    text: 'The Greek salad was absolutely delicious! The flavors were fresh and authentic. Highly recommend!',
    avatar: customer1Img,
  },
  {
    id: 2,
    name: 'Antoine Griezmann',
    rating: 4,
    text: 'Great atmosphere and even better food. The bruschetta is a must-try appetizer.',
    avatar: customer2Img,
  },
  {
    id: 3,
    name: 'Samira Khan',
    rating: 5,
    text: 'Little Lemon has become our go-to spot for family dinners. The lemon dessert is out of this world!',
    avatar: customer3Img,
  },
  {
    id: 4,
    name: 'Tom Chen',
    rating: 4,
    text: 'Fantastic service and authentic Mediterranean cuisine. Will definitely be coming back.',
    avatar: customer4Img,
  },
];

function Testimonials({ reviews = defaultReviews }) {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
