import { useWindowSize } from '../../../../../../hooks/useWindowSize';

const TextField = ({
  text = 'Pass HOlders',
  passHolder = true,
  onClick = () => {},
}) => {
  const size = useWindowSize();
  return (
    <button
      disabled={!Boolean(size.width && size.width > 1279)}
      onClick={onClick}
      style={{
        background:
          size.width && size.width > 1279
            ? passHolder
              ? 'linear-gradient(92.1deg, rgba(0, 0, 0, 0.39) 24.1%, rgba(0, 0, 0, 0) 90.61%), #DB38B9'
              : 'linear-gradient(92.1deg, rgba(0, 0, 0, 0.39) 24.1%, rgba(0, 0, 0, 0) 90.61%), #50C5FB'
            : '#555',
      }}
      className={`z-20 mt-[30px] mb-[18px]  w-[335px] md:w-[226px] h-[44px] py-[10px] px-[37px] shadow-[4px_4px_0px_#ffffff] border font-Ocraext text-base uppercase bg-[#555] md:bg-inherit ${
        size.width && size.width > 1279 ? 'cursor-pointer' : ''
      } xl:bg-[${passHolder ? '#DB38B9' : '#50C5FB'}] text-[#888] 
      }] xl:text-[#FFF]`}>
      {text}
    </button>
  );
};

export default TextField;
