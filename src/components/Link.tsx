import React from "react";
import NextLink from "next/link";

const MyLink = ({ href, ...props }) => {
  return <NextLink href={href} passHref {...props} />;
};

export default MyLink;
