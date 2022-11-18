import './App.css';
import { useCountUp } from './components/CountUp';
import { Text, VStack } from '@chakra-ui/react';

function App() {
  const startDateMs = new Date(2022, 11, 11, 6, 14);

  const [days, hours, minutes, seconds] = useCountUp(startDateMs);

  return (
    <div className="App">
      <header className="App-header">
        <VStack>
          <Text>
            It has been {days} days, {hours} hours, {minutes} minutes and {seconds} seconds
          </Text>
          <Text>
            since FTX, Alameda Research and approximately 130
            additional affliated companies filed for Chapter 11 bankruptcy.
          </Text>
          <Text>
            Sam Bankman-Fried is not in prison yet.
          </Text>
        </VStack>
      </header>
    </div>
  );
}

export default App;
