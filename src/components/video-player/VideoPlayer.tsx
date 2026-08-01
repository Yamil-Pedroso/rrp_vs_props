import { useEffect } from "react";
import assets from "../../assets";

export function VideoPlayer() {
  useEffect(() => {
    console.log("VideoPlayer montado");

    return () => {
      console.log("VideoPlayer desmontado");
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl bg-black shadow-lg">
      <video
        className="aspect-video w-full"
        src={assets.demo}
        controls
        playsInline
      >
        Tu navegador no soporta la reproducción de vídeo.
      </video>
    </div>
  );
}
