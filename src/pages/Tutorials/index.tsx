import { customStyled } from 'src/assets/utils/stitches';
import TutorialsGlobalSidebar from './components/TutorialsGlobalSidebar';
import ArticleRender from './components/ArticleRender';

const TutorialsStyleContainer = customStyled('div', {
  display: 'flex',
  alignSelf: 'stretch',
  // border: '3px solid red !important',

  '#global-sidebar': {
    // border: '3px solid yellow'
  },

  '#article-container': {
    // border: '3px solid limegreen',
    flex: 1,

  }
});

export default function Tutorials() {
  return (
    <TutorialsStyleContainer id="TutorialsStyleContainer">
      <TutorialsGlobalSidebar />
      <ArticleRender />
    </TutorialsStyleContainer>
  );
}
