const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Our Brands",
    href: "#our-brands",
  },
  {
    label: "This Month",
    href: "#this-month",
  },
  {
    label: "Submit Products",
    href: "#submit-products",
  },
];
export default function StickySubNav() {
  return (
    <div className="bg-brand-green sticky top-0 z-100 mt-10.5">
      <div className="border-t border-b border-dashed">
        <div className="container flex justify-between overflow-x-auto py-5">
          {NAV_ITEMS.map((item, i) => (
            <li key={i} className="list-none">
              <a
                href={item.href}
                className="font-fake-receipt border-b border-dashed border-transparent text-xs hover:border-black">
                {item.label}
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
