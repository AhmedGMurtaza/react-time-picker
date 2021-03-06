import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { isTime } from '../src/shared/propTypes';

export default class ValidityOptions extends PureComponent {
  onMinChange = (event) => {
    const { value } = event.target;

    this.props.setState({ minTime: value || null });
  }

  onMaxChange = (event) => {
    const { value } = event.target;

    this.props.setState({ maxTime: value || null });
  }

  render() {
    const {
      maxTime, minTime, required, setState,
    } = this.props;

    return (
      <fieldset id="ValidityOptions">
        <legend htmlFor="ValidityOptions">Minimum and maximum time</legend>

        <div>
          <label htmlFor="minTime">Minimum time</label>
          <input
            id="minTime"
            onChange={this.onMinChange}
            type="time"
            value={minTime || ''}
          />&nbsp;
          <button
            onClick={() => setState({ minTime: null })}
            type="button"
          >
            Clear
          </button>
        </div>

        <div>
          <label htmlFor="maxTime">Maximum date</label>
          <input
            id="maxTime"
            onChange={this.onMaxChange}
            type="time"
            value={maxTime || ''}
          />&nbsp;
          <button
            onClick={() => setState({ maxTime: null })}
            type="button"
          >
            Clear
          </button>
        </div>

        <div>
          <input
            id="required"
            type="checkbox"
            checked={required}
            onChange={event => setState({ required: event.target.checked })}
          />
          <label htmlFor="required">Required</label>
        </div>
      </fieldset>
    );
  }
}

ValidityOptions.propTypes = {
  maxTime: isTime,
  minTime: isTime,
  required: PropTypes.bool,
  setState: PropTypes.func.isRequired,
};
