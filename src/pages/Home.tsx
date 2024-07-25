import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Training App</h1>
        <p>Please login or register to access your dashboard.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
