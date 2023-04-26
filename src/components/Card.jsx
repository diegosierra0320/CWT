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
      name: "Power Library",
      url: "https://iprod1powerlibrary.mycwt.com/",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
    {
      id: 3,
      type: "CWT",
      name: "Power Hotel",
      url: "https://int.cwthotel360.com/hotelsearch.aspx?params=zp4oX5hkHY2pq9uBKtB4Qeech3U5qlmb1c+ioyhAM0rMnJM8iHgBdvNFEWIeGiM5E6DbYNaXMq9+SD/YxfsJzhy6894okZsKPUKtFO5jfTw=",
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
      url: "https://wfo.mt2.verintcloudservices.com/wfo/control/signin",
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
      type: "suppliers",
      name: "Puntos Latam",
      url: "https://puntoslatam.com.co/autenticacion",
      img: "https://megaincentivos-p.s3.amazonaws.com/static/images/Latam/logo_image.png",
      preferencial: "yes"
    },
    {
      id: 12,
      type: "suppliers",
      name: "Latam trade",
      url: "https://www.latamtrade.com/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1200px-Latam-logo_-v_%28Indigo%29.svg.png",
      preferencial: "yes"
    },
    {
      id: 13,
      type: "suppliers",
      name: "Delta PRO",
      url: "https://pro.delta.com/content/agency/erp/es/login.html#",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/368px-Delta_logo.svg.png",
      preferencial: "yes"
    },
    {
      id: 14,
      type: "suppliers",
      name: "United",
      url: "https://jetstream.united.com/?lang=es#/public-landing",
      img: "https://1000marcas.net/wp-content/uploads/2020/11/United-Airlines-logo-768x415.png",
      preferencial: "yes"
    },
    {
      id: 15,
      type: "suppliers",
      name: "American",
      url: "https://ssc.aa.com/siebel/app/prmportal/enu/?SWECmd=GotoView&SWEView=Home+Page+View+(SCW)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Login+Applet+(PRM)&SWERowId0=VRId-0",
      img: "https://www.aa.com/content/images/chrome/rebrand/aa-logo.png",
      preferencial: "yes"
    },
    {
      id: 16,
      type: "suppliers",
      name: "Hertz",
      url: "https://www.hertz.com/rentacar/reservation/?&utm_content=M8-SEM&gclid=EAIaIQobChMIweO6g6rF_gIVJiatBh3mIgF1EAAYASAAEgLaivD_BwE&gclsrc=aw.ds",
      img: "https://images.hertz.com/misc/overlay/hertz-logo-black.png",
      preferencial: "yes"
    },
    {
      id: 17,
      type: "suppliers",
      name: "Avianca trade",
      url: "https://www.avianca.com/co/es/trade/",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDKSzXuHGZeVUCYqdP_WFCmYkfjcMgmdmGoJBhrpxWBoAPBzDkqBjwY5Hv9285bfeLxw&usqp=CAU",
      preferencial: "no"
    },
    {
      id: 18,
      type: "suppliers",
      name: "CTM",
      url: "https://www.ctmenlinea.com.co/es",
      img: "https://cdn.bmpcloud.com/static/assets/business/ctm/images/logo.png?v=20155",
      preferencial: "no"
    },
    {
      id: 19,
      type: "suppliers",
      name: "Jet smart",
      url: "https://www.jetsmart.com/",
      img: "https://www.jetsmart.com/images/header/jetsmart-logo-colored.svg",
      preferencial: "no"
    },
    {
      id: 20,
      type: "suppliers",
      name: "Volaris",
      url: "https://www.volaris.com/",
      img: "https://www.volaris.com/uipl-assets/images/volaris-logo.svg",
      preferencial: "no"
    },
    {
      id: 21,
      type: "suppliers",
      name: "Viva aerobus",
      url: "https://web.vivaaerobus.com/mx/vivaempresas",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Vivaaerobus-logo.png",
      preferencial: "no"
    },
    {
      id: 22,
      type: "suppliers",
      name: "Viva Air",
      url: "https://www.vivaair.com/co/es/user/profile",
      img: "./utils/viva-air.svg",
      preferencial: "no"
    },
    {
      id: 23,
      type: "suppliers",
      name: "Plataforma 10",
      url: "https://red.plataforma10.net/?returnUrl=%2FPVs%2FNotificaciones&sesionExpirada=True",
      img: "https://red.plataforma10.net/public/images/logo-plataforma10-login.jpg",
      preferencial: "no"
    },
    {
      id: 24,
      type: "suppliers",
      name: "Central de pasajes",
      url: "https://www.aiv.tur.ar/aiv/ingreso.htm",
      img: "https://www.centraldepasajes.com.ar/cdp/img/home/logo-central-de-pasajes.png",
      preferencial: "no"
    },
    {
      id: 25,
      type: "suppliers",
      name: "Buquebus",
      url: "https://agencias.buquebus.com/",
      img: "/utils/Buque.svg",
      preferencial: "no"
    },
    {
      id: 26,
      type: "suppliers",
      name: "KIU Click",
      url: "https://kiu.click/login/",
      img: "https://aerolatinnews.com/wp-content/uploads/2014/08/KIU_MASTER_CHICO_CMYK-e1415184223322.jpg",
      preferencial: "no"
    },
    {
      id: 27,
      type: "suppliers",
      name: "Hahn Air",
      url: "https://www.hahnair.com/es",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Hahn_Air_Logo.svg/263px-Hahn_Air_Logo.svg.png",
      preferencial: "no"
    },
    {
      id: 28,
      type: "CWT",
      name: "Penalidades Aerolineas",
      url: "https://mycwt.jiveon.com/docs/DOC-29232",
      img: "/utils/CWT.png",
      preferencial: "no"
    },
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
        <img src="/utils/CWT+logo white.png" alt="" />

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
      </header>

      <div className='title_1'>
        <div className='title_info'>
          <h2>Contactos</h2>
        </div>
      </div>

      <div className='title_2'>
        <div className='title_info'>
          <h2>Links herramientas CWT</h2>
        </div>
      </div>

      <div className='title_3'>
        <div className='title_info'>
          <h2>Links proveedores</h2>
        </div>
      </div>

      <div className='list'>
        <div className='container-list'>
          <article>
              <ul className='container-list_ul'>
                <div className='container-list_info'>
                  <li><b>Trámites Migratorios</b><br />
                    <a href="mailto:tramitesmigratorios@mycwt.com">tramitesmigratorios@mycwt.com</a>
                  </li>
                  <i className="fa-solid fa-passport"></i>
                </div> <hr />
                <div className='container-list_info'>
                  <li><b>Power Library</b><br />
                    <a href='mailto:ActualizacionesPL@mycwt.com'>ActualizacionesPL@mycwt.com</a></li>
                  <i className="fa-solid fa-book"></i>
                </div> <hr />
                <div className='container-list_info'>
                  <li><b>Power Hotel</b><br />
                    <a href='mailto:requestsphlatam@mycwt.com'>requestsphlatam@mycwt.com</a></li>
                  <i className="fa-solid fa-hotel"></i>
                </div> <hr />
                <div className='container-list_info'>
                  <li><b>Verint (Work Force Management)</b><br />
                    <a href='mailto:WFMSpanish@mycwt.com'>WFMSpanish@mycwt.com</a></li>
                  <i className="fa-solid fa-clock"></i>
                </div> <hr />
                <div className='container-list_info'>
                  <li><b>TSC Support</b><br />
                    <a href='mailto:latam.tsc.ww@contactcwt.com'>latam.tsc.ww@contactcwt.com</a></li>
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
              </ul>
            </article>
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

      <footer className='footer'>
        <h4>¿Quieres agregar algun link o contacto? envia correo con la informacion a Diego Sierra <a href="mailto:dsierra@mycwt.com">(dsierra@mycwt.com)</a></h4>
      </footer>

    </div>
  )
}

export default Card