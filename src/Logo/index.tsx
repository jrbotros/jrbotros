import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Vivus from 'vivus';

import css from './index.module.scss';

export function Logo() {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  const [logoDrawn, setLogoDrawn] = useState(false);

  useEffect(() => {
    if (target) {
      new Vivus(
        'logo',
        {
          type: 'delayed',
          duration: 200,
          animTimingFunction: Vivus.EASE,
          onReady: function (myVivus) {
            myVivus.el.style.visibility = 'inherit';
          },
        },
        () => setLogoDrawn(true),
      );
    }
  }, [target]);

  const iconClasses = classNames(css.iconGithub, {
    [css.show!]: logoDrawn,
  });

  return (
    <div className={css.logoWrapper} ref={setTarget}>
      <svg
        id="logo"
        className={css.logo}
        viewBox="-10 -10 365 575"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M133.668442,312.084444 C133.668442,312.084444 44.5077466,249.545381 0.250473726,249.545381 C-3.91358877,249.545381 324.488755,87.8422564 342.336411,42.4555377 C360.184067,-2.93118108 309.242661,-9.96633733 286.270005,12.0453814 C263.297349,34.0571002 229.082505,125.342256 229.082505,125.342256 L133.668442,312.084444 C133.668442,312.084444 5.39109873,595.303194 0.250473726,552.955538 C-4.89015127,510.607881 70.0915242,423.605401 133.668442,312.084444 C174.698198,240.113707 229.082505,125.342256 229.082505,125.342256 C229.082505,125.342256 296.859849,84.7211627 325.715317,112.603975 C354.570786,140.486788 300.35652,187.863829 276.91063,208.631319 C225.961411,253.760225 133.668442,312.084444 133.668442,312.084444 Z"
          id="Path-5"
          stroke="#666666"
          strokeWidth="3"
          fill="none"
        ></path>
      </svg>
      <a
        className={iconClasses}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/jrbotros"
      >
        <svg viewBox="0 0 512 512">
          <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
        </svg>
      </a>
    </div>
  );
}
