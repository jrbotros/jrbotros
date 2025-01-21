import ReactDOM from 'react-dom';

import { Favicon } from './Favicon';
import { Logo } from './Logo';
import { Resume } from './Resume';
import resumeJson from './data.json';
import css from './index.module.scss';
import { ResumeSchema } from './schema';

const typedResume = ResumeSchema.parse(resumeJson);

function Main() {
  return (
    <div className={css.main}>
      <Favicon />
      <header>
        <Logo />
      </header>
      <div>
        <Resume resume={typedResume} />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('mount'));
