'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import './spinner.css'


export default function TableData() {
  const [Country, setCountry] = useState('United States')

  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
    params: {
      query: Country,
      locale: 'en-US'
    },
    headers: {
      'x-rapidapi-key': 'fbfa73db6dmshbd26828448f8eadp186cbajsn74b3c3446b5e',
      'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    },
  }

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['flight data', Country],
    queryFn: async () => {
      const res = await axios.request(options);
      const data = await res.data.data
      return data
    },
  })


  return (
    <div className="max-w-5xl mx-auto my-20 space-y-8 px-6 md:px-4 xl:px-0">

      <div className="text-center space-y-1">
        <h3 className="font-bold uppercase text-lg">Flight Search Results</h3>
        <p className="text-balance hidden md:block">Explore available flights with detailed information on <br /> airlines, prices, and durations to find your perfect journey.</p>
      </div>

      <div className="flex justify-end">
        <select onChange={(e) => {
          setCountry(e.target.value);
          refetch();
        }} className="select select-bordered select-sm md:select-md w-full max-w-40">
          <option disabled selected>Country</option>
          <option>Bangladesh</option>
          <option>India</option>
          <option>Canada</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Pakistan</option>
        </select>
      </div>

      {
        isLoading
          ?
          <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <div class="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h4 className="mt-6 text-[#004dff]">Loading...</h4>
          </div>
          :
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

              <thead className="text-xs text-black uppercase bg-gray-50 border-[1.3px] border-dashed border-[#cbde7a]">
                <tr>
                  <th scope="col" className="px-6 py-3">Airport Name</th>
                  <th scope="col" className="px-6 py-3">City</th>
                  <th scope="col" className="px-6 py-3">Country</th>
                  <th scope="col" className="px-6 py-3">Sky Id</th>
                </tr>
              </thead>

              <tbody>
                {data?.slice(1, data?.length - 1).map((item, index) => (
                  <tr key={index} className="border-b-[1.3px] border-dashed border-[#cbde7a]">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?.presentation?.suggestionTitle}
                    </th>
                    <td className="px-6 py-4">{item?.navigation?.relevantHotelParams?.localizedName}</td>
                    <td className="px-6 py-4">{item?.presentation?.subtitle}</td>
                    <td className="px-6 py-4">{item?.skyId}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
      }
    </div>
  )
}
