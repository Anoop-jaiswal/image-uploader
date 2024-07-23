import { useState } from "react";
import Modal from "../shared/Modal";
import ImageUploadField from "../shared/ImageUploadField";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const handleUpload = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="main-div w-[50%] rounded-lg overflow-hidden">
        <div className="relative div-2 border h-[120px] rounded-t-lg"></div>
        <div className="relative div-2 border h-40 rounded-b-lg">
          <div className="absolute w-[140px] h-[140px] border rounded-full flex items-center justify-center -mt-20 ml-10 overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
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
          <div className="mt-10 ml-10">
            <h1 className="text-2xl font-bold">Jack Smith</h1>
            <h1> @kingjack • Senior Product Designer at Webflow • He/Him</h1>
          </div>
          {/* <Modal isOpen={isOpen} onClose={onClose} children={undefined} /> */}

          <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-96 h-60 flex flex-col justify-center space-y-4">
              <div className="text-left">
                <h1 className="text-lg font-bold">Upload image(s)</h1>
                <p className="mb-4">You may upload up to 5 images</p>
              </div>

              <div className="border-2  border-gray-300 w-full h-full flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <p className="text-lg font-bold">
                    Click or drag and drop to upload
                  </p>
                  <p className="text-gray-500 text-center">
                    PNG, or JPG(Max 5MB)
                  </p>
                </div>
              </div>
            </div>
            <ImageUploadField />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
