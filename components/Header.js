import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string
};

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
    <style jsx>{`
      header {
        text-align: center;
      }

      h1 {
        color: inherit;
        font-size: 2.5rem;
        font-family: 'Source Serif Pro', serif;
      }
    `}</style>
  </header>
);

Header.propTypes = propTypes;

export default Header;
