import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const udpateSearchParams = (newParams:{[key:string]: string}) => {
    console.log(newParams);
    const paramsObj = Object.fromEntries(searchParams.entries());
    console.log(paramsObj);

    const mergedParams = { ...paramsObj, ...newParams };
    console.log(mergedParams);
    setSearchParams(mergedParams);
  };
  return (
    <div>
      <h2>Colors</h2>
      <p onClick={() => udpateSearchParams({ color: "red" })}>Red</p>
      <p onClick={() => udpateSearchParams({ color: "blue" })}>Blue</p>
      <p onClick={() => udpateSearchParams({ color: "green" })}>Green</p>
      <br />
      <h2>Sizes</h2>
      <p onClick={() => udpateSearchParams({ size: "11" })}>11</p>
      <p onClick={() => udpateSearchParams({ size: "12" })}>12</p>
      <p onClick={() => udpateSearchParams({ size: "13" })}>13</p>
    </div>
  );
};

export default SearchParams;
