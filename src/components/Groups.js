import { groups } from "../constants/Data";
import { useState } from "react";
import GroupForm from "./GroupForm";

const GroupsList = () => {
  const [groupFormVisible, setGroupFormVisible] = useState(false);
  const handleGroupFormVisible = () => {
    setGroupFormVisible(!groupFormVisible);
  };
  return (
    <>
      <div className="w-auto p-4 pb-0 max-w-md mx-auto">
        <button
          className="bg-primary text-xs text-white px-4 py-2 rounded-lg"
          onClick={handleGroupFormVisible}
        >
          + Add Group
        </button>
      </div>
      <div className="p-4 max-w-md mx-auto h-[50vh] overflow-y-auto">
        {groups.map((group) => (
          <div
            key={group.name}
            className="shadow-md rounded-lg ps-2 py-1 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-white  duration-300"
          >
            <h2 className="text-xs text-white hover:!text-black">{group.name}</h2>
            {/* <div className="mt-2">
      {group.members.map((member, index) => (
        <div key={index} className="text-gray-600">
          {member}
        </div>
      ))}
    </div> */}
          </div>
        ))}
      </div>

      {groupFormVisible && (
        <GroupForm changeDisplayModal={handleGroupFormVisible} />
      )}
    </>
  );
};

export { GroupsList };
