import React from "react";
import Search from "../components/mainpage/Search";
import TrainerCard from "../components/mainpage/TrainerCard";
import LoginErrorModal from "../components/loginErrorModal/LoginErrorModal";
import { useParams } from "react-router-dom";
const Home = () => {
  const { role } = useParams();

  return (
    <>
      {role && <LoginErrorModal roles={role} />}
      <Search />
      <TrainerCard />
    </>
  );
};

export default Home;
