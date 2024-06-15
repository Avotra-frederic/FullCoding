import { FC } from "react";

const Loading: FC = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-white relative top-0 left-0 z-50">
      <div className="animate-spin w-14 h-14 border-[#BA1C98]"></div>
    </main>
  );
};
export default Loading