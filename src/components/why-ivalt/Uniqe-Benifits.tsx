import React from 'react'
const Points = [
    "Scalable Growth in an Exponentially Faster AI Era",
    "Enhanced Compliance",
    "Unassailable Human Identity for Everything",
    "Consolidation of Fragmented Identity Solutions",
    "Stronger Privileged Access Step - Ups",
    "Cross Ecosystem Controls(partners, supply chain)"

];
export const UniqeBenifits = () => {

    return (
        <div className="bg-gray-50 p-4 sm:p-6 md:py-8 mt-6 sm:mt-8 rounded-2xl shadow-md max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary">
                Unique Benefits
            </h1>
            <ul className="list-disc list-inside space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                {Points.map((point, index) => (
                    <li
                        key={index}
                        className="text-base sm:text-lg md:text-2xl text-gray-700 transition-colors duration-200 hover:text-primary"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>


        // </div>
    )
}
