import React, { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import Parent from "./Parent";
import Object from "./Object";

function BottomSheet() {
  const [show, setShow] = useState(false);
  const handleClick = ()=>{
    setShow(true);
  }

  return (
    <>
      <div>
        <button type="button" className="editbtn" onClick={handleClick}>edit</button>
      </div>
      <Parent />
      <Object />
      {show && (
        <div className="bottomSheet_Container">
          <div className="wrapper">
            <button type="button" className="btn_wrapper">
              Choose for Upload <IoMdCloudUpload className="upload_icon" />
            </button>
            <p>OR</p>
            <input
              type="text"
              placeholder="Existing image URL"
              className="text-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Link to open upon image click"
              className="text-input"
            />
          </div>
          <div className="check_input">
            <input type="checkbox" />
            <label>Open link in new window</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Image's alternative description"
              className="text-input"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BottomSheet;
