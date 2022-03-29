import './App.scss';
import { useState } from 'react';
import { StateManager } from './utils/state';
import Options from './components/Options';
import Scores from './components/Scores';
import Traffic from './components/Traffic';
import Roads from './components/Roads';
import Plates from './components/Plates';
import Watermark from './components/Watermark';
import Sun from './components/Sun';
import Snow from './components/Snow';
import Language from './components/Language';

function App() {
  const [scores, setScores] = useState(StateManager.scores);
  const [categories, setCategories] = useState(StateManager.categories);

  // State for scores and category visibility is managed using a singleton to avoid
  // having to pass multiple objects and setters to components.
  const updateScores = () => setScores({...StateManager.scores});
  const updateCategories = () => setCategories({...StateManager.categories});

  return (
    <div className="App">
      <Options categories={categories} updateCategories={updateCategories} updateScores={updateScores} />
      <div className='App__content'>
        <Scores scores={scores} />
        <div className='Categories'>
          {categories.traffic && <Traffic updateScores={updateScores} />}
          {categories.roads && <Roads updateScores={updateScores} />}
          {categories.plates && <Plates updateScores={updateScores} />}
          {categories.watermark && <Watermark updateScores={updateScores} />}
          {categories.sun && <Sun updateScores={updateScores} />}
          {categories.snow && <Snow updateScores={updateScores} />}
          {categories.language && <Language updateScores={updateScores} />}
        </div>
      </div>
    </div>
  );
}

export default App;
