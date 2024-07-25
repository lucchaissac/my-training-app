import React, { useEffect, useState } from "react";
import { User, Training } from "../types";
import { api } from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserList from "../components/UserList";
import TrainingList from "../components/TrainingList";

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [newTraining, setNewTraining] = useState({
    date: "",
    time: "",
    duration: "",
    userId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, trainingsResponse] = await Promise.all([
          api.get("/users"),
          api.get("/trainings"),
        ]);
        setUsers(usersResponse.data);
        setTrainings(trainingsResponse.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const handleAddTraining = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/trainings", newTraining);
      setTrainings([...trainings, response.data]);
      setNewTraining({ date: "", time: "", duration: "", userId: "" });
    } catch (error) {
      console.error("Failed to add training", error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Admin Dashboard</h2>
        <section>
          <h3>Users</h3>
          <UserList users={users} />
        </section>
        <section>
          <h3>All Trainings</h3>
          <TrainingList trainings={trainings} />
        </section>
        <section>
          <h3>Add New Training</h3>
          <form onSubmit={handleAddTraining}>
            <input
              type="date"
              value={newTraining.date}
              onChange={(e) =>
                setNewTraining({ ...newTraining, date: e.target.value })
              }
              required
            />
            <input
              type="time"
              value={newTraining.time}
              onChange={(e) =>
                setNewTraining({ ...newTraining, time: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={newTraining.duration}
              onChange={(e) =>
                setNewTraining({ ...newTraining, duration: e.target.value })
              }
              placeholder="Duration"
              required
            />
            <select
              value={newTraining.userId}
              onChange={(e) =>
                setNewTraining({ ...newTraining, userId: e.target.value })
              }
              required
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
            <button type="submit">Add Training</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
