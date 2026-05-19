import { useEffect } from 'react';
import './styles.css';
import { initSummaCalculator } from './legacyCalculator';

export default function App() {
  useEffect(() => {
    initSummaCalculator();
  }, []);

  return null;
}
