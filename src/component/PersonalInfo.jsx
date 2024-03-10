import React from 'react'

const PersonalInfo = () => {
  return (
    <div>
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
    </div>
  )
}

export default PersonalInfo