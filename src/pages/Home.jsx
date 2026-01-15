import Container from "../components/Container";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <section className="bg-primary-100 h-[calc(100vh-104px)]">
      <Container className="flex items-center justify-center h-full gap-16">
        <HomeHero />
      </Container>
    </section>
  );
}
