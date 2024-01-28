import { FC, SetStateAction, Dispatch } from "react";

interface WritePageProps {
  isActive: boolean;
}

const WritePage: FC<WritePageProps> = ({ isActive }) => {
  return (
    <div className="write-component">
      {!isActive && (
        <p className="text-xl custom-p">
          This is werid. I am a component used for writing. Why is someone
          trying to read me?
        </p>
      )}
    </div>
  );
};

export default WritePage;
