import React from 'react'

const SportsLevel = () => {
  return (
    <div>
                 <div className="text-gray-700 flex flex-wrap justify-start mt-2">
              <div className="grid grid-cols-2 text-sm">
                {/* Game levels */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">CRICKET:</div>
                  <div className="px-4 py-2">State Level</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">FOOTBALL:</div>
                  <div className="px-4 py-2">National Level</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">HOCKEY:</div>
                  <div className="px-4 py-2">Beginner</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Table Tannis:</div>
                  <div className="px-4 py-2">Block Level</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Badminton:</div>
                  <div className="px-4 py-2">Internation Level</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Volleyball:</div>
                  <div className="px-4 py-2">Beginner</div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default SportsLevel