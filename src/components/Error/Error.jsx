import PropTypes from 'prop-types';

export default function Error({ message }) {
  return (
    <div role="alert">
      <h2>{message}</h2>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
