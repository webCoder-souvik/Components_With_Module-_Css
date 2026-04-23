"use client";

import React, { useRef, useState } from "react";
import "./fileupload.css";
import { FaCloudArrowUp } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

export type UploadFile = {
  file: File;
  preview?: string;
};

interface FileUploadProps {
  title?: string;
  description?: string;
  accept?: string[];
  multiple?: boolean;
  maxSizeMB?: number;
  onFilesChange?: (files: File[]) => void;
}

const FileUpload = ({
  title = "Upload Documents",
  description = "Accepted file types: PDF, JPG, PNG.",
  accept = ["application/pdf", "image/jpeg", "image/png"],
  multiple = true,
  maxSizeMB = 10,
  onFilesChange,
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadFile[]>([]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles: UploadFile[] = [];

    Array.from(fileList).forEach((file) => {
      if (!accept.includes(file.type)) return;
      if (file.size > maxSizeMB * 1024 * 1024) return;

      newFiles.push({
        file,
        preview: file.type.startsWith("image")
          ? URL.createObjectURL(file)
          : undefined,
      });
    });

    const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles.map((f) => f.file));
  };

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange?.(updated.map((f) => f.file));
  };

  return (
    <div className="upload-wrapper">
      {title && <h4 className="upload-title">{title}</h4>}
      {description && <p className="upload-desc">{description}</p>}

      {/* Upload Box */}
      <div
        className="upload-dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
      >
        <div className="upload-icon">
          <span className="icon-holder">
            <FaCloudArrowUp />
          </span>
        </div>
        <p>Drag and drop your file here</p>
        <span>or</span>
        <button type="button" className="upload-btn">
          Browse Files
        </button>

        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          accept={accept.join(",")}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="upload-list">
          {files.map((item, index) => (
            <div className="upload-item" key={index}>
              <div className="upload-left">
                {item.preview ? (
                  <img
                    src={item.preview}
                    alt={item.file.name}
                    width={48}
                    height={48}
                    className="upload-preview"
                  />
                ) : (
                  <div className="upload-pdf">PDF</div>
                )}

                <div>
                  <p className="upload-name">{item.file.name}</p>
                  <span className="upload-size">
                    {(item.file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              </div>

              <button
                className="upload-delete"
                onClick={() => removeFile(index)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
