import React, { useState } from 'react';
import { Class } from 'react-haiku';

const Component = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={toggleActive}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>

      <Class
        className="box"
        condition={isActive}
        toggleClass="active"
        as="section"
      >
        This is a box that will toggle its class based on the button click.
      </Class>
    </div>
  );
};

export default Component;