import { h } from 'preact';
import { ThemeState } from '../core/state';
import code from '../assets/code.png';

// This interface is sketch for image

// class Skills {
//   javaScript = ['react', 'vue'];
//   typeScript = true;
//   node = ['express', 'nestJs', 'koa'];
//   flutter = true;
//   php = ['laravel', 'wordPress'];
//   dotnetCore = true;
//   additional = ['linux', 'git'];
// }

export default function Skills() {
  const { theme } = ThemeState.useContainer();

  return (
    <div
      id="skills"
      className="px-4 container mx-auto"
      style={{ ...(theme === 'light' ? { backgroundColor: '#1d2021' } : {}) }}
    >
      <img
        src={code}
        alt="skills"
        className="w-full mx-auto"
        style={{
          maxWidth: 500,
        }}
      />
    </div>
  );
}