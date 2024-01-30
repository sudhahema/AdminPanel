import React, { useEffect, useState } from "react";

export default function Object() {
    const [data, setData] = useState({
        name: "",
        age: 0,
        phoneNo: 0,
      });
    
      const handleClick = (value) => {
        setData((prevData) => ({
            ...prevData,
            name: value === "name" ? "Hema" : prevData.name,
            age: value === "age" ? 25 : prevData.age,
            phoneNo: value === "phoneNo" ? 7 : prevData.phoneNo,
          }));          
      };
    
      useEffect(() => {
        console.log(data);
      }, [data]);
    

  return (
    <div className="ObjectData">
      <button className="btnPadding" onClick={() => handleClick("name")}>
        Name
      </button>
      <button className="btnPadding" onClick={() => handleClick("age")}>
        Age
      </button>
      <button className="btnPadding" onClick={() => handleClick("phoneNo")}>
        Phone No
      </button>
    </div>
  );
}
