import './App.css';
import './css_files/1_data_and_chart.css';
import './css_files/2_fetch_get.css';
import './css_files/3_fetch_get_images.css'
import { SWRConfig } from 'swr';
import DataWithChart from './structure_components/1_data_and_chart';
import FetchGet from './structure_components/2_fetch_get';
import FetchImages from './structure_components/3_fetch_get_images';
import FetchWithSwr from './structure_components/5_SWR_simple_fetch';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {  

  return (
    <div className="App">
       
       <DataWithChart />
       <FetchGet />
       <FetchImages/>
       <SWRConfig value={{fetcher}}>
        <FetchWithSwr/>
       </SWRConfig>
    </div>
  );
}

export default App;
