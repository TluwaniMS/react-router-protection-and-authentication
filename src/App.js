import './App.css'
import { Route, Routes } from 'react-router-dom'
import MunicipalitiesComponent from './components/municipalities-component/MunicipalitiesComponent'
import DoctorsComponent from './components/doctors-component/DoctorsComponent'
import HospitalsComponent from './components/hospitals-component/HospitalsComponent'
import UsersComponent from './components/users-component/UsersComponent'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/municipalities" element={<MunicipalitiesComponent />} />
                <Route path="/hospitals" element={<HospitalsComponent />} />
                <Route path="/doctors" element={<DoctorsComponent />} />
            </Routes>
        </div>
    )
}

export default App
