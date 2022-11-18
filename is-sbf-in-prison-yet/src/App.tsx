import './App.css';
import { useCountUp } from './components/CountUp';
import { Text, VStack } from '@chakra-ui/react';

function App() {
  const startDateMs = new Date('November 11, 2022 14:14:00');
  const [days, hours, minutes, seconds] = useCountUp(startDateMs);

  return (
    <div className="App">
      <header className="App-header">
        <VStack>
          <Text>
            It has been {days} days, {hours} hours, {minutes} minutes and{' '}
            {seconds} seconds
          </Text>
          <Text>
            since FTX, Alameda Research and approximately 130 additional
            affliated companies filed for Chapter 11 bankruptcy.
          </Text>
        </VStack>
        <VStack>
          <Text>Sam Bankman-Fried is <b>not</b> in prison yet.</Text>
        </VStack>
      </header>
    </div>
  );
}

export default App;
