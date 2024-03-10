import React from 'react'
import Filter from '../../component/Filter';
import UserCard from '../../component/UserCard';

const Home = () => {
  return (
    <div>
        <div className="h-screen overflow-y-scroll bg-white">
            <div className="grid grid-cols-1 mt-16 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
                <div className="post p-5 lg:p-1 rounded-md">
                    <div className="lg:fixed lg:top-28 lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                            <Filter />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 p-4 bg-white" id="posted">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <UserCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;