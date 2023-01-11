import React from "react";
import { useState } from "react";
import { data } from "./Clientdata";
import { Employeedata } from "./Employeedata";
import { CompanyData } from "./CompanyData";
import "../../src/Component/TeamboTabs.css";


const TeamboTabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [clientData, setClientData] = useState(data);
  const [employeeData, setEmployeeData] = useState(Employeedata);
  const [companyData, setCompanyData] = useState(CompanyData);

  return (
    <div className="mb-12 font-bold  ">
      <div className="mainContainer">
        <div className="Tabs ">
          <div className="container md:flex gap-12 ">
            <div className="max-w-xl">
              <div className="arrow-class flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="blue"
                  class="w-6 h-6"
                  className="hover:cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                    clip-rule="evenodd"
                  />
                </svg>

                <h1 className="md:text-xl text-blue-600 p-2">Analytics</h1>
              </div>

              <ul className=" space-y-5 mt-4">
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(1)}
                    className="font-size inline-block px-7 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 focus:text-white focus:bg-blue-700 "
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(2)}
                    className="font-size inline-block pl-8 pr-14 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 focus:text-white focus:bg-blue-700 "
                  >
                    Client
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(3)}
                    className="font-size inline-block px-7 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 focus:text-white focus:bg-blue-700 "
                  >
                    Employee
                  </a>
                </li>
              </ul>
            </div>

            <div className="Tab-Content">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="">
                  <div className="flex space-x-1">
                    <input
                      type="text"
                      className="block w-1/5 px-4 py-1 text-purple-700 bg-white border rounded-full focus:border-blue-200 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <button className="px-3  text-black border-2 border-gray-200 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <table className="mt-5">
                  <thead className="">
                    <tr className="">
                      <th className="">Client Name</th>
                      <th>Tasks</th>
                      <th>LiveTasks</th>

                      <th>Man hours</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {companyData.map(
                      ({
                        clientName,
                        Tasks,
                        LiveTasks,

                        ManHours,
                      }) => {
                        return (
                          <tr className="shadow-sm">
                            <td className="py-2">{clientName}</td>

                            <td className="px-28">{Tasks}</td>
                            <td className="px-28 ">{LiveTasks}</td>

                            <td className="px-28">{ManHours} hrs</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <table className="">
                  <thead className="">
                    <tr className="">
                      <th className="">Task</th>
                      <th>Teammates</th>
                      <th>Assigned</th>
                      <th>Corrections</th>
                      <th>Man hours</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {clientData.map(
                      ({
                        Task,
                        Teammates,
                        Assigned,
                        Corrections,
                        manhours,
                      }) => {
                        return (
                          <tr className="shadow-sm">
                            <td className="py-3">{Task}</td>
                            <td className="px-16">{Teammates}</td>
                            <td className="px-16">{Assigned}</td>
                            <td className="px-16">{Corrections}</td>
                            <td className="px-16">{manhours}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <table className="">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Task</th>
                      <th>Live Task</th>

                      <th>Man hours</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {employeeData.map(
                      ({ Employee, Task, LiveTasks, manHours }) => {
                        return (
                          <tr className="shadow-sm">
                            <td className="py-3">{Employee}</td>

                            <td className="px-20">{Task}</td>

                            <td className="px-20 text-blue-400">{LiveTasks}</td>
                            <td className="px-20">{manHours}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamboTabs;
