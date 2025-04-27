import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
      <div className='bg-gray-900'>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src={'/service-img/tueren-einbau.jpg'} // <<< eigenes Bild für Türen
          alt="Einbau und Austausch von Türen"
          fill={true}
          className="w-full h-screen object-cover"
        />
    
        {/* Overlay Content */}
        <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Einbau und Austausch von Türen – Fachgerecht & Zuverlässig
          </h1>
    
          {/* Leistungen */}
          <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
            <li>Individuelle Beratung und Aufmaß direkt vor Ort</li>
            <li>Montage von Innen-, Außen- und Brandschutztüren</li>
            <li>Präziser Austausch ohne Bauschäden</li>
            <li>Verwendung hochwertiger Materialien und Beschläge</li>
          </ul>
    
          {/* Button */}
          <button className="px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]">JETZT KONTAKTIEREN</button>
    
          {/* Google Rating (kannst du später ergänzen) */}
          <div className="mt-6 text-left">
            <p className="text-lg">
              {/* Platzhalter für Bewertung */}
              <span className="ml-2"></span>
            </p>
          </div>
        </div>
      </div>
    
      {/* Sections */}
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 mt-10">
        {/* Section 1 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                    Beratung und Planung rund um Ihre Türen
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Wir unterstützen Sie bei der Auswahl der richtigen Tür für Ihr Zuhause oder Ihr Gewerbeobjekt. Maßgeschneiderte Beratung hinsichtlich Material, Sicherheit, Wärmedämmung und Design gehört selbstverständlich dazu.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://www.thompsoncreek.com/wp-content/uploads/2017/06/shutterstock_1608080728-738x409.jpg"
                    alt="Beratung Türen"
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
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                    Fachgerechter Einbau von Türen
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Unsere erfahrenen Monteure sorgen für eine passgenaue Installation Ihrer Türen – schnell, sauber und ohne unnötige Baumaßnahmen. Präzision und Qualität stehen dabei im Vordergrund.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://windowsglassrepair.com/wp-content/uploads/2024/07/glass-website-canada-image-2.jpg"
                    alt="Tür Einbau"
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
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                    Austausch alter Türen & Renovierungsservice
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Alte Türen tauschen wir fachgerecht aus – schnell, zuverlässig und ohne große Bauarbeiten. Auf Wunsch übernehmen wir auch kleinere Renovierungsarbeiten rund um Türrahmen und Maueröffnungen.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://fensterusa.com/wp-content/uploads/2022/05/window-replacement-alternatives.jpg"
                    alt="Tür Austausch"
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
