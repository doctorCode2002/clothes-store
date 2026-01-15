import model from "../assets/model.png";
import { Link } from "react-router-dom";
export default function HomeHero() {
  return (
    <>
      <div className="relative hidden md:flex h-full items-center justify-center">
        <div className="rounded-full aspect-square bg-primary-200 h-[600px]" />
        <img
          src={model}
          alt="model image"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover"
        />
      </div>

      <div className="max-w-[400px] w-full">
        <h2 className="text-primary-600 text-2xl font-light uppercase">next arrival</h2>
        <h1 className="text-6xl font-bold capitalize text-primary-500">
          light nylon outerwear
        </h1>
        <p className="text-primary-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at
          suscipit illum maxime beatae! Fugit, dolorum. Nobis inventore
          voluptatibus nemo.
        </p>
        <Link
          to="/shop"
          className="mt-4 border-primary-400 px-6 py-2 rounded-full border-2 bg-primary-500 hover:bg-primary-600 transition-colors duration-300 text-white cursor-pointer hover:text-primary-50 inline-block"
        >
          Shop now
        </Link>
      </div>
    </>
  );
}
