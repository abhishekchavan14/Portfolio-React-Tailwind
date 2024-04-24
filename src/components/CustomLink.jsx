import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ title, path, isIcon}) {
  const customClass = isIcon?"hover:shadow-custom":"hover:text-purple"
  return (
    <Link to={path} className={`${customClass} duration-300 border-b hover:pb-1`}>
      {title}
    </Link>
  );
}
