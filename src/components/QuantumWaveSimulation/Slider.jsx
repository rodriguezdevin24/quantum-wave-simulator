import PropTypes from 'prop-types';

const Slider = ({ label, value, min, max, step, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block mb-2">
          {label}: {value}
        </label>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full"
        />
      </div>
    );
  };

  Slider.propTypes = {
    label: PropTypes.string.isRequired, // label is a required string
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired, // value can be number or string, required
    min: PropTypes.number.isRequired, 
    max: PropTypes.number.isRequired, 
    step: PropTypes.number, 
    onChange: PropTypes.func.isRequired, 
  };
  
  Slider.defaultProps = {
    step: 1, // Default value for step if not provided
  };


  
  export default Slider;