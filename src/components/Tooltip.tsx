type PropType = {
  text: string;
};

function Tooltip(props: PropType) {
  const { text } = props;
  return (
    <div className="hidden lg:flex items-center justify-center absolute -top-6 left-[50%] -translate-x-1/2 translate-y-1 opacity-0 text-sm rounded-lg w-[100px] bg-button text-white py-1 px-2 group-hover:-translate-y-3 group-hover:opacity-100 after:contents-['*'] after:absolute after:-bottom-4 after:left-[50%] after:-translate-x-1/2 after:w-0 after:h-0 after:border-8 after:border-transparent after:border-t-dark">
      {text}
    </div>
  );
}

export default Tooltip;
