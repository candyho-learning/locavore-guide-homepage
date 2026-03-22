type BrandsDirectoryProps = {
  brands: Record<string, string[]>;
};

export default function BrandsDirectory({ brands }: BrandsDirectoryProps) {
  const filteredBrands = Object.entries(brands).filter(
    ([, items]) => items.length > 0,
  );

  return (
    <section id="our-brands" className="border-b border-dashed py-15">
      <div className="container-wide flex flex-col lg:flex-row">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <h2 className="w-1/5 text-[55px] leading-[1.1] tracking-[-0.04em] md:text-[100px]">
            Our Brands
          </h2>
        </div>
        <div className="flex-1 columns-1 gap-x-17.5 md:columns-2 lg:columns-3">
          {filteredBrands.map(([letter, items]) => (
            <div
              key={letter}
              className="break-inside-avoid border-b border-dashed py-6 max-md:last:border-b-0">
              <h3 className="font-neue-montreal mb-6 text-[31px] font-medium">
                {letter}
              </h3>
              <div className="grid grid-cols-2 md:block">
                {items.map((brand, i) => (
                  <span
                    key={i}
                    className="font-neue-montreal block text-[19px] leading-[1.7] tracking-[0.01em]">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
