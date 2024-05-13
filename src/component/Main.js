import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardTitle, CardSubtitle,CardText ,CardLink } from "./styled";
import Info from "./info";

export default function Main() {
    return <>
     <CardContainer>
      <div className="card-body">
        <CardTitle className="card-title">승패 예측 게임</CardTitle>
        <CardSubtitle className="card-subtitle mb-2 text-body-secondary">랜덤 숫자로 승패 예측</CardSubtitle>
        <CardText className="card-text">먼저 승패를 예측하고, 숫자를 뽑아 컴퓨터와 비교하여 내가 예상한 승패가 맞는지 확인해보세요!</CardText>
        <CardLink className="card-link"><Link to="/button">바로가기</Link></CardLink>
      </div>
    </CardContainer>

    <CardContainer>
      <div className="card-body">
        <CardTitle className="card-title">To-Do List</CardTitle>
        <CardSubtitle className="card-subtitle mb-2 text-body-secondary">할 일이 있나요?</CardSubtitle>
        <CardText className="card-text">할 일이 있으신가요? 계획을 짜볼까요? To-Do List를 작성하고 완료한 것들은 삭제해보세요!</CardText>
        <CardLink className="card-link"><Link to="/name">바로가기</Link></CardLink>
      </div>
    </CardContainer>
    { <h2><Link to="/json">link1</Link></h2> }
    <Info Info={350}/>
    </>
}