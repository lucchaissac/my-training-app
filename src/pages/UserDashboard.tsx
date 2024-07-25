import React, { useEffect, useState } from "react";
import { Training } from "../types";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrainingList from "../components/TrainingList";

const UserDashboard: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await api.get("/trainings");
        setTrainings(response.data);
      } catch (error) {
        console.error("Failed to fetch trainings", error);
      }
    };

    fetchTrainings();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h2>Your Upcoming Trainings</h2>
        <TrainingList trainings={trainings} />
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
