import React from "react";

export default function StudentDetail({ match }) {
  return <div>{match.params.sno}</div>;
}
