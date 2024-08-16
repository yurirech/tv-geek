import { useEffect, useState } from "react";

function useGetMockedData() {
  const [data, setData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    async function getMockedData() {
      const data = await fetch("api/test");
      const jsonData = await data.json();
      setData(jsonData);
    }

    getMockedData();
  }, []);

  return { firstName: data.firstName, lastName: data.lastName };
}

export default useGetMockedData;
