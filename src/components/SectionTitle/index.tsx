import { MdOutlineKeyboardOptionKey } from "react-icons/md";

const SectionTitle = ({ tag, title }: { tag?: string; title: string }) => {
  return (
    <section className="text-center w-fit m-auto">
      {tag && (
        <p className="text-3xl flex items-center font-bold text-[#71717a]">
          {tag.toUpperCase()} <MdOutlineKeyboardOptionKey size={32} />
        </p>
      )}
      <h2 className="lg:text-6xl text-4xl text-[#218200] font-bold">
        {title.toUpperCase()}
      </h2>
    </section>
  );
};

export default SectionTitle;
