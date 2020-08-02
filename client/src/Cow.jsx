import React from "react";

const Cow = ({name, description, handleDescription}) => {
  const shareCowDescription = () => {
    handleDescription(name, description);
  };

  return (
    <div>
      <h4 onClick={shareCowDescription}>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Cow;