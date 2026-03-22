import cx from "classnames";

type ButtonProps = {
  text: string;
  link?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  text,
  link = false,
  href,
  onClick,
  className,
}: ButtonProps) {
  const button = (
    <button
      onClick={onClick}
      className={cx(
        "bg-brand-black text-brand-white rounded-3xl border border-transparent px-5 py-[8.5px] transition-colors duration-300 hover:cursor-pointer hover:border-dashed hover:border-black hover:bg-white hover:text-black",
        className,
      )}
    >
      {text}
    </button>
  );

  if (link && href) {
    return <a href={href}>{button}</a>;
  }

  return button;
}
