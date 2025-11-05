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
        <div className="bg-gray-50 py-6 mt-8 rounded-2xl shadow-md text-2xl  w-6xl flex flex-col items-center space-y-3 mx-auto">
            <h1 className="text-4xl font-bold text-center  mb-4 py-4 text-primary pb-2">
                Unique Benefits
            </h1>
            <ul className="list-disc list-inside space-y-6  text-gray-700">
                {Points.map((point, index) => (
                    <li
                        key={index}
                        className="transition-colors duration-200"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>


        // </div>
    )
}
