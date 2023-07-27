import moment from "moment";
import React from "react";

interface ISimpleProfile {
    name: string | null | undefined;
    username: string | null | undefined;
    categories: string[];
    desc: string | null | undefined;
    stats: TStats[];
}

type TStats = {
    field: string;
    value: string;
};

export const SimpleProfile = ({
    name,
    username,
    categories,
    desc,
    stats,
}: ISimpleProfile) => {
    function Component() {
        const date = new Date();
        return (
            <>
                <div className="w-[950px] m-auto mt-[100px]">
                    <div className="text-end pb-[1rem] text-[#555] text-[0.85rem]">
                        Saved On:{" "}
                        <span className="font-medium">
                            {moment(date).format("DD-MM-YYYY")}
                        </span>
                    </div>
                    <div className="flex items-start gap-[2rem]">
                        <img
                            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="profile"
                            className="w-[125px] h-[125px] object-cover rounded-full"
                        />

                        <div className="names">
                            <h3 className="text-[24px] font-semibold">
                                {name || "N/A"}
                            </h3>
                            <a
                                href="https://www.instagram.com/mrbeast/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="username text-sky-400 font-light text-[12px]">
                                    {username || "N/A"}
                                </p>
                            </a>
                        </div>

                        <div className="categories flex justify-start gap-[0.5rem] flex-wrap">
                            {categories && categories?.length > 0
                                ? categories.map((cat, idx) => (
                                      <span
                                          key={idx}
                                          className="cat bg-gray-200 py-[0.1rem] px-[0.5rem] rounded-[50vw] text-[#444] text-[12px] font-medium"
                                      >
                                          {cat}
                                      </span>
                                  ))
                                : "N/A"}
                        </div>
                        <p className="desc text-[#444] italic">
                            {desc || "N/A"}
                        </p>
                    </div>

                    <div className="cards flex gap-[1.5rem] mt-[2rem]">
                        {stats && stats?.length > 0
                            ? stats.map((stat, idx) => (
                                  <div
                                      key={idx}
                                      className="card flex-1 aspect-square border-2 border-dashed border-[#db7093] rounded-[16px] flex flex-col justify-center items-center gap-[0.75rem]"
                                  >
                                      <h1 className="highlight font-black text-[#db7093] text-[32px]">
                                          {stat.value}
                                      </h1>
                                      <p className="muted text-gray-600 font-bold text-[16px]">
                                          {stat.field}
                                      </p>
                                  </div>
                              ))
                            : "N/A"}
                    </div>
                    <div className="cards flex gap-[1.5rem] mt-[2rem]">
                        {stats && stats?.length > 0
                            ? stats.map((stat, idx) => (
                                  <div
                                      key={idx}
                                      className="card flex-1 aspect-square border-2 border-dashed border-[#db7093] rounded-[16px] flex flex-col justify-center items-center gap-[0.75rem]"
                                  >
                                      <h1 className="highlight font-black text-[#db7093] text-[32px]">
                                          {stat.value}
                                      </h1>
                                      <p className="muted text-gray-600 font-bold text-[16px]">
                                          {stat.field}
                                      </p>
                                  </div>
                              ))
                            : "N/A"}
                    </div>
                    <div className="cards flex gap-[1.5rem] mt-[2rem]">
                        {stats && stats?.length > 0
                            ? stats.map((stat, idx) => (
                                  <div
                                      key={idx}
                                      className="card flex-1 aspect-square border-2 border-dashed border-[#db7093] rounded-[16px] flex flex-col justify-center items-center gap-[0.75rem]"
                                  >
                                      <h1 className="highlight font-black text-[#db7093] text-[32px]">
                                          {stat.value}
                                      </h1>
                                      <p className="muted text-gray-600 font-bold text-[16px]">
                                          {stat.field}
                                      </p>
                                  </div>
                              ))
                            : "N/A"}
                    </div>
                    <div className="cards flex gap-[1.5rem] mt-[2rem]">
                        {stats && stats?.length > 0
                            ? stats.map((stat, idx) => (
                                  <div
                                      key={idx}
                                      className="card flex-1 aspect-square border-2 border-dashed border-[#db7093] rounded-[16px] flex flex-col justify-center items-center gap-[0.75rem]"
                                  >
                                      <h1 className="highlight font-black text-[#db7093] text-[32px]">
                                          {stat.value}
                                      </h1>
                                      <p className="muted text-gray-600 font-bold text-[16px]">
                                          {stat.field}
                                      </p>
                                  </div>
                              ))
                            : "N/A"}
                    </div>
                    <div className="cards flex gap-[1.5rem] mt-[2rem]">
                        {stats && stats?.length > 0
                            ? stats.map((stat, idx) => (
                                  <div
                                      key={idx}
                                      className="card flex-1 aspect-square border-2 border-dashed border-[#db7093] rounded-[16px] flex flex-col justify-center items-center gap-[0.75rem]"
                                  >
                                      <h1 className="highlight font-black text-[#db7093] text-[32px]">
                                          {stat.value}
                                      </h1>
                                      <p className="muted text-gray-600 font-bold text-[16px]">
                                          {stat.field}
                                      </p>
                                  </div>
                              ))
                            : "N/A"}
                    </div>
                </div>
            </>
        );
    }
    return React.createElement(Component);
};
