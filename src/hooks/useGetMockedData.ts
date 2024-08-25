import axios from "axios";
import { useEffect, useState } from "react";

function useGetMockedData() {
  const [data, setData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    async function getMockedData() {
      try {
        const data = await axios.get("api/test");
        console.log(data.data);
        setData(data.data);
      } catch (e) {
        console.log(e);
      }
    }

    getMockedData();
  }, []);

  return { firstName: data.firstName, lastName: data.lastName };
}

export default useGetMockedData;
