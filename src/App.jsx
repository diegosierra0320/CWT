import './App.css'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <img src="/utils/CWT+logo white.png" alt="" />
      </header>
      <div className='contactos'>
        <h3>CONTACTOS</h3>
      </div>
      <div className='herramientas'>
        <h3>LINKS HERRAMIENTAS CWT</h3>
      </div>
      <div className='aerolineas'>
        <h3>LINKS AEROLINEAS Y PROVEEDORES</h3>
      </div>
      <div className='info1'>
      <article className='card'>
            <ul className='card__list'>
              <div  className='card__item'>
                <li><b>Trámites Migratorios</b><br /><span>tramitesmigratorios@mycwt.com</span></li>
                <i className="fa-solid fa-passport"></i>
              </div> <hr />
              <div className='card__item'>
                <li><b>Power Library</b><br /><span>ActualizacionesPL@mycwt.com</span></li>
                <i className="fa-solid fa-book"></i>
              </div> <hr />
              <div className='card__item'>
                <li><b>Power Hotel</b><br /><span>requestsphlatam@mycwt.com</span></li>
                <i className="fa-solid fa-hotel"></i>
              </div> <hr />
              <div className='card__item'>
                <li><b>Verint (Work Force Management)</b><br /><span>WFMSpanish@mycwt.com</span></li>
                <i className="fa-solid fa-clock"></i>
              </div> <hr />
              <div className='card__item'>
                <li><b>TSC Support</b><br /><span>latam.tsc.ww@contactcwt.com</span></li>
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
            </ul>
          </article>
      </div>
      <div className='info2'>
          <a className='p-hotel' href="https://int.cwthotel360.com/hotelsearch.aspx?params=zp4oX5hkHY2pq9uBKtB4Qeech3U5qlmb1c+ioyhAM0rMnJM8iHgBdvNFEWIeGiM5E6DbYNaXMq9+SD/YxfsJzhy6894okZsKPUKtFO5jfTw=" target="_blank">
            <img src="/utils/CWT.png" alt="" />
            <b>Power Hotel</b>
          </a>
        <a className='p-library' href="https://iprod1powerlibrary.mycwt.com/" target={"_blank"}>
          <img src="https://iprod1powerlibrary.mycwt.com/Images/power-library-text.png" alt="" />
          <b>Power Library</b>
        </a>
        <a className='portrait' href="https://maint.mycwt.com/" target={"_blank"}>
          <img src="/utils/CWT.png" alt="" />
          <b>Portrait</b>
        </a>
        <a className='p-amadeus' href="https://1a.sellingplatformconnect.amadeus.com/LoginService/login.jsp?SITE=LOGINURL&LANGUAGE=GB" target={"_blank"}>
          <img src="https://img2.freepng.es/20180612/ohx/kisspng-amadeus-it-group-amadeus-crs-computer-reservation-abacus-group-5b204cca84db40.0752248415288434665442.jpg" alt="" />
          <b>Amadeus</b>
        </a>
        <a className='sto' href="https://www.cwtsmarttraveller.com.br/cwtco/default.aspx" target={"_blank"}>
          <img src="https://static-us.useargo.com//images/logo_argo.png?v=26/02/2020%2011:57:13%20a.%20m." alt="" />
          <b>STO</b>
        </a>
        <a className='verint' href="https://wfo.mt2.verintcloudservices.com/wfo/control/signin" target={"_blank"}>
          <img src="https://wfo.mt2.verintcloudservices.com/wfo/branding/default/main_two_step.png?v=15.2.924.697" alt="" />
          <b>Verint</b>
        </a>
        <a className='power-advantage' href="https://poweradvantage.mycwt.com/login-page" target={"_blank"}>
          <img src="https://mycwt.jiveon.com/groups/image/1491/2.png?a=46547" alt="" />
          <b>Power Advantage</b>
        </a>
        <a className='CXP' href="https://cwt-cwtcxp1-prod1.pegacloud.net/prweb/PRAuth/app/CXP_/5NwfVO74dl9eO-R22P3BMnEyYibt8_7V*/!STANDARD" target={"_blank"}>
          <img src="/utils/CWT.png" alt="" />
          <b>CXP</b>
        </a>
      </div>
      <div className='info3'>
        <a className='puntos-latam' href="https://puntoslatam.com.co/autenticacion" target={"_blank"}>
          <img src="https://megaincentivos-p.s3.amazonaws.com/static/images/Latam/logo_image.png" alt="" />
          <b>Putos Latam</b>
        </a>
        <a className='ags-360' href="https://ags360.csavianca.com/User/Login?ReturnUrl=%2fAgencySupport%2fIndexAgency#no-back-button" target={"_blank"}>
          <img src="https://ags360.csavianca.com/img/rojo-listo.gif" alt="" />
          <b>AGS 360-AV</b>
        </a>
        <a className='avianca-trade' href="https://www.avianca.com/co/es/trade/" target={"_blank"}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDKSzXuHGZeVUCYqdP_WFCmYkfjcMgmdmGoJBhrpxWBoAPBzDkqBjwY5Hv9285bfeLxw&usqp=CAU" alt="" />
          <b>Avianca trade</b>
        </a>
        <a className='latam-trade' href="https://www.latamtrade.com/" target={"_blank"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1200px-Latam-logo_-v_%28Indigo%29.svg.png" alt="" />
          <b>Latam trade</b>
        </a>
        <a className='ctm' href="https://www.ctmenlinea.com.co/es" target={"_blank"}>
          <img src="https://cdn.bmpcloud.com/static/assets/business/ctm/images/logo.png?v=20155" alt="" />
          <b>CTM</b>
        </a>
        <a className='jet-smart' href="https://www.jetsmart.com/" target={"_blank"}>
          <img src="https://www.jetsmart.com/images/header/jetsmart-logo-colored.svg" alt="" />
          <b>Jet smart</b>
        </a>
        <a className='volaris' href="https://www.volaris.com/" target={"_blank"}>
          <img src="https://www.volaris.com/uipl-assets/images/volaris-logo.svg" alt="" />
          <b>Volaris</b>
        </a>
        <a className='american' href="https://ssc.aa.com/siebel/app/prmportal/enu/?SWECmd=GotoView&SWEView=Home+Page+View+(SCW)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Login+Applet+(PRM)&SWERowId0=VRId-0" target={"_blank"}>
          <img src="https://www.aa.com/content/images/chrome/rebrand/aa-logo.png" alt="" />
          <b>American</b>
        </a>
        <a className='viva-aerobus' href="https://web.vivaaerobus.com/mx/vivaempresas" target={"_blank"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Vivaaerobus-logo.png" alt="" />
          <b>Viva aerobus</b>
        </a>
        <a className='viva-air' href="https://www.vivaair.com/co/es/user/profile" target={"_blank"}>
          <img src="./utils/viva-air.svg" alt=""/>
          <b>Viva Air</b>
        </a>
        <a className='plataforma-10' href="https://red.plataforma10.net/?returnUrl=%2FPVs%2FNotificaciones&sesionExpirada=True" target={"_blank"}>
          <img src="https://red.plataforma10.net/public/images/logo-plataforma10-login.jpg" alt="" />
          <b>Plataforma 10</b>
        </a>
        <a className='central-pasajes' href="https://www.aiv.tur.ar/aiv/ingreso.htm" target={"_blank"}>
          <img src="https://www.centraldepasajes.com.ar/cdp/img/home/logo-central-de-pasajes.png" alt="" />
          <b>Central de pasajes</b>
        </a>
        <a className='buquebus' href="https://agencias.buquebus.com/" target={"_blank"}>
          <img src="/utils/Buque.svg" alt="" />
          <b>Buquebus</b>
        </a>
        <a className='delta' href="https://pro.delta.com/content/agency/erp/es/login.html#" target={"_blank"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/368px-Delta_logo.svg.png" alt="" />
          <b>Delta PRO</b>
        </a>
        <a className='United' href="https://jetstream.united.com/?lang=es#/public-landing" target={"_blank"}>
          <img src="https://1000marcas.net/wp-content/uploads/2020/11/United-Airlines-logo-768x415.png" alt="" />
          <b>United</b>
        </a>
        <a className='KIU-Click' href="https://kiu.click/login/" target={"_blank"}>
          <img src="https://aerolatinnews.com/wp-content/uploads/2014/08/KIU_MASTER_CHICO_CMYK-e1415184223322.jpg" alt="" />
          <b>KIU Click</b>
        </a>
        <a className='hanh-air' href="https://www.hahnair.com/es" target={"_blank"}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Hahn_Air_Logo.svg/263px-Hahn_Air_Logo.svg.png" alt="" />
          <b>Hahn Air</b>
        </a>
      </div>
      <div className='footer'>
        <b>
          ¿Quieres agregar algun link o contacto? envia correo con la informacion a Diego Sierra (dsierra@mycwt.com)
        </b>
      </div>
    </div>
  )
}

export default App
