import Loader from '../Loader/Loader';
import { useFetchReviews } from '../../hooks/useFetchReviews';
import Error from 'components/Error/Error';
import DetailsPageHeading from 'components/DetailsPageHeading/DetailsPageHeading';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function Reviews() {
  const { error, status, reviews } = useFetchReviews();
  if (status === Status.IDLE) {
    return <div>Hello</div>;
  }
  if (status === Status.REJECTED) {
    return <Error message={error} />;
  }
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <DetailsPageHeading text="Reviews" />
        {reviews && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
