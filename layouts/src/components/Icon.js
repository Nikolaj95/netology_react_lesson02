import React from 'react';

export default function Icon (props) {
  const { name, size } = props;
  return (
    <i className="material-icons" style={{fontSize: size}}>
      {name}
    </i>
  );
};
