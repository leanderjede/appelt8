import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
      <div className='bg-gray-900'>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src={'/service-img/dachfenster.jpg'}
          alt="Türen Einbau und Austausch"
          fill={true}
          className="w-full h-screen object-cover"
        />
    
        {/* Overlay Content */}
        <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Fachgerechter Einbau und Austausch von Türen
          </h1>
    
          {/* Paragraph */}
          <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
            <li>Einbau von Innentüren, Haustüren und Spezialtüren</li>
            <li>Demontage und fachgerechte Entsorgung alter Türen</li>
            <li>Maßgenaue Anpassung und professionelle Abdichtung</li>
            <li>Verwendung hochwertiger Materialien und Beschläge</li>
          </ul>
          <button className="px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]">
            JETZT KONTAKTIEREN
          </button>
    
          {/* Google Rating */}
          <div className="mt-6 text-left">
            <p className="text-lg">
              {/* Hier könntest du z.B. Google Bewertungen integrieren */}
              <span className="ml-2"></span>
            </p>
          </div>
        </div>
      </div>
    
      {/* sections */}
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 mt-10">
        
        {/* Section 1 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                  Individuelle Türlösungen für Ihr Zuhause
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Ob moderne Glastüren, klassische Holztüren oder spezielle Sicherheitstüren – wir beraten Sie umfassend und finden gemeinsam die perfekte Lösung für Ihre Wohn- oder Geschäftsräume.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://www.pshomemaintenance.com/wp-content/uploads/2025/01/Door-repair.jpg"
                    alt="Türen Auswahl"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Section 2 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                  Präzise Montage und höchste Qualität
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Unser erfahrenes Team sorgt für eine exakte Montage Ihrer Türen – passgenau, sauber und mit langlebigen Ergebnissen. Präzision und Qualität stehen für uns an erster Stelle.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    alt="Türmontage"
                    loading="lazy"
                    src="https://www.theupvcdoctor.co.uk/wp-content/uploads/2024/04/door-repair-installation-handyman-service-1.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Section 3 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                  Alles aus einer Hand
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Von der Beratung über die Auswahl bis zur Endmontage – wir begleiten Sie während des gesamten Projekts und kümmern uns um alle Details, damit Sie stressfrei zu Ihrer neuen Tür kommen.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    alt="Tür Einbau"
                    loading="lazy"
                    src="https://www.theupvcdoctor.co.uk/wp-content/uploads/2024/04/Door-Repairs-in-North-Wales2.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    
    );
}

export default Page;
