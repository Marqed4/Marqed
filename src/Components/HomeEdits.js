import { useRef, useState } from "react"
import DemandsVideoPreview from "../Resources/art/Background Project/Demands Video Preview.gif"
import DemandsVideoPreviewAudio from "../Resources/art/Background Project/Demands Video Preview Audio.mp3"

const DemandsSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const demandsRefAudio = useRef(null);

    const handlePlay = () => {
        if (!isPlaying) {
            demandsRefAudio.current = new Audio(DemandsVideoPreviewAudio);
            demandsRefAudio.current.volume = 0.05;
            demandsRefAudio.current.play();
            setIsPlaying(true);
        } else {
            demandsRefAudio.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div>
            {isPlaying && <img src={DemandsVideoPreview} alt="Demands preview" />}
            <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
    );
};

export default DemandsSection;