import Image from 'next/image';

function SocialMediaIcons() {
  return (
    <div className="flex gap-[12px] items-center md:gap-[22px]">
      <Image
        className="cursor-pointer"
        src="/static/icons/twitter.svg"
        width="29"
        height="29"
        alt=""
      />
      <Image
        className="cursor-pointer"
        src="/static/icons/discord.svg"
        width="32"
        height="24"
        alt=""
      />
      <Image
        className="cursor-pointer"
        src="/static/icons/opensea.svg"
        width="29"
        height="29"
        alt=""
      />
    </div>
  );
}
export default SocialMediaIcons;
