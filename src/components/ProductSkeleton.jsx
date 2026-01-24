import Container from "./Container";

export default function ProductSkeleton() {
  return (
    <>
      <Container className="flex justify-center gap-4 pt-16">
        <div className="w-1/2 flex items-center justify-center flex-col">
          <div className="mb-4 w-1/2 h-1/2">
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          </div>
          <div className="flex gap-2 items-center justify-between w-1/2 h-[100px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-1/5 h-full bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/2 pt-16">
          <div className="w-full h-16 bg-gray-200 animate-pulse" />
          <div className="w-full h-16 bg-gray-200 animate-pulse" />
          <div className="w-full h-16 bg-gray-200 animate-pulse" />
          <div className="w-full h-16 bg-gray-200 animate-pulse" />
        </div>
      </Container>
    </>
  );
}
