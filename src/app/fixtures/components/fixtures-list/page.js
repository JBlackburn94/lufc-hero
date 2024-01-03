import { useState, useEffect } from "react";

export default function FixturesList() {
  const url =
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e354ee8169msh18c166eaadad206p15bdaejsn2c3358c2e612",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fixtures = await fetch(url, options);
      fixtures.json().then((json) => {});
    };
  });

  return;
}
