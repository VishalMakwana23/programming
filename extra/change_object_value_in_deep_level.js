// change object value in deep level

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const data1 = [
  {
    id: "001",
    type: "A",
    value: "aaaaa",
    "data:": {},
    path: ["001"],
    children: [
      {
        id: "002",
        type: "A",
        value: "parth",
        "data:": {},
        path: ["001", "002"],
        children: [
          {
            id: "00001",
            type: "B",
            children: [
              {
                id: "00001",
                type: "B",
                children: [
                  {
                    id: "00001",
                    type: "B",
                    children: [],
                    value: "aaaaa111",
                  },
                ],
                value: "aaaaa111",
              },
            ],
            value: "aaaaa111",
          },
        ],
      },
      {
        id: "003",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "003"],
        children: [
          {
            id: "00001",
            type: "B",
            children: [],
            value: "aaaaa111",
          },
        ],
      },
      {
        id: "004",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "004"],
        children: [
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [],
          },
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [
              {
                id: "00002",
                type: "B",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "00003",
        type: "B",
        children: [],
      },
    ],
  },
  {
    id: "002",
    type: "A",
    value: "bbbb",
    "data:": {},
    path: ["001"],
    children: [
      {
        id: "002",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "002"],
        children: [],
      },
      {
        id: "003",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "003"],
        children: [
          {
            id: "00001",
            type: "B",
            children: [],
          },
        ],
      },
      {
        id: "004",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "004"],
        children: [
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [],
          },
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [
              {
                id: "00002",
                type: "B",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "00003",
        type: "B",
        children: [],
      },
    ],
  },
];

function App() {
  const [data, setData] = useState(data1);
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <RecurComponenet data={data} setData={setData} alldata={data} />
    </div>
  );
}

const RecurComponenet = ({
  data,
  level = null,
  setData,
  padding = 0,
  alldata,
}) => {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} style={{ paddingLeft: padding }}>
          <input
            value={item.value}
            onChange={(e) => {
              const modifyData = () => {
                if (level) {
                  const levels = `${level}.${index}`.split(".");
                  console.log(levels, "levels");
                  const recur = (pData, index = 0, ans = []) => {
                    if (index === levels.length) return ans;
                    if (index === levels.length - 1) {
                      return pData.map((item, id) => {
                        return id === +levels[index]
                          ? { ...item, value: e?.target?.value }
                          : item;
                      });
                    }
                    ans = pData.map((item, id) => {
                      return id === +levels[index]
                        ? {
                            ...item,
                            children: recur(item.children, index + 1, ans),
                          }
                        : item;
                    });
                    return ans;
                  };
                  const finalData = recur(alldata);
                  console.log(finalData, "finalData-========");
                  return finalData;
                } else {
                  return alldata.map((item, id) => {
                    return id === index
                      ? { ...item, value: e?.target?.value }
                      : item;
                  });
                }
              };
              setData(modifyData());
            }}
          />
          {item?.children.length > 0 && (
            <RecurComponenet
              data={item?.children}
              level={`${level ? `${level}.${index}` : `${index}`}`}
              setData={setData}
              padding={padding + 10}
              alldata={alldata}
            />
          )}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));