import Card from '@/components/Card'
import React from 'react'

export default function HomePage() {
    return (
        <>
            <div className='flex flex-wrap gap-6 justify-center my-6'>
                <Card image={"/events/event-img.png"} title={"A Night of Rhythmic Bliss"} description={"Join us for an evening of soulful melodies and rhythmic beats."} />
                <Card image={"/events/event-img2.jpg"} title={"flex-wrap"} description={"Show off your moves and have a blast with friends at our dance party."} />
                <Card image={"/events/event-img3.jpg"} title={"Holi Hai!"} description={"Indulge in delicious food, music, and dance at our Holi celebration."} />
            </div>
        </>
    )
}
