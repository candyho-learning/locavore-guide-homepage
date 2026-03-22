import Head from "next/head";

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/shop.png" />
      </Head>
      {/* header */}
      <main>{children}</main>
      {/* footer */}
    </>
  );
}
