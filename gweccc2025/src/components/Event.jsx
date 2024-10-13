import React from 'react'

function Event() {
  return (
    <section className='schedule-section'>
    <h1>Event Schedule</h1>
       <table>
          <thead>
               <tr>
                    <th>Date</th>
                    <th>Topic</th>
                    <th>Speaker</th>
               </tr>
          </thead>
          <tbody>
               <tr>
                    <td>23 Febuary, 2025</td>
                    <td>Water Conservation and Management</td>
                    <td>Dr. APJ Kalam</td>
               </tr>
               <tr>
                    <td>24 Febuary, 2025</td>
                    <td>Renewable Energy Advances</td>
                    <td>Robert Jony</td>
               </tr>
               <tr>
                    <td>25 Febuary, 2025</td>
                    <td>Climate Action and Sustainability</td>
                    <td>Dr. Smith</td>
               </tr>
          </tbody>
       </table>
    </section>
  )
}

export default Event