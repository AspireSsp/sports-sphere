import React, { useState } from "react";
import { Button,Input,Modal,ModalBody,ModalOverlay,ModalCloseButton,ModalContent,ModalHeader } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import EditModel from "../../component/EditModel";

function ProfilePage() {
  
  return (
    <div className="container mx-auto p-5">
      <div className="md:flex md:-mx-2 my-20">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto rounded-3xl"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
            </div>
            <div class="flex justify-center">
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                Jane Doe
              </h1>
            </div>

            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              <i className="fas fa-map-marker-alt mr-2"></i> Beech Creek, PA,
              Pennsylvania
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          {/* End of profile card */}
        </div>
        {/* Right Side */}
      

        <div className="w-full md:w-9/12 md:mx-2 mt-5 md:mt-0">
          {/* About Section */}
          <div className="flex justify-end">
            <EditModel />
          </div>
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div class="text-gray-700 flex justify-start">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">User Name</div>
                  <div class="px-4 py-2">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email</div>
                  <div class="px-4 py-2">Jane@gmail.com</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
              </div>
            </div>

            {/* Sports Section */}
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Sports</span>
            </div>
            {/* Sports buttons */}
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
            {/* Levels Section */}
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Levels</span>
            </div>
            {/* Levels information */}
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
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-4">
              <span className="text-gray-700">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Teams</span>
            </div>
            <div className="text-gray-700 flex flex-wrap justify-start mt-2 ml-8">
              {/* Buttons for sports */}
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  India
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  India A
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  CSK
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  RCB
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  ENGLAND
                </Button>
              </div>
              <div className="mr-4 mb-4">
                <Button colorScheme="black" variant="outline">
                  AUSTRALIA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
