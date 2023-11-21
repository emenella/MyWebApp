import Image from "next/image"
import AvatarFlip from "../components/AvatarFlip"

export default function Home() {
  return (
    <div className="flex flex-row gap-5 justify-center">
      <AvatarFlip image="/emenella.jpg" alt="Picture of emenella" imageHover="/emenella-1.jpg" height={300} width={200} />
      <div className="grid place-content-center">
        <h1 className="text-2xl font-bold text-cyan-500">Erwan "Emenella" Menella</h1>
        <p className="text-lg text-yellow-300">Innovative coder from Arles, inspired by Van Gogh, shaping a new vision of the digital future.</p>
      </div>
    </div>
  )
}
