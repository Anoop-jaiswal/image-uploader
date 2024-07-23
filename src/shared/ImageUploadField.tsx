import { demo } from "../utils/constants";

const ImageUploadField = () => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg flex flex-col justify-between">
        <div className="flex items-center ">
          <img src={demo} alt="Profile" className="object-cover h-12 w-12" />
          <div className="w-full ml-2">
            <div className="my-0 py-0">
              <h4 className="text-sm font-medium">IMG_0083.jpg</h4>
              <p className="text-xs text-gray-500">331KB</p>
            </div>

            <div className="flex justify-between items-center -pt-2">
              <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full w-[90%]"></div>
              </div>
              <div>
                <p className="text-right text-sm text-gray-500 ml-2">27%</p>
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
