import Image from "next/image";

export default function OfferingIntro() {
  return (
    <section id="introducing" className="bg-white">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <p className="text-md md:text-lg font-semibold">Introducing...</p>
            <Image
              src="/logo.png"
              alt="Ruchika Copy Solutions"
              width={220}
              height={70}
              className="h-auto w-auto"
              priority
            />
            <p className="text-xl md:text-2xl font-semibold text-brandSecondary">
              Ruchika Copy Solutions: Website Messaging and Copywriting for Service Providers
            </p>
          </div>

          <p className="text-md md:text-lg leading-relaxed">
            A strategic website copywriting process built on...
          </p>

          <ul className="list-disc pl-5 space-y-4 text-md md:text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-brandDark">Messaging rooted in deep audience research:</span>{" "}
              based on survey responses from your right-fit clients and forum or group mining.
            </li>
            <li>
              <span className="font-semibold text-brandDark">Conversion focused copywriting:</span>{" "}
              writing that moves past &quot;what you do&quot; and makes your value and relevance unmistakable
              to the right audience.
            </li>
            <li>
              <span className="font-semibold text-brandDark">Brand voice and tone:</span>{" "}
              to ensure your copy has the qualities, expression, and quirks that give your brand
              human characteristics.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
