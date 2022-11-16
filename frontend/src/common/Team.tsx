import React from 'react'
import TeamCard from '../utils/Cards/TeamCard'
import team1 from '../assets/albert.jpg';
const Team = () => {
    const data = [{
        name: 'Samir Alam',
        designation: 'Don of Birgunj',
        image:team1,
    },
    {
        name: 'Biswash Pokhrel',
        designation: 'Don of Pokhara',
        image:team1,
    },
    {
        name: 'Aashish Adhikari',
        designation: 'Don of Chitwan',
        image:team1,
    },
]
    return (
        <>
            <div className="py-20">
                <div className="xl:container mx-auto px-6 md:px-12">
                    <div className="mb-28">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Tailus blocks leadership
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                            Tailus prides itself not only on award-winning technology, but also on the talent of its
                            people of some of the brightest minds and most experienced executives in business.
                        </p>
                    </div>
                    <div className="grid gap-24 md:grid-cols-3 md:gap-12">
                        <TeamCard name={data[0].name} designation={data[0].designation} img={data[0].image} />
                        <TeamCard name={data[1].name} designation={data[1].designation} img={data[0].image} />
                        <TeamCard name={data[2].name} designation={data[2].designation} img={data[0].image} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Team