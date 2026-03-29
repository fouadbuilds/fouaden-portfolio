import Image from "next/image";

export default function HiThereSticker() {
  return (
    <div className="sticker-wrap">
      <div className="sticker-shadow" />
      <div className="sticker-box">
        <span className="sticker-text">hi there!</span>
      </div>
      <div className="sticker-photo">
        <Image
          src="/images/placeholder.svg"
          alt="sticker preview image"
          fill
          sizes="198px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
