/** @format */

"use client";
import React, {
  useState,
  useRef,
  DragEvent,
  ChangeEvent,
  useEffect,
} from "react";
import Image from "next/image";
import ButtonDeleteImage from "./ButtonDeleteImage";

interface ImageInputProps {
  className?: string;
  error?: any;
  onChange?: (e: any) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({
  className,
  error,
  onChange,
  ...props
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const ext = ["PNG", "SVG", "JPG"].join(",");

  useEffect(() => {
    const newPreviews: string[] = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          newPreviews.push(reader.result as string);
          setPreviews([...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  }, [files]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevState) => [...prevState, ...newFiles]);
    }
  }

  useEffect(() => {
    onChange && onChange(files);
  }, [files]);

  function handleSubmitFile(e: React.FormEvent) {
    e.preventDefault();
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prevState) => [...prevState, ...newFiles]);
    }
  }

  function handleDragLeave(e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(idx: number) {
    setFiles((prevState) => prevState.filter((_, i) => i !== idx));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== idx));
  }

  function openFileExplorer() {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.click();
    }
  }

  return (
    <div className={className}>
      <div
        className={`w-full border-dashed border-2 rounded-lg ${
          error ? "border-error" : "border-accent"
        }`}
      >
        <div
          className={`card w-full ${
            dragActive ? " border-[#1849D6] border-2" : ""
          }`}
          onDragEnter={(e: any) => handleDragEnter(e)}
          onSubmit={handleSubmitFile}
          onDrop={(e: any) => handleDrop(e)}
          onDragLeave={(e: any) => handleDragLeave(e)}
          onDragOver={(e: any) => handleDragOver(e)}
        >
          <input
            type="file"
            ref={inputRef}
            multiple
            style={{ display: "none" }}
            onChange={handleChange}
            name="images"
            {...props}
          />
          <div className="flex flex-col items-center gap-3 text-sm py-6">
            {/* <Image src={Cloud} alt="cloud.svg" width={36} height={36} /> */}
            <div className="flex flex-col gap-2">
              <p>
                Drag your file(s) or{" "}
                <span
                  onClick={openFileExplorer}
                  className="text-accent font-semibold cursor-pointer"
                >
                  browse
                </span>
              </p>
              <p>Max 10 MB files are allowed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-8">
        {previews.map((preview, idx) => (
          <div key={idx} className="relative border h-full flex items-center">
            <img
              src={preview}
              alt={`Preview ${idx}`}
              className="w-full object-cover rounded-md"
            />
            <ButtonDeleteImage onClick={() => removeFile(idx)} />
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ImageInput;
