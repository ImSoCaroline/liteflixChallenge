import { useState } from "react";
import Spotlight from "@./components/spotlight";
import Featured from "@./components/featured";
import Dropdown from "@./components/dropdown";
import UploadedMovies from "@./components/uploadedMovies";

export default function Home() {
  const options = [
    { label: "Populares", value: "populares" },
    { label: "Mis peliculas", value: "subidas" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Spotlight />
      <Dropdown
        name="Ver: "
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        {selectedOption.value === "populares" ? (
          <Featured />
        ) : (
          <UploadedMovies />
        )}
      </Dropdown>
    </>
  );
}
