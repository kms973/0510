import React, { useEffect, useState } from "react";
import axios from "axios";

export default function JsonApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 엔드포인트
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // axios를 사용하여 GET 요청 보내기
    axios.get(apiUrl)
      .then(response => {
        // 응답 데이터 처리
        setData(response.data);
      })
      .catch(error => {
        // 에러 처리
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <div>
      {/* 데이터 표시 */}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
