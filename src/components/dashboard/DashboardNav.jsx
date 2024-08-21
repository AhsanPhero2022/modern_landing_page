import { Button } from "antd";

const DashboardNav = () => {
  return (
    <div className="">
      <div className="text-white py-4 px-4 navbar bg-[#001529]">
        <div className="flex justify-between items-center">
          <div className="">
            <a className="btn btn-ghost font-semibold text-xl">User Profile</a>
          </div>
          <div className="">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Button className="btn btn-outline font-bold">Logout</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
