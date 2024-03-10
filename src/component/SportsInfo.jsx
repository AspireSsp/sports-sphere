import React from 'react'

const SportsInfo = () => {
  return (
    <div>
            <div className="text-gray-700 flex flex-wrap justify-start mt-2 ml-8">
              {/* Buttons for sports */}
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  CRICKET
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  FOOTBALL
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  HOCKY
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  TABLE TENNIS
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  BADMINTON
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  VOLLEYBALL
                </Button>
              </div>
            </div>
    </div>
  )
}

export default SportsInfo