import React from "react";
import { Training } from "../types";

interface Props {
  trainings: Training[];
}

const TrainingList: React.FC<Props> = ({ trainings }) => {
  return (
    <ul>
      {trainings.map((training) => (
        <li key={training.id}>
          Date: {training.date}, Time: {training.time}, Duration:{" "}
          {training.duration}
        </li>
      ))}
    </ul>
  );
};

export default TrainingList;
