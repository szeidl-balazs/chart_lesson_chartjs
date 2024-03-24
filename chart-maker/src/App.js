import './App.css';
import './css_files/1_data_and_chart.css';
import './css_files/2_fetch_get.css';
import './css_files/3_fetch_get_images.css'
import DataWithChart from './structure_components/1_data_and_chart';
import FetchGet from './structure_components/2_fetch_get';
import FetchImages from './structure_components/3_fetch_get_images';


function App() {

  

  return (
    <div className="App">
      <DataWithChart />
      <FetchGet />
      <FetchImages/>
    </div>
  );
}

export default App;
