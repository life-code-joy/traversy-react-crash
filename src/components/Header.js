import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>{title}</h1>
      <h2 style={headingTwoStyle}>{title}</h2>
    </header>
  );
};

const headingTwoStyle = {
  color: 'grey',
  fontSize: '3rem',
};

Header.defaultProps = {
  title: 'Trace Tracker for you',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
