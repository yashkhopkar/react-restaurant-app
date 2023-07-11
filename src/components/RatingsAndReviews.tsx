import { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';

interface IReview {
  rating: number;
  text: string;
}

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const fetchReviews = async () => {
    // Fetch reviews from the backend.
    try {
      const response = await axios.get('http://localhost:3000/api/getReviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Post the review to the backend.
    try {
      const newReview = { rating, text };
      await axios.post('http://localhost:3000/api/addReview', newReview);
      fetchReviews(); // Fetch reviews again to update the list with the newly added review.

      // Clear the form.
      setRating(0);
      setText('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Container>
      <h1>Ratings & Reviews</h1>
      {reviews.map((review) => (
        <div key={review._id}>
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
