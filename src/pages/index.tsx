import PageLayout from "@modules/shared/components/layouts/PageLayout";
import PageTags from "@modules/shared/components/PageTags";

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
