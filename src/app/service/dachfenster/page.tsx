import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
      <div className='bg-gray-900'>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src={'/service-img/dachfenster.jpg'} // Hier kannst du dein eigenes Bild hochladen
          alt="Dachfenster Einbau und Austausch"
          fill={true}
          className="w-full h-screen object-cover"
        />
    
        {/* Overlay Content */}
        <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Professioneller Einbau und Austausch von Dachfenstern
          </h1>
    
          {/* Paragraph */}
          <ul className="list-disc list-inside max-sm:text-md space-y-3">
            <li>Fachgerechter Einbau neuer Dachfenster</li>
            <li>Austausch alter oder defekter Fenster</li>
            <li>Individuelle Beratung zu passenden Fensterlösungen</li>
            <li>Verwendung hochwertiger und energieeffizienter Produkte</li>
          </ul>
    
          <button className="px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]">
            JETZT KONTAKTIEREN
          </button>
    
          {/* Google Rating */}
          <div className="mt-6 text-left">
            <p className="text-lg">
              {/* Hier könntest du Bewertungen einfügen */}
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
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
                  Individuelle Beratung und Planung
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Jedes Dach ist anders – wir beraten Sie individuell zu geeigneten Dachfensterlösungen und planen den Einbau passgenau nach Ihren Wünschen und den baulichen Gegebenheiten.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://www.weigel-bedachungen.de/media/de/handwerker/dach/dachfenster/dachfenster_1.jpg"
                    alt="Dachfenster Beratung"
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
                  Präziser Einbau & höchste Qualität
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Unsere Experten sorgen für eine präzise Installation Ihrer Dachfenster – sauber, effizient und langlebig. Wir achten auf perfekte Abdichtung und optimale Wärmedämmung.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://benz24.de/media/catalog/product/cache/729f5e2e6f0ccdfe7065280a50117eb2/1/2/127651-02-xxl_1_1.jpg"
                    alt="Dachfenster Einbau"
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
                  Austausch alter Dachfenster – einfach & schnell
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Ihre alten Dachfenster sind undicht oder beschädigt? Wir übernehmen den fachgerechten Austausch gegen moderne, energieeffiziente Modelle – schnell, zuverlässig und ohne große Baustelle.
                </p>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://www.fensterdepot24.de/media/catalog/product/n/e/neu-dachfenster_grau_wellig-neu.jpg"
                    alt="Dachfenster Austausch"
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
