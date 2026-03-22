import HomePage from "@/components/pages/Home";
import { GetServerSideProps } from "next";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BRAND_COUNTS = [
  5, 7, 9, 7, 5, 5, 3, 7, 5, 3, 7, 5, 9, 3, 7, 5, 3, 7, 5, 9, 3, 5, 7, 3, 7, 5,
];

import Layout from "@/components/common/Layout";
import { BrandsDirectory } from "@/types/brands";

const MOCK_BRANDS: BrandsDirectory = Object.fromEntries(
  ALPHABETS.split("").map((letter, i) => [
    letter,
    Array.from({ length: BRAND_COUNTS[i] }, () => "Lorem Ipsum"),
  ]),
) as BrandsDirectory;

interface HomeProps {
  brandsDirectory: BrandsDirectory;
}

export default function Home({ brandsDirectory }: HomeProps) {
  return (
    <Layout
      title="Locavore"
      description="A variety store in Greenwich Village.">
      <HomePage brandsDirectory={brandsDirectory} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const res = await fetch("https://api.example.com/brands");
  // const data = await res.json();

  return {
    props: {
      brandsDirectory: MOCK_BRANDS,
    },
  };
};
