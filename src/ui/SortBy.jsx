import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  const sortByValue = searchParams.get("sortBy") || "";
  return (
    <Select
      options={options}
      onChange={handleChange}
      type="white"
      value={sortByValue}
    />
  );
}

export default SortBy;
