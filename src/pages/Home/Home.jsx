import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <Outlet />

                    <div className='w-[700px]'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <NavLink to='frontend' className="btn btn-primary">Frontend</NavLink>
                        <NavLink to='backend' className="btn btn-primary">Backend</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home