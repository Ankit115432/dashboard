import React from 'react';
import styles from './CustomerFeedback.module.css';

const CustomerFeedback: React.FC = () => {
  const feedbacks = [
    {
      customer: 'Jenny Wilson',
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
      rating: 5,
    },
    {
      customer: 'Dianne Russell',
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
      rating: 4,
    },
    {
      customer: 'Devon Lane',
      feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and grilled to perfection. Definitely coming back.',
      rating: 5,
    },
  ];

  return (
    <div className={styles.customerFeedback}>
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className={styles.feedback}>
          <p><strong>{feedback.customer}</strong></p>
          <p>{'⭐'.repeat(feedback.rating)}</p>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;