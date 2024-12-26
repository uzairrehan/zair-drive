"use client";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Button } from "./ui/button";
import { ImCross } from "react-icons/im";

function FileDrop() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Select file to Upload
      </Button>

      <div
        className={`flex items-center justify-center min-h-screen
           backdrop-blur ${open ? "hidden" : "absolute inset-0"}`}
      >
        <ImCross
          className="text-primary w-6 h-6 absolute top-8 right-8 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center w-3/4 ">
          <div className="flex flex-col items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaUpload className="w-8 h-8 mb-4" />
                <p className="mb-2 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs">File should be less than 5mb</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <Button
              className="mt-10"
              onClick={() => {
                // upload logic
                setOpen(!open);
              }}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileDrop;
