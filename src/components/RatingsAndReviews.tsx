import { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

interface IReview {
  id: string;
  rating: number;
  text: string;
}

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const fetchReviews = () => {
    // Fetch reviews from the backend.
    // For the purposes of this example, we will use hard-coded data.
    const fetchedReviews: IReview[] = [
      { id: '1', rating: 5, text: 'Great restaurant!' },
      { id: '2', rating: 4, text: 'Very good food.' },
    ];
    setReviews(fetchedReviews);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Post the review to the backend.
    // You would have to implement this.

    // Clear the form.
    setRating(0);
    setText('');
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Container>
      <h1>Ratings & Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}/5</p>
          <p>{review.text}</p>
        </div>
      ))}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicRating'>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter rating (1-5)'
            value={rating}
            onChange={handleRatingChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicReview'>
          <Form.Label>Review</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter review'
            value={text}
            onChange={handleTextChange}
            required
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RatingsAndReviews;
