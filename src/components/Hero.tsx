import { h } from 'preact';
import HeroImage from '../assets/hero.png';
import AppHeader from './AppHeader';
import { ThemeState } from '../core/state';

export default function Hero() {
  const { theme } = ThemeState.useContainer();
  return (
    <div
      className="w-full overflow-hidden relative "
      style={{ filter: 'blur(100%)' }}
    >
      <img
        src={HeroImage}
        style={{
          height: '60vh',
          objectFit: 'cover',
          verticalAlign: 'middle',
          filter: 'blur(2px)',
          transform: 'scale(1.1)'
        }}
        className="w-full"
        alt=""
        srcset=""
      />
      <AppHeader />
      <div
        className="absolute text-white inset-0 center text-5xl md:text-6xl p-12"
        style={{
          zIndex: 3,
          backgroundColor:
            theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255, 0)'
        }}
      >
        <h1
          className="border-4 p-4 lg:p-8"
          style={{
            borderRadius: '0.75rem',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        >
          Aleksandar Stanišić
        </h1>
      </div>
    </div>
  );
}
