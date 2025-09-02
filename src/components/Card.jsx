import React, { useEffect, useState } from 'react'

const Card = () => {

  const [cwtData, setCwtData] = useState([
    {
      id: 1,
      type: "CWT",
      name: "BUZZ",
      url: "https://mycwt.jiveon.com/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 2,
      type: "CWT",
      name: "BUZZ My help!",
      url: "https://mycwt.jiveon.com/groups/gsc-colombia",
      img: "/utils/myHelp.PNG",
      preferencial: "no"
    },
    {
      id: 3,
      type: "CWT",
      name: "Power Library",
      url: "https://iprod1powerlibrary.mycwt.com/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 4,
      type: "CWT",
      name: "Portrait",
      url: "https://maint.mycwt.com/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 5,
      type: "CWT",
      name: "Amadeus",
      url: "https://1a.sellingplatformconnect.amadeus.com/LoginService/login.jsp?SITE=LOGINURL&LANGUAGE=GB",
      img: "https://img2.freepng.es/20180612/ohx/kisspng-amadeus-it-group-amadeus-crs-computer-reservation-abacus-group-5b204cca84db40.0752248415288434665442.jpg",
      preferencial: "no"
    },
    {
      id: 6,
      type: "CWT",
      name: "STO",
      url: "https://www.cwtsmarttraveller.com.br/cwtco/default.aspx",
      img: "https://static-us.useargo.com//images/logo_argo.png?v=26/02/2020%2011:57:13%20a.%20m.",
      preferencial: "no"
    },
    {
      id: 7,
      type: "CWT",
      name: "Verint",
      url: "https://wfo.mt2.verintcloudservices.com/wfo/IDP22.html",
      img: "https://wfo.mt2.verintcloudservices.com/wfo/branding/default/main_two_step.png?v=15.2.924.697",
      preferencial: "no"
    },
    {
      id: 8,
      type: "CWT",
      name: "Power Advantage",
      url: "https://poweradvantage.mycwt.com/login-page",
      img: "https://mycwt.jiveon.com/groups/image/1491/2.png?a=46547",
      preferencial: "no"
    },
    {
      id: 9,
      type: "CWT",
      name: "CXP",
      url: "https://cwt-cwtcxp1-prod1.pegacloud.net/prweb/PRAuth/app/CXP_/5NwfVO74dl9eO-R22P3BMnEyYibt8_7V*/!STANDARD",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 10,
      type: "CWT",
      name: "CWT Password",
      url: "https://cwt.identitynow.com/login/login/?goto=https:%2F%2Fcwt.login.sailpoint.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D8hq2mbZ5Hrg6TVEz%26redirect_uri%3Dhttps:%2F%2Fcwt.identitynow.com%2Foauth%2Fcallback%26state%3DLrqvOduQsLffvmH5QBigVfFU5QrkCK4wHNGEQoxNdfFvvTfgkiMPV0vLQ6DaugnEKHjrjBYQdj1Enrxr0JvDuAGQAAEzzODAtrRa7gMIZR7RJZVQNxRzvmClyy71bbWvw96TB9cjWFRxeE5Jp7HHXYcd7AIeMwwkSkpAexusSEKs7z7cIIV64zabXvX1DA9B0HiKUiE7geQ97wCb9xstRkfBTlNClkKRLX7gckSM2tq3SGMr88FGPESFAfX3zRCa%26authId%3D5c7fe3e5-608f-4990-ba0b-c496c2ac42a4",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 11,
      type: "CWT",
      name: "Power Hotel",
      url: "https://intpilot.cwthotel360.com/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 12,
      type: "suppliers",
      name: "Puntos Latam",
      url: "https://puntoslatam.com.co/autenticacion",
      img: "https://megaincentivos-p.s3.amazonaws.com/static/images/Latam/logo_image.png",
      preferencial: "yes"
    },
    {
      id: 13,
      type: "suppliers",
      name: "Latam trade",
      url: "https://www.latamtrade.com/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1200px-Latam-logo_-v_%28Indigo%29.svg.png",
      preferencial: "yes"
    },
    {
      id: 14,
      type: "suppliers",
      name: "Delta PRO",
      url: "https://pro.delta.com/content/agency/erp/es/login.html#",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/368px-Delta_logo.svg.png",
      preferencial: "yes"
    },
    {
      id: 15,
      type: "suppliers",
      name: "United",
      url: "https://jetstream.united.com/?lang=es#/public-landing",
      img: "https://1000marcas.net/wp-content/uploads/2020/11/United-Airlines-logo-768x415.png",
      preferencial: "yes"
    },
    {
      id: 16,
      type: "suppliers",
      name: "American",
      url: "https://ssc.aa.com/siebel/app/prmportal/enu/?SWECmd=GotoView&SWEView=Home+Page+View+(SCW)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Login+Applet+(PRM)&SWERowId0=VRId-0",
      img: "https://www.aa.com/content/images/chrome/rebrand/aa-logo.png",
      preferencial: "yes"
    },
    {
      id: 17,
      type: "suppliers",
      name: "Hertz",
      url: "https://www.hertz.com/rentacar/reservation/?&utm_content=M8-SEM&gclid=EAIaIQobChMIweO6g6rF_gIVJiatBh3mIgF1EAAYASAAEgLaivD_BwE&gclsrc=aw.ds",
      img: "https://images.hertz.com/misc/overlay/hertz-logo-black.png",
      preferencial: "yes"
    },
    {
      id: 19,
      type: "suppliers",
      name: "Avianca Expert",
      url: "https://expert.avianca.com/index",
      img: "https://expert.avianca.com/assets/Images/logo-av-red.svg",
      preferencial: "yes"
    },
    {
      id: 20,
      type: "suppliers",
      name: "Avianca trade",
      url: "https://aviancab2c.b2clogin.com/aviancab2c.onmicrosoft.com/b2c_1_pacn_agencias_prd/oauth2/v2.0/authorize?client_id=1d903eec-3c09-48b0-914e-95193d922e02&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Ftrade.avianca.com%2F&client-request-id=eca6bdfe-756b-4b87-976f-0c171404fa76&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.30.0&client_info=1&code_challenge=YL8b5siyU22Od-5G3kE6Pnf2Ld2xg3R0Lsak1mrkwOc&code_challenge_method=S256&nonce=545ffb9a-2358-4319-84dd-e09517f6b480&state=eyJpZCI6ImJhNDE4NGFkLTdkNzItNDY1MS1hNDVlLWI2M2MwNWU2NTk5OSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&ui_locales=undefined",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDKSzXuHGZeVUCYqdP_WFCmYkfjcMgmdmGoJBhrpxWBoAPBzDkqBjwY5Hv9285bfeLxw&usqp=CAU",
      preferencial: "yes"
    },
    {
      id: 21,
      type: "suppliers",
      name: "Avianca bajar prechequeo",
      url: "https://urldefense.com/v3/__https:/aviancatrade.zendesk.com/hc/es/requests/new?ticket_form_id=12514335622427__;!!A6M1_ATJChxdxFyllOMdWA!BkAF2IDZn5QMVxliPkFwqHn8ch6MSqnsSyluL4lXuRiOH-2t2SEitAT_KFKHfZRkjoH3UO1mHB4mEYAwK00$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDKSzXuHGZeVUCYqdP_WFCmYkfjcMgmdmGoJBhrpxWBoAPBzDkqBjwY5Hv9285bfeLxw&usqp=CAU",
      preferencial: "yes"
    },
    {
      id: 22,
      type: "suppliers",
      name: "Air France",
      url: "https://www.afkl.biz/s/",
      img: "/utils/Airfrance.PNG",
      preferencial: "yes"
    },
    {
      id: 23,
      type: "suppliers",
      name: "Air Europa",
      url: "https://www.aireuropa.com/br/es/aea/atencion-al-cliente.html",
      img: "https://www.aireuropa.com/assets/svgs/ae-logo.svg",
      preferencial: "yes"
    },
    {
      id: 24,
      type: "suppliers",
      name: "Copa Airlines",
      url: "https://www.copaair.com/es-br/agencias/",
      img: "https://www.copaair.com/assets/Copa-Airlines-blue.svg",
      preferencial: "yes"
    },
    {
      id: 25,
      type: "suppliers",
      name: "Lufthansa",
      url: "https://www.lufthansa.com/br/es/agencias-de-viajes",
      img: "https://www.lufthansa.com/etc/designs/dcep/lh-logo-crane.svg",
      preferencial: "yes"
    },
    {
      id: 26,
      type: "suppliers",
      name: "Universal Assistance",
      url: "https://ar.ec.universal-assistance.com/Emision/Login?culture=es",
      img: "https://seeklogo.com/images/U/universal-assistance-logo-1797B8158D-seeklogo.com.png",
      preferencial: "yes"
    },
    {
      id: 27,
      type: "suppliers",
      name: "CTM",
      url: "https://www.ctmenlinea.com.co/es",
      img: "https://cdn.bmpcloud.com/static/assets/business/ctm/images/logo.png?v=20155",
      preferencial: "no"
    },
    {
      id: 28,
      type: "suppliers",
      name: "Jet smart",
      url: "https://www.jetsmart.com/",
      img: "https://www.jetsmart.com/images/header/jetsmart-logo-colored.svg",
      preferencial: "no"
    },
    {
      id: 29,
      type: "suppliers",
      name: "Volaris",
      url: "https://www.volaris.com/",
      img: "https://www.volaris.com/uipl-assets/images/volaris-logo.svg",
      preferencial: "no"
    },
    {
      id: 30,
      type: "suppliers",
      name: "Viva aerobus",
      url: "https://web.vivaaerobus.com/mx/vivaempresas",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vivaaerobus-logo.png",
      preferencial: "no"
    },
    {
      id: 31,
      type: "suppliers",
      name: "Plataforma 10",
      url: "https://red.plataforma10.net/?returnUrl=%2FPVs%2FNotificaciones&sesionExpirada=True",
      img: "https://red.plataforma10.net/public/images/logo-plataforma10-login.jpg",
      preferencial: "no"
    },
    {
      id: 32,
      type: "suppliers",
      name: "Central de pasajes",
      url: "https://www.aiv.tur.ar/aiv/ingreso.htm",
      img: "https://www.centraldepasajes.com.ar/cdp/img/home/logo-central-de-pasajes.png",
      preferencial: "no"
    },
    {
      id: 33,
      type: "suppliers",
      name: "Buquebus",
      url: "https://agencias.buquebus.com/",
      img: "/utils/Buque.svg",
      preferencial: "no"
    },
    {
      id: 34,
      type: "suppliers",
      name: "KIU Click",
      url: "https://kiu.click/login/",
      img: "https://aerolatinnews.com/wp-content/uploads/2014/08/KIU_MASTER_CHICO_CMYK-e1415184223322.jpg",
      preferencial: "no"
    },
    {
      id: 35,
      type: "suppliers",
      name: "Hahn Air",
      url: "https://www.hahnair.com/es",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Hahn_Air_Logo.svg/263px-Hahn_Air_Logo.svg.png",
      preferencial: "no"
    },
    {
      id: 36,
      type: "CWT",
      name: "Penalidades Aerolineas",
      url: "https://mycwt.jiveon.com/docs/DOC-29232",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 37,
      type: "suppliers",
      name: "Qatar Airways",
      url: "https://www.qatarairways.com/tradeportal/en/Help.html",
      img: "/utils/Qatar.PNG",
      preferencial: "no"
    },
    {
      id: 38,
      type: "suppliers",
      name: "Iberia",
      url: "https://www.iberia.com/co/preguntas-frecuentes/?_gl=1*glyy0g*_up*MQ..&gclid=EAIaIQobChMI--GM7KXm_gIV5wOtBh01dABSEAAYASAAEgJxyfD_BwE",
      img: "https://www.iberia.com/wcs/logos/iberia/logo_iberia_pos.svg",
      preferencial: "no"
    },
    {
      id: 39,
      type: "suppliers",
      name: "British Airways",
      url: "https://www.britishairways.com/es-mx/traveltrade",
      img: "https://www.britishairways.com/cms/global/assets/images/site/brand/ba_masterbrand_positive.svg",
      preferencial: "no"
    },
    {
      id: 40,
      type: "suppliers",
      name: "Air Canada",
      url: "https://www.aircanada.com/co/es/aco/home.html",
      img: "https://logos-world.net/wp-content/uploads/2021/05/Air-Canada-Logo.png",
      preferencial: "no"
    },
    {
      id: 41,
      type: "CWT",
      name: "Comunicados",
      url: "https://communicationsteam.netlify.app/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 42,
      type: "CWT",
      name: "Placetopay",
      url: "https://panel.placetopay.ec/",
      img: "https://static.placetopay.com/placetopay-logo.svg",
      preferencial: "no"
    },
    {
      id: 43,
      type: "hotels",
      name: "ACCOR",
      url: "https://group.accor.com/",
      img: "https://group.accor.com/-/media/Corporate/Master-Page/Logos/Accor-Logo-Footer-vDef.png",
      preferencial: "yes"
    },
    {
      id: 44,
      type: "hotels",
      name: "BWH Hotels",
      url: "https://www.bwhhotelgroup.com/content/bwh-hotelgroup/en_US.html",
      img: "https://www.bwhhotelgroup.com/content/dam/bwh-hg/bwh-hotel-group-logo1.jpg",
      preferencial: "yes"
    },
    {
      id: 45,
      type: "hotels",
      name: "GHL Hoteles",
      url: "https://www.ghlhoteles.com/",
      img: "https://www.ghlhoteles.com/uploads/logoshotel/logo_ghl.png",
      preferencial: "yes"
    },
    {
      id: 46,
      type: "hotels",
      name: "Hilton",
      url: "https://www.hilton.com/en/",
      img: "https://www.hilton.com/modules/assets/svgs/logos/WW.svg",
      preferencial: "yes"
    },
    {
      id: 47,
      type: "hotels",
      name: "Hoteles Estelar",
      url: "https://www.hotelesestelar.com/",
      img: "https://daragot.com/wp-content/uploads/2020/04/Hotel-Estelar-Daragot.png",
      preferencial: "yes"
    },
    {
      id: 48,
      type: "hotels",
      name: "Hyatt",
      url: "https://www.hyatt.com/",
      img: "https://1000logos.net/wp-content/uploads/2019/11/Hyatt-Logo.png",
      preferencial: "yes"
    },
    {
      id: 49,
      type: "hotels",
      name: "Marriott",
      url: "https://www.marriott.com/default.mi",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Marriott_hotels_logo14.svg/2560px-Marriott_hotels_logo14.svg.png",
      preferencial: "yes"
    },
    {
      id: 50,
      type: "hotels",
      name: "Melia",
      url: "https://www.melia.com/es",
      img: "https://searchlogovector.com/wp-content/uploads/2018/11/meli%C3%A1-hotels-resorts-logo-vector.png",
      preferencial: "yes"
    },
    {
      id: 51,
      type: "hotels",
      name: "NH Hoteles",
      url: "https://www.nh-hotels.com/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Copyright_nh_hotel_group_Logo_NH-Hotels.png/640px-Copyright_nh_hotel_group_Logo_NH-Hotels.png",
      preferencial: "yes"
    },
    {
      id: 52,
      type: "hotels",
      name: "Habitel",
      url: "https://www.habitelhotels.com/es/",
      img: "https://www.search4.co/empleo//uploaded_images/AT70070974FO30760494.jpg",
      preferencial: "yes"
    },
    {
      id: 53,
      type: "hotels",
      name: "Radisson",
      url: "https://www.radissonhotels.com/en-us/",
      img: "data:image/png;base64,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",
      preferencial: "yes"
    },
    {
      id: 54,
      type: "hotels",
      name: "Wyndham",
      url: "https://www.wyndhamhotels.com/es-xl/about-us/all-inclusive?cid=DP:gtqn993raxq5yqn&gclid=EAIaIQobChMI2cmmxPXc_gIVyQytBh3r_gHPEAAYASAAEgI8A_D_BwE",
      img: "https://seekvectorlogo.com/wp-content/uploads/2022/01/wyndham-hotels-and-resorts-vector-logo-2022.png",
      preferencial: "yes"
    },
    {
      id: 55,
      type: "CWT",
      name: "WPP",
      url: "https://serviciodeviaje.codelco.cl/login.aspx?Refresh=S",
      img: "http://www.centrocielo.cl/wp-content/uploads/sites/24/2017/03/logo-codelco-proyectos-ust.jpg",
      preferencial: "yes"
    },
    {
      id: 56,
      type: "CWT",
      name: "Partners Info",
      url: "https://mycwt.jiveon.com/groups/global-partners-network",
      img: "/Utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 57,
      type: "suppliers",
      name: "GOL",
      url: "https://www.voegol.com.br/es-bo/agencias?gad_source=1&gclid=EAIaIQobChMI8MPYgZmQhwMVTjbUAR16KQ80EAAYAiAAEgKXHfD_BwE&gclsrc=aw.ds",
      img: "https://www.voegol.com.br/themes/custom/voegol/images/logos/gol-logo-mobile.png",
      preferencial: "no"
    },
    {
      id: 58,
      type: "suppliers",
      name: "Localiza",
      url: "https://www.localiza.com/colombia/es-co",
      img: "https://logovectordl.com/wp-content/uploads/2023/07/localiza-rent-a-car-logo-vector.png",
      preferencial: "no"
    },
    {
      id: 59,
      type: "suppliers",
      name: "Iberia agencias",
      url: "https://www.iberiagencias.com/Iberiagencias/showLoginWeb.do",
      img: "https://www.iberia.com/wcs/logos/iberia/logo_iberia_pos.svg",
      preferencial: "no"
    }
  ])

  //UseState para guardar la data ingresada en el input de busqueda
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //Constante para manejar el input de busqueda
  const handleSearch = e => {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    const results = cwtData.filter(data =>
      data.name.toLowerCase().includes(searchInput.toLowerCase()));
    setSearchResult(results);
  }, [searchInput])


  
  return (
    <div className='container'>

      <header className='header'>
        {/* Input de busqueda para filtrado en tiempo real */}
        
        <div><img src="/utils/CWT+logo white.png" alt="" /><h6>An Amex GBT solution</h6></div>
        <div className='input_data'>
          <input 
          type="text"
          onChange={handleSearch}
          value={searchInput}
          />
          <div className='underline'></div>
            <label>¿Qué estas buscando?</label>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className='header-text_2'>
          <ul className='horizontal-menu_2'>
            <li>
              <b>Tarifas de agente <i className="fa-solid fa-caret-down"></i></b>
              <ul className='vertical-menu_2'>
                <li className='estelar'>
                  <b>Hoteles Estelar</b><br />
                  <a href="https://www.hotelesestelar.com/" target='_blank'>Codigo para cwt: Agentestelar1 
                  <img src="https://daragot.com/wp-content/uploads/2020/04/Hotel-Estelar-Daragot.png" alt="" />
                  </a>
                </li> <hr />
                <li className='accor'>
                  <b>Accor</b><br />
                  <a href="https://all.accor.com/a/es.html" target='_blank'>all.accor.com/a/es.html
                  <img src="https://group.accor.com/-/media/Corporate/Master-Page/Logos/Accor-Logo-Footer-vDef.png" alt="" />
                  </a>
                </li> <hr />
                <li className='marriott'>
                  <b>Marriott</b><br />
                  <a href="https://hotelexcellence.marriott.com/" target='_blank'>hotelexcellence.marriott.com
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Marriott_hotels_logo14.svg/2560px-Marriott_hotels_logo14.svg.png" alt="" />
                  </a>
                </li> <hr />
                <li className='hilton'>
                  <b>Hilton</b><br />
                  <a href="https://www.hilton.com/en/offers/travel-advisor-rate-2000000085/" target='_blank'>TravelAgents.Hilton.com
                    <img src="https://www.hilton.com/modules/assets/svgs/logos/WW.svg" alt="" />
                  </a>
                </li> <hr />
              </ul>
            </li>
          </ul>
        </div>

        <div className='header-text'>
          <ul className='horizontal-menu'>
            <li>
              <b>Contactos <i className="fa-solid fa-caret-down"></i></b>
              <ul className='vertical-menu'>
                <li>
                  <b>Quality Monitoring</b><br />
                  <a href="mailto:qualitymonitoring@mycwt.com">qualitymonitoring@mycwt.com</a>
                </li> <hr />
                <li>
                  <b>Customer Care</b><br />
                  <a href="mailto:customercare.co@contactcwt.com">customercare.co@contactcwt.com</a>
                </li> <hr />
                <li>
                  <b>Trámites Migratorios</b><br />
                  <a href="mailto:tramitesmigratorios@mycwt.com">tramitesmigratorios@mycwt.com</a>
                </li> <hr />
                <li>
                  <b>Power Library</b><br />
                  <a href="mailto:ActualizacionesPL@mycwt.com">ActualizacionesPL@mycwt.com</a>
                </li> <hr />
                <li>
                  <b>Power Hotel</b><br />
                  <a href="mailto:requestsphlatam@mycwt.com">requestsphlatam@mycwt.com</a>
                </li> <hr />
                <li>
                  <b>Verint (Work Force Management)</b><br />
                  <a href="mailto:WFMSpanish@mycwt.com">WFMSpanish@mycwt.com</a>
                </li> <hr />
                <li>
                  <b>TSC Support</b><br />
                  <a href="mailto:latam.tsc.ww@contactcwt.com">latam.tsc.ww@contactcwt.com</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </header>

      <div className='title_1'>
        <div className='title_info'>
          <h2>Herramientas CWT</h2>
        </div>
      </div>

      <div className='title_2'>
        <div className='title_info'>
          <h2>Proveedores aereos</h2>
        </div>
      </div>

      <div className='title_3'>
        <div className='title_info'>
          <h2>Proveedores hoteleros</h2>
        </div>
      </div>

      <div className='content-1'>
        <div className='content-1_container'>
          {
            searchResult.filter(item => item.type === "CWT").map(item => (
                <div className="card" key={item.id}>
                  <a href={item.url} target="_blank">
                    <div>
                      <h2 className='card_name'>
                        {item.name}
                      </h2>
                      <div className='card_img'>
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              )
            )
          }
          </div>
        </div>

      <div className='content-2'>
        <div className='content-2_container'>
          {
            searchResult.filter(item => item.type === "suppliers").map(item => (
                <div className={`card border-${item.preferencial}`} key={item.id}>
                  <a href={item.url} target="_blank">
                    <div>
                      <h2 className='card_name'>
                        {item.name}
                      </h2>
                      <div className='card_img'>
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              )
            )
          }
        </div>
      </div>

      <div className='content-3'>
        <div className='content-3_container'>
          {
            searchResult.filter(item => item.type === "hotels").map(item => (
                <div className={`card border-${item.preferencial}`} key={item.id}>
                  <a href={item.url} target="_blank">
                    <div>
                      <h2 className='card_name'>
                        {item.name}
                      </h2>
                      <div className='card_img'>
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              )
            )
          }
        </div>
      </div>

      <footer className='footer'>
        <h4>¿Quieres agregar algun link o contacto? envia correo con la informacion a Diego Sierra <a href="mailto:dsierra@mycwt.com">(dsierra@mycwt.com)</a></h4>
      </footer>

    </div>
  )
}

export default Card