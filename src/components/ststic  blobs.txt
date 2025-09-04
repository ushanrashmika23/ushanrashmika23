import React, { useEffect, useRef } from 'react';
interface BackgroundBlobsProps {
  darkMode: boolean;
}
const BackgroundBlobs: React.FC<BackgroundBlobsProps> = ({
  darkMode
}) => {
  const blobsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!blobsRef.current) return;
      const scrollY = window.scrollY;
      const blobs = blobsRef.current.children;
      for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i] as HTMLElement;
        const speed = i % 2 === 0 ? 0.1 : 0.06;
        const yPos = -scrollY * speed;
        blob.style.transform = `translateY(${yPos}px) translateX(${Math.sin(scrollY / 1000) * 10}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div ref={blobsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full filter blur-[140px]  ${darkMode ? 'opacity-40 bg-blue-500' : 'opacity-80 bg-blue-400'} animate-blob-slow`} />
      <div className={`absolute top-[40%] right-[15%] w-[350px] h-[350px] rounded-full filter blur-[140px]  ${darkMode ? 'opacity-40 bg-violet-500' : 'opacity-80 bg-violet-400'} animate-blob-normal`} />
      <div className={`absolute bottom-[15%] left-[25%] w-[500px] h-[500px] rounded-full filter blur-[140px]  ${darkMode ? 'opacity-40 bg-teal-500' : 'opacity-80 bg-teal-400'} animate-blob-fast`} />
      <div className={`absolute top-[60%] right-[25%] w-[300px] h-[300px] rounded-full filter blur-[140px]  ${darkMode ? 'opacity-40 bg-orange-500' : 'opacity-80 bg-orange-400'} animate-blob-slow`} />
    </div>;
};
export default BackgroundBlobs;