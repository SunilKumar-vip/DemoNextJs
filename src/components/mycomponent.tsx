import React, { useEffect, useState } from "react";

function MyComponent() {
  const [records, setRecords] = useState<any>();

  useEffect(() => {
    fetch(`https://demo6396395.mockable.io/bcf-boards`)
      .then((response) => response.json())

      .then((data) => setRecords(data))

      .catch((err) => console.log(err));
  }, []);

  console.log(records, "ddddd");
  return (
    <div>
      <h1 style={{ color: "red" }}> Board Data List</h1>
      {records?.boards?.map((boardGroup: any) => (
        <>
          <div key={boardGroup.id}>
            <div>id: {boardGroup.id}</div>
            <div> Name : {boardGroup.name}</div>
            <div> Created At :{boardGroup.createdAt}</div>
            {boardGroup.bcfs.map((bcf: any) => (
              <ul key={bcf.id}>
                <li>id: {bcf.id}</li>
                <li> Name : {bcf.name}</li>
                <li> createdAt : {bcf.createdAt}</li>
                <ul>
                  {bcf.bcfBoards.map((bcfBoard: any) => (
                    <div key={bcfBoard.id}>
                      <li>bcfBoardId : {bcfBoard.id}</li>
                      <li>bcfBoardName :{bcfBoard.name}</li>
                      <li>bcfBoardCreatedAt :{bcfBoard.createdAt}</li>
                    </div>
                  ))}
                </ul>
              </ul>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default MyComponent;
