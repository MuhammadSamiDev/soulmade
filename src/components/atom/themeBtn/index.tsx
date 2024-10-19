interface Props{
    onClick?:()=>void,
    label:string,
    className?:string
}
const ThemeBtn = ({onClick,label,className}:Props) => {
  return (
    <button
      onClick={()=>onClick&&onClick()}
      className={`bg-[#075929] text-white text-center py-2 px-4 rounded-md ${className}`}
    >
      {label}
    </button>
  );
};

export default ThemeBtn;
