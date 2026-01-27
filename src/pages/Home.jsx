import Categories from "../components/Categories";
import Container from "../components/Container";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <section className="bg-primary-100">
      <Container className="flex items-center justify-center h-full gap-16 overflow-x-hidden">
        <HomeHero />
      </Container>
      <Categories />
    </section>
  );
}
