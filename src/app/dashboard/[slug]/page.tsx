const Page = ({ params }: { params: { slug: string } }) => {
  return <div>Dashboard {params?.slug}</div>;
};

export default Page;
