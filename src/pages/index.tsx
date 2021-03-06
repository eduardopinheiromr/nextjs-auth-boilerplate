import PageLayout from "@components/layouts/PageLayout";
import PageTags from "@components/PageTags";

const pageTagsProps = {
  title: "Page title",
  description: "Page description",
};

const Home = () => {
  return (
    <PageLayout withAuth>
      <PageTags {...pageTagsProps} />
    </PageLayout>
  );
};

export default Home;
