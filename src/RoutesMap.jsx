import { Routes, Route } from 'react-router-dom';
import useGtagConversion from './hooks/useGtagConversion';

import HomePage from './pages/HomePage';
import LegalCounselPage from './pages/LegalCounselPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import LegalSolutionsPage from './pages/LegalSolutionsPage';
import ContactPage from './pages/ContactPage';
import InternationalLawPage from './pages/InternationalLawPage';
import InternationalCommercePage from './pages/InternationalCommercePage';
import EstatePlanningPage from './pages/EstatePlanningPage';
import RealEstatePage from './pages/RealEstatePage';

import InternationalPrivateLawPage from './pages/InternationalPrivateLawPage';
import InheritanceProceduresPage from './pages/InheritanceProceduresPage';
import DementiaInterdictionPage from './pages/DementiaInterdictionPage';
import RealEstateOwnershipPage from './pages/RealEstateOwnershipPage';
import CompliancePage from './pages/CompliancePage';
import SpainConsultingPage from './pages/SpainConsultingPage';
import UsaConsultingPage from './pages/UsaConsultingPage';
import ItalianCitizenshipPage from './pages/ItalianCitizenshipPage';
import DubaiConsultingPage from './pages/DubaiConsultingPage';
import LegalAdviceElderyPage from './pages/LegalAdviceElderyPage';
import RedirectWhatsappPage from './pages/RedirectWhatsappPage';
import CorporateAdvisoryPage from './pages/CorporateAdvisoryPage';
import AdvisoryInItalyPage from './pages/AdvisoryInItalyPage';
import PersonalDataProtectionPage from './pages/PersonalDataProtectionPage';

function RoutesMap() {
  useGtagConversion();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quienes-somos" element={<LegalCounselPage />} />
      <Route path="/areas-de-practica" element={<PracticeAreasPage />} />
      <Route path="/soluciones-legales" element={<LegalSolutionsPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/derecho-internacional-privado-y-litigio-internacional" element={<InternationalLawPage />} />
      <Route path="/comercio-internacional-internacionalizacion-contratos-internacionales-y-busqueda-de-inversiones" element={<InternationalCommercePage />} />
      <Route path="/asesoria-corporativa" element={<CorporateAdvisoryPage />} />
      <Route path="/asesoria-legal-en-derecho-inmobiliario-y-urbanistico" element={<RealEstatePage />} />
      <Route path="/derecho-internacional-privado-negocios-y-litigio-internacional" element={<InternationalPrivateLawPage />} />
      <Route path="/tramites-por-herencia-sucesiones-testamentos-y-particiones" element={<InheritanceProceduresPage />} />
      <Route path="/interdiccion-por-demencias" element={<DementiaInterdictionPage />} />
      <Route path="/copropiedad-inmobiliaria" element={<RealEstateOwnershipPage />} />
      <Route path="/compliance-3" element={<CompliancePage />} />
      <Route path="/asesoria-en-espana" element={<SpainConsultingPage />} />
      <Route path="/asesoria-en-estados-unidos" element={<UsaConsultingPage />} />
      <Route path="/reconocimiento-de-ciudadania-italiana" element={<ItalianCitizenshipPage />} />
      <Route path="/asesoria-en-dubai" element={<DubaiConsultingPage />} />
      <Route path="/asesoria-legal-a-personas-mayores-y-familias" element={<LegalAdviceElderyPage />} />
      <Route path="/asesoria-en-italia" element={<AdvisoryInItalyPage />} />
      <Route path="/compliance-ley-proteccion-de-datos-personales" element={<PersonalDataProtectionPage />} />
      <Route path="/redirect" element={<RedirectWhatsappPage />} />
    </Routes>
  );
}

export default RoutesMap;
