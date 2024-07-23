import { useState } from "react";
import Modal from "../shared/Modal";
import ImageUploadField from "../shared/ImageUploadField";
import { profileAvatar } from "../utils/constants";
import { demo } from "../utils/constants";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  // const handleUpload = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="main-div w-[50%] rounded-lg overflow-hidden">
        <div className="relative div-2 border h-[120px] rounded-t-lg"></div>
        <div className="relative div-2 border h-40 rounded-b-lg">
          <div className="absolute w-[140px] h-[140px] border rounded-full flex items-center justify-center -mt-20 ml-10 overflow-hidden">
            <img
              src={profileAvatar}
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="text-end m-2">
            <button
              className="border shadow-md p-1 px-3 rounded-md"
              onClick={onClose}
            >
              Update picture
            </button>
          </div>
          <div className=" ml-10 absolute bottom-6 left-0 w-full">
            <h1 className="text-2xl font-bold">Jack Smith</h1>
            <h1> @kingjack • Senior Product Designer at Webflow • He/Him</h1>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-96 h-60 flex flex-col justify-center space-y-4">
              <div className="text-left">
                <h1 className="text-lg font-bold">Upload image(s)</h1>
                <p className="mb-4">You may upload up to 5 images</p>
              </div>

              <div className="border-2  border-gray-300 w-full h-full flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <img src="favicon.ico" className="h-10 w-10 m-auto" />
                  <p className="text-lg font-bold">
                    Click or drag and drop to upload
                  </p>
                  <p className="text-gray-500 text-center">
                    PNG, or JPG(Max 5MB)
                  </p>
                </div>
              </div>
            </div>
            <ImageUploadField
              imageSrc={demo}
              imageName={"dsfs"}
              imageSize={"2mb"}
              progress={70}
            />

            <div className="mt-2 flex  bottom-0  w-full text-white ">
              <button
                className="bg-white-500 border hover:bg-slate-300 text-black py-2 px-4 rounded w-1/2 mx-1"
                onClick={onClose}
              >
                Cancel
              </button>
              <button className="bg-blue-800 border hover:bg-blue-600 text-white py-2 px-4 rounded w-1/2">
                Select image
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
