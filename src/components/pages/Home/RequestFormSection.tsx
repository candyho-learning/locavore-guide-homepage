import Button from "@/components/common/Button";
import imgShop from "@/images/shop.png";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

function FloatingField({
  label,
  type = "text",
  name,
  required = false,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="border-brand-black relative border-b pt-3">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder=" "
        className="peer w-full bg-transparent py-2 outline-none"
      />
      <label
        htmlFor={name}
        className="text-brand-black absolute top-5 left-0 transition-all duration-200 peer-focus:top-0 peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm"
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}

function TextareaField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-brand-black mb-2 block text-sm"
      >
        {label}
        {required && " *"}
      </label>
      <div className="border-brand-black rounded-[5px] border p-4">
        <textarea
          name={name}
          id={name}
          required={required}
          rows={4}
          className="w-full resize-none bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

function FileField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  const [fileName, setFileName] = useState<null | string>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="text-brand-black mb-2 block text-sm"
      >
        {label}
        {required && " *"}
      </label>
      <div className="border-brand-black relative rounded-lg border border-dashed bg-white p-4">
        <p className="absolute flex items-center gap-2">
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            width={8}
          />
          <span>{fileName ? fileName : "Upload a File"}</span>
        </p>
        <input
          type="file"
          name={name}
          id={name}
          required={required}
          className="z-10 w-full opacity-1"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default function RequestFormSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Post to the post form API:
    // await submitRequestForm({ name, email, brand, location, catalog, message });
  };

  return (
    <section id="submit-products">
      <div className="container-wide flex flex-col lg:flex-row">
        <div className="flex flex-1 items-center pt-15 lg:border-r lg:border-dashed lg:pt-0">
          <div className="mr-27.5 flex flex-col gap-6">
            <Image
              src={imgShop}
              alt=""
              width={112}
            />
            <h2 className="text-[55px] leading-none tracking-tighter md:text-[100px]">
              Want to be on our shelves?
            </h2>
            <p className="font-neue-montreal max-w-132.25">
              Have questions, want recommendations, or want to tell us about a
              small business you love? Reach out! If you&apos;re a business
              owner featured in our directory, reach out with bios, images, etc.
              below.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="font-neue-montreal mx-auto flex w-full flex-col gap-4 pt-32.5 pb-17.5 lg:w-4/5"
          >
            <FloatingField
              label="Name"
              name="name"
              required
            />
            <FloatingField
              label="Email"
              name="email"
              type="email"
              required
            />
            <FloatingField
              label="Brand"
              name="brand"
              required
            />
            <FloatingField
              label="Location"
              name="location"
              required
            />
            <FileField
              label="Catalog"
              name="catalog"
              required
            />
            <TextareaField
              label="Message"
              name="message"
              required
            />
            <div className="mt-4">
              <Button text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
