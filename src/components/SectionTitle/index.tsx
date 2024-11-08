const SectionTitle = ({ tag, title }: { tag?: string; title: string }) => {
  return (
    <section className="text-center w-fit m-auto">
      {tag && (
        <p className="text-3xl flex items-center font-bold text-[#71717a]">
          {tag.toUpperCase()}
        </p>
      )}
      <h2 className="text-4xl text-[#218200] font-bold">
        {title.toUpperCase()}
      </h2>
    </section>
  );
};

export default SectionTitle;
