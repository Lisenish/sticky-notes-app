import styled from "@emotion/styled";
import md5 from "js-md5";
import PropTypes from "prop-types";
import React from "react";

const AvatarImage = styled.img({
  borderRadius: "50%",
  width: "36px"
});

//TODO: add size prop
const Gravatar = ({ className, email }) => {
  const emailHash = md5(email.trim().toLowerCase());

  return (
    <AvatarImage
      className={className}
      src={`https://www.gravatar.com/avatar/${emailHash}`}
      alt="User avatar"
    />
  );
};

Gravatar.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string
};

export default Gravatar;
