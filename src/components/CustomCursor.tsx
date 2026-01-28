import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button') ||
        target.onclick !== null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Only hide cursor on clickable elements */}
      <style>{`
        a, 
        button, 
        input[type="button"],
        input[type="submit"],
        [role="button"],
        .cursor-pointer,
        [onclick] {
          cursor: none !important;
        }
      `}</style>
      
      {/* Custom cursor - only show when hovering clickable elements */}
      {isHovering && (
        <div
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            width: '35px',
            height: '35px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'opacity 0.2s',
          }}
        >
          <img
            src="/logo.png"
            alt="cursor"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );
};

export default CustomCursor;