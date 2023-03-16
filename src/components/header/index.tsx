import React from 'react';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next';

import { Suspense } from 'react';

const Navbar = () => {
  const {t,i18n}=useTranslation();
  const changelang=():void=>{
   i18n.changeLanguage('ar')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <select className="d-select" aria-label="Default select example"  onChange={changelang} >
  <option value="en">en</option>
  <option value="ar">arbic</option>
</select>
    </div>
    </nav>
    <div>
      {t('title')}
    </div>
    </>
  
  )
}

export default Navbar

//rafce short