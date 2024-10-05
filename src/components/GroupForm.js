import React, { useState } from "react";
import { availableMembers,addGroup } from "../constants/Data";

const GroupForm = (props) => {
  const [groupName, setGroupName] = useState("");
  const [groupImage, setGroupImage] = useState(null);
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleAddMember = (member) => {
    if (!members.includes(member)) {
      setMembers((prev) => [...prev, member]);
    }
    setSearchTerm("");
    setDropdownVisible(false);
  };

  const handleRemoveMember = (member) => {
    const idx = members.indexOf(member);
    if (idx !== -1) {
      members.splice(idx, 1);
      setMembers([...members]);
    }
    setSearchTerm("");
    setDropdownVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGroupName("");
    setGroupImage(null);
    setMembers([]);
    props.changeDisplayModal();
    addGroup({members:members, name:groupName, groupImage:groupImage});
  };

  const filteredMembers = availableMembers.filter(
    (member) =>
      member.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !members.includes(member)
  );

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg z-10 p-4 max-w-lg w-full relative"
        >
          <button
            type="button"
            onClick={() => props.changeDisplayModal()}
            className="absolute top-2 right-2 text-gray-600"
          >
            ❌
          </button>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Group Name
            </label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg w-full"
              placeholder="Enter group name (emojis allowed)"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Group Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setGroupImage(e.target.files[0])}
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Add Members
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setDropdownVisible(searchTerm.length > 0);
              }}
              onFocus={() => setDropdownVisible(true)}
              onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
              className="border border-gray-300 p-2 rounded-lg w-full"
              placeholder="Search members..."
            />
            {isDropdownVisible && (
              <ul className="border border-gray-300 mt-2 max-h-40 overflow-y-auto">
                {filteredMembers.map((member) => (
                  <li
                    key={member}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleAddMember(member)}
                    value={member}
                  >
                    {member}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700">
              Selected Members:
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {members.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
                >
                  {member}
                  <button
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveMember(member)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg mt-4"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupForm;
