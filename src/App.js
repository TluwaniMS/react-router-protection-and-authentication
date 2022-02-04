import './App.css'
import { Route, Routes } from 'react-router-dom'
import MunicipalitiesComponent from './components/municipalities-component/MunicipalitiesComponent'
import DoctorsComponent from './components/doctors-component/DoctorsComponent'
import HospitalsComponent from './components/hospitals-component/HospitalsComponent'
import UsersComponent from './components/users-component/UsersComponent'
import HomeComponent from './components/home-component/HomeComponent'
import SignInComponent from './components/sign-in-componet/SignInComponent'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/sign-in" element={<SignInComponent />} />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/municipalities" element={<MunicipalitiesComponent />} />
                <Route path="/hospitals" element={<HospitalsComponent />} />
                <Route path="/doctors" element={<DoctorsComponent />} />
            </Routes>
        </div>
    )
}

export default App
