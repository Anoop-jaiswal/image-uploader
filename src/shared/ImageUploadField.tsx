import React from "react";

interface ImageUploadFieldProps {
  imageSrc: string;
  imageName: string;
  imageSize: string;
  progress: number;
}

const ImageUploadField = ({
  imageSrc,
  imageName,
  imageSize,
  progress,
}: ImageUploadFieldProps) => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg flex flex-col justify-between">
        <div className="flex items-center">
          <img
            src={imageSrc}
            alt="Profile"
            className="object-cover h-12 w-12"
          />
          <div className="w-full ml-2">
            <div className="my-0 py-0">
              <h4 className="text-sm font-medium">{imageName}</h4>
              <p className="text-xs text-gray-500">{imageSize}</p>
            </div>

            <div className="flex justify-between items-center -pt-2">
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div>
                <p className="text-right text-sm text-gray-500 ml-2">
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default ImageUploadField;
