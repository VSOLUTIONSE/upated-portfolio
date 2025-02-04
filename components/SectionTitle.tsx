interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle = ({ title, titleNo }: Props) => {
  return (
    <div className="flex items-center text-2xl font-semibold font-titleFont">
      <span className="hidden md:inline-flex top-4 relative md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
      <span className="relative text-center sml:text-left">
        <span className="text-6xl text-textGold">.</span>
        <span className=""> {title}</span>
      </span>
    </div>
  );
};

export default SectionTitle;
