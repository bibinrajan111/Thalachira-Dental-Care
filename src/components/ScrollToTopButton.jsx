import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 rounded-full border border-white/70 bg-dentalAccent p-3 text-white shadow-soft transition hover:scale-105 hover:bg-dentalInk"
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}

export default ScrollToTopButton;
